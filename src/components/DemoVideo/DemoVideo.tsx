import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Maximize, CheckCircle } from "lucide-react";
import styles from "./DemoVideo.module.css";

const VIDEO_SRC = "/demo-video.mp4";

const bullets = [
  "Scan business cards instantly",
  "AI extracts accurate details",
  "Save, organize and connect",
  "Export and never lose contacts",
];

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function DemoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => setCurrentTime(v.currentTime);
    const onDur = () => setDuration(v.duration);
    const onEnd = () => {
      setPlaying(false);
      setShowOverlay(true);
    };
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("loadedmetadata", onDur);
    v.addEventListener("ended", onEnd);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("loadedmetadata", onDur);
      v.removeEventListener("ended", onEnd);
    };
  }, []);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setShowOverlay(false);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(!muted);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    const bar = progressRef.current;
    if (!v || !bar) return;
    const rect = bar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = pct * duration;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className={styles.section} id="demo">
      <div className={styles.container}>
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.content}>
            <h2 className={styles.title}>
              See How It <span>Works</span>
            </h2>

            <p className={styles.description}>
              Watch this short video to see how you can scan, save and manage
              your business contacts in just a few taps.
            </p>

            <div className={styles.bulletList}>
              {bullets.map((bullet) => (
                <div key={bullet} className={styles.bulletItem}>
                  <CheckCircle size={18} className={styles.bulletIcon} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            <button className={styles.demoBtn} onClick={togglePlay}>
              <Play size={18} />
              Watch Full Demo
            </button>
          </div>

          <div className={styles.videoArea}>
            <div className={styles.videoInner}>
              <video
                ref={videoRef}
                className={styles.video}
                src={VIDEO_SRC}
                muted
                playsInline
                preload="metadata"
                onClick={togglePlay}
              />

              {showOverlay && (
                <div className={styles.videoOverlay}>
                  <div className={styles.overlayText}>
                    <span>Scan</span>
                    <span>Save</span>
                    <span>Connect</span>
                  </div>
                  <p className={styles.overlayTagline}>All in One Tap</p>
                </div>
              )}

              {!playing && (
                <div className={styles.playButton} onClick={togglePlay}>
                  <Play size={30} className={styles.playIcon} />
                </div>
              )}

              <div className={styles.controls}>
                <button className={styles.controlBtn} onClick={togglePlay}>
                  {playing ? <Pause size={18} /> : <Play size={18} />}
                </button>

                <span className={styles.time}>
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>

                <div
                  ref={progressRef}
                  className={styles.progressTrack}
                  onClick={handleProgressClick}
                >
                  <div
                    className={styles.progressFill}
                    style={{ width: `${progressPct}%` }}
                  />
                </div>

                <button className={styles.controlBtn} onClick={toggleMute}>
                  {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>

                <button className={styles.controlBtn} onClick={handleFullscreen}>
                  <Maximize size={18} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
