"use client";

import { useEffect, useRef, useState } from "react";
import Hls from "hls.js";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  RotateCcw,
  RotateCw,
  PictureInPicture,
} from "lucide-react";

const getQualityLabel = (level) => {
  if (!level) return "Unknown";
  if (level.name) return level.name;
  if (level.height) return `${level.height}p`;
  if (level.width) return `${level.width}p`;
  if (level.bitrate) return `${Math.round(level.bitrate / 1000)} kbps`;
  return "Custom";
};

export default function Html5Player({ url }) {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const hlsRef = useRef(null);
  const hideControlsTimeout = useRef(null);
  const levelCheckTimeoutRef = useRef(null);

  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(1);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showControls, setShowControls] = useState(true);

  const [qualityLevels, setQualityLevels] = useState([]);
  const [selectedQuality, setSelectedQuality] = useState("auto");
  const [activeQualityLabel, setActiveQualityLabel] = useState("Auto");
  const [isHlsSource, setIsHlsSource] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // const nextIsHls = url.toLowerCase().includes(".m3u8");
  const nextIsHls =
  url.toLowerCase().includes(".m3u8") ||
  url.includes("application/vnd.apple.mpegurl");
    console.log("[Html5Player] Loading URL:", url, "Is HLS:", nextIsHls);
    
    setIsHlsSource(nextIsHls);
    setQualityLevels([]);
    setSelectedQuality("auto");
    setActiveQualityLabel("Auto");
    setProgress(0);
    setDuration(0);

    if (hlsRef.current) {
      hlsRef.current.destroy();
      hlsRef.current = null;
    }

    // if (nextIsHls) {
    //   if (video.canPlayType("application/vnd.apple.mpegurl")) {
    //     console.log("[Html5Player] Native HLS support detected");
    //     video.src = url;
    //     video.load();
    //   } else if (Hls.isSupported()) {
    //     console.log("[Html5Player] Using hls.js library");
    //     const hls = new Hls({ capLevelToPlayerSize: true });
    if (nextIsHls) {

  if (Hls.isSupported()) {

    console.log("[Html5Player] Using hls.js library");

    const hls = new Hls({
      capLevelToPlayerSize: true,
    });

        const updateLevels = () => {
          console.log("[updateLevels] hls.levels:", hls.levels);
          console.log("[updateLevels] hls.levels.length:", hls.levels ? hls.levels.length : 0);
          
          if (!hls.levels || hls.levels.length === 0) {
            console.warn("[updateLevels] No levels available");
            return;
          }
          
          const levels = hls.levels.map((level, index) => {
            console.log(`[updateLevels] Level ${index}:`, {
              height: level.height,
              bitrate: level.bitrate,
              name: level.name,
              width: level.width,
            });
            return {
              index,
              label: getQualityLabel(level),
              height: level.height || 0,
              bitrate: level.bitrate || 0,
            };
          })
        //   .sort((a, b) => a.height - b.height);

          console.log("[updateLevels] Processed levels:", levels);
          setQualityLevels(levels);
          console.log("[updateLevels] setQualityLevels called with", levels.length, "levels");

          const currentIndex = hls.currentLevel;
          const nextIndex = hls.nextLevel;
          console.log("[updateLevels] currentLevel:", currentIndex, "nextLevel:", nextIndex);
          
          const currentLabel =
            currentIndex === -1
              ? `Auto (${getQualityLabel(hls.levels[nextIndex] || hls.levels[0])})`
              : getQualityLabel(hls.levels[currentIndex]);
          
          console.log("[updateLevels] Setting activeQualityLabel to:", currentLabel);
          setActiveQualityLabel(currentLabel);
        };

        // const handleManifestParsed = () => {
        //   console.log("[MANIFEST_PARSED] Event fired");
        //   console.log("[MANIFEST_PARSED] hls.levels available:", hls.levels ? hls.levels.length : 0);
        //   updateLevels();
        // };
        const handleManifestParsed = () => {
  console.log("========== MANIFEST ==========");
  console.log("URL:", url);
  console.log("Levels:", hls.levels);
  console.log("Levels Count:", hls.levels.length);

  hls.levels.forEach((level, index) => {
    console.log(
      `Level ${index}:`,
      level.height,
      level.width,
      level.bitrate
    );
  });

  updateLevels();
};

        const handleLevelSwitched = (_event, data) => {
          console.log("[LEVEL_SWITCHED] Event fired, level:", data.level);
          const levelIndex = data.level;
          const label = hls.currentLevel === -1
            ? `Auto (${getQualityLabel(hls.levels[levelIndex])})`
            : getQualityLabel(hls.levels[levelIndex]);
          console.log("[LEVEL_SWITCHED] Updated label:", label);
          setActiveQualityLabel(label);
        };

        hls.on(Hls.Events.MANIFEST_PARSED, handleManifestParsed);
        hls.on(Hls.Events.LEVEL_SWITCHED, handleLevelSwitched);

        console.log("[Html5Player] Loading source:", url);
        hls.loadSource(url);
        hls.attachMedia(video);
        hlsRef.current = hls;

        // Immediate check for pre-loaded levels
        if (hls.levels && hls.levels.length > 0) {
          console.log("[Html5Player] Levels already available synchronously:", hls.levels.length);
          updateLevels();
        } else {
          console.log("[Html5Player] Waiting for MANIFEST_PARSED event...");
        }

        // Fallback: check if levels load within 2 seconds
        levelCheckTimeoutRef.current = setTimeout(() => {
          console.log("[Html5Player] Fallback timeout fired");
          if (hls.levels && hls.levels.length > 0) {
            console.log("[Html5Player] Fallback: Levels now available:", hls.levels.length);
            updateLevels();
          } else {
            console.warn("[Html5Player] Fallback: Still no levels available after 2 seconds");
          }
        }, 2000);
      } else {
        // console.warn("[Html5Player] hls.js not supported, video won't play");
        console.log("[Html5Player] Native HLS fallback");

  video.src = url;
  video.load();
      }
    } else {
      console.log("[Html5Player] Loading MP4 source directly");
      video.src = url;
      video.load();
    }

    return () => {
      console.log("[Html5Player] Cleanup on URL change");
      if (levelCheckTimeoutRef.current) {
        clearTimeout(levelCheckTimeoutRef.current);
      }
      if (hlsRef.current) {
        hlsRef.current.destroy();
        hlsRef.current = null;
      }
    };
  }, [url]);
  useEffect(() => {
  const handleKeyDown = async (e) => {
    const video = videoRef.current;

    if (!video) return;

    switch (e.key.toLowerCase()) {
      case " ":
        e.preventDefault();

        if (video.paused) {
          await video.play();
        } else {
          video.pause();
        }
        break;

      case "arrowleft":
        video.currentTime -= 10;
        break;

      case "arrowright":
        video.currentTime += 10;
        break;

      case "m":
        video.muted = !video.muted;
        setMuted(video.muted);
        break;

case "f":
  if (!document.fullscreenElement) {
    await containerRef.current?.requestFullscreen();
  } else {
    await document.exitFullscreen();
  }
  break;

      default:
        break;
    }
  };

  window.addEventListener(
    "keydown",
    handleKeyDown
  );

  return () =>
    window.removeEventListener(
      "keydown",
      handleKeyDown
    );
}, []);

useEffect(() => {
  return () => {
    if (hideControlsTimeout.current) {
      clearTimeout(hideControlsTimeout.current);
    }
  };
}, []);

  const handleQualityChange = (event) => {
    const video = videoRef.current;
    const hls = hlsRef.current;
    
    console.log("[handleQualityChange] Quality selector changed");
    console.log("[handleQualityChange] hls available:", !!hls);
    console.log("[handleQualityChange] video available:", !!video);
    
    if (!hls || !video) {
      console.error("[handleQualityChange] Missing hls or video reference");
      return;
    }

    const selected = event.target.value;
    console.log("[handleQualityChange] Selected quality:", selected);
    console.log("[handleQualityChange] Current playback time:", video.currentTime);
    
    setSelectedQuality(selected);

    const currentTime = video.currentTime;
    const targetLevel = selected === "auto" ? -1 : Number(selected);
    console.log("[handleQualityChange] Setting hls.currentLevel to:", targetLevel);
    hls.currentLevel = targetLevel;
    video.currentTime = currentTime;
    
    console.log("[handleQualityChange] hls.currentLevel is now:", hls.currentLevel);

    if (selected === "auto") {
      const nextLevelIndex = hls.nextLevel >= 0 ? hls.nextLevel : 0;
      const labelText = `Auto (${getQualityLabel(hls.levels[nextLevelIndex] || hls.levels[0])})`;
      console.log("[handleQualityChange] Auto mode label:", labelText);
      setActiveQualityLabel(labelText);
    } else {
      const levelLabel = getQualityLabel(hls.levels[Number(selected)]);
      console.log("[handleQualityChange] Manual mode label:", levelLabel);
      setActiveQualityLabel(levelLabel);
    }
  };

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const seek = (seconds) => {
    const video = videoRef.current;

    if (!video) return;

    video.currentTime += seconds;
  };
  const formatTime = (seconds) => {
  if (!seconds || isNaN(seconds)) {
    return "0:00";
  }

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);

  return `${mins}:${secs
    .toString()
    .padStart(2, "0")}`;
};

const togglePiP = async () => {
  const video = videoRef.current;

  if (!video) return;

  try {
    if (!document.pictureInPictureEnabled) {
      return;
    }

    if (document.pictureInPictureElement) {
      await document.exitPictureInPicture();
    } else {
      await video.requestPictureInPicture();
    }
  } catch (err) {
    console.error(err);
  }
};
const handleMouseMove = () => {
  setShowControls(true);

  if (hideControlsTimeout.current) {
    clearTimeout(hideControlsTimeout.current);
  }

  hideControlsTimeout.current = setTimeout(() => {
    if (playing) {
      setShowControls(false);
    }
  }, 3000);
};

  return (
<div
  ref={containerRef}
  onMouseMove={handleMouseMove}
  className={`relative rounded-2xl overflow-hidden bg-black ${
    showControls
      ? "cursor-default"
      : "cursor-none"
  }`}
>
      <video
        ref={videoRef}
        className="w-full aspect-video"
        preload="metadata"
        playsInline
onLoadedMetadata={(e) => {
  const d = e.target.duration;

  if (!isNaN(d)) {
    setDuration(d);
  }
}}
        onTimeUpdate={(e) =>
          setProgress(e.target.currentTime)
        }
        onPlay={() => setPlaying(true)}
        onPause={() => {
  setPlaying(false);
  setShowControls(true);
}}
      />

      <div
  className={`absolute bottom-0 left-0 right-0 bg-black/80 p-4 transition-all duration-300 ${
    showControls
      ? "opacity-100"
      : "opacity-0 pointer-events-none"
  }`}
>

        {/* Debug Info */}
        {process.env.NODE_ENV === "development" && (
          <div className="text-xs text-yellow-400 mb-2 bg-black/50 p-2 rounded">
            <div>HLS: {isHlsSource ? "Yes" : "No"} | Qualities: {qualityLevels.length} | Selected: {selectedQuality} | Active: {activeQualityLabel}</div>
          </div>
        )}

        <input
          type="range"
          min={0}
          max={duration || 0}
          value={progress}
          onChange={(e) => {
            const value = Number(e.target.value);

            setProgress(value);

            if (videoRef.current) {
              videoRef.current.currentTime = value;
            }
          }}
          className="w-full mb-3"
        />

        <div className="flex items-center gap-3 text-white">

          <button onClick={togglePlay}>
            {playing ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
          </button>

          <button onClick={() => seek(-10)}>
            <RotateCcw size={20} />
          </button>

          <button onClick={() => seek(10)}>
            <RotateCw size={20} />
          </button>

          <button
            onClick={() => {
              const next = !muted;

              setMuted(next);

              if (videoRef.current) {
                videoRef.current.muted = next;
              }
            }}
          >
            {muted ? (
              <VolumeX size={20} />
            ) : (
              <Volume2 size={20} />
            )}
          </button>

          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={volume}
            onChange={(e) => {
              const v = Number(e.target.value);

              setVolume(v);

              if (videoRef.current) {
                videoRef.current.volume = v;
              }
            }}
          />
          <div className="text-sm text-white min-w-25 text-center">
            {formatTime(progress)} / {formatTime(duration)}
          </div>

          <select
            value={playbackRate}
            onChange={(e) => {
              const rate = Number(e.target.value);
              setPlaybackRate(rate);
              if (videoRef.current) {
                videoRef.current.playbackRate = rate;
              }
            }}
            className="bg-slate-900 px-2 py-1 rounded"
          >
            <option value={0.5}>0.5x</option>
            <option value={1}>1x</option>
            <option value={1.5}>1.5x</option>
            <option value={2}>2x</option>
          </select>

          {isHlsSource && qualityLevels.length > 0 && (
            <>
              {console.log("[RENDER] Quality selector visible. isHlsSource:", isHlsSource, "qualityLevels.length:", qualityLevels.length)}
              <div className="flex items-center gap-2 bg-slate-900 rounded px-2 py-1">
                <label htmlFor="quality-select" className="text-xs text-slate-300">
                  Quality
                </label>
                <select
                  id="quality-select"
                  value={selectedQuality}
                  onChange={handleQualityChange}
                  className="bg-slate-900 px-2 py-1 rounded text-sm text-white"
                >
                  <option value="auto">Auto</option>
                  {qualityLevels.map((level) => (
                    <option key={level.index} value={level.index}>
                      {level.label}
                    </option>
                  ))}
                </select>
                <span className="text-xs text-slate-300">{activeQualityLabel}</span>
              </div>
            </>
          )}
          {isHlsSource && qualityLevels.length === 0 && (
            <>
              {console.log("[RENDER] Quality selector HIDDEN. isHlsSource:", isHlsSource, "qualityLevels.length:", qualityLevels.length)}
            </>
          )}

          <button
            onClick={togglePiP}
          >
            <PictureInPicture size={20} />
          </button>

<button
  className="ml-auto"
  onClick={async () => {
    if (!document.fullscreenElement) {
      await containerRef.current?.requestFullscreen();
    } else {
      await document.exitFullscreen();
    }
  }}
>
  <Maximize size={20} />
</button>
        </div>
      </div>
    </div>
  );
}