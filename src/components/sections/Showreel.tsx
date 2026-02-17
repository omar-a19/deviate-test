import { useEffect, useRef, useState, useCallback } from "react";
import Player from "@vimeo/player";

interface ShowreelPlayerProps {
  vimeoId?: string;          
  poster?: string;           
}

export default function ShowreelPlayer({
  vimeoId = "883255612",
  poster = "/bg1.png",
}: ShowreelPlayerProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const playerRef = useRef<Player | null>(null);
  const [activated, setActivated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [hover, setHover] = useState(false);
  const [duration, setDuration] = useState(64);
  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showInterface, setShowInterface] = useState(false);
  const hoverTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Format time mm:ss
  const fmtTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  // Initialise Vimeo player
  useEffect(() => {
    if (!iframeRef.current) return;
    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.ready().then(() => {
      setLoaded(true);
      player.getDuration().then((d) => setDuration(d));
      player.getCurrentTime().then((t) => {
        setCurrentTime(t);
        setProgress(t);
      });
      player.getPaused().then((paused) => setPlaying(!paused));
      player.getMuted().then(setMuted);
    });

    // Event listeners
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    const onTimeUpdate = (data: any) => {
      setCurrentTime(data.seconds);
      setProgress(data.seconds);
    };
    const onVolumeChange = () => player.getMuted().then(setMuted);
    const onLoaded = () => setLoaded(true);

    player.on("play", onPlay);
    player.on("pause", onPause);
    player.on("timeupdate", onTimeUpdate);
    player.on("volumechange", onVolumeChange);
    player.on("loaded", onLoaded);

    return () => {
      player.off("play", onPlay);
      player.off("pause", onPause);
      player.off("timeupdate", onTimeUpdate);
      player.off("volumechange", onVolumeChange);
      player.off("loaded", onLoaded);
    };
  }, []);

  // Play / pause
  const handlePlay = useCallback(async () => {
    if (!playerRef.current) return;
    if (!activated) {
      setActivated(true);
      playerRef.current.setMuted(false).catch(() => {});
    }
    if (playing) {
      await playerRef.current.pause();
    } else {
      await playerRef.current.play();
    }
  }, [activated, playing]);

  const handlePause = useCallback(async () => {
    if (!playerRef.current) return;
    await playerRef.current.pause();
  }, []);

  // Mute toggle
  const handleMute = useCallback(() => {
    if (!playerRef.current) return;
    playerRef.current.setMuted(!muted).catch(() => {});
  }, [muted]);

  // Timeline scrub
  const handleScrub = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (!playerRef.current) return;
    const t = parseFloat(e.target.value);
    playerRef.current.setCurrentTime(t);
  }, []);

  // Interface show/hide on hover
  useEffect(() => {
    if (!activated) {
      setShowInterface(false);
      return;
    }
    if (!playing || hover) {
      setShowInterface(true);
    } else {
      hoverTimerRef.current = setTimeout(() => setShowInterface(false), 2000);
    }
    return () => {
      if (hoverTimerRef.current) clearTimeout(hoverTimerRef.current);
    };
  }, [activated, playing, hover]);

  // Split chars function matching HTML structure
  const splitChars = (text: string) => {
    return text.split('').map((char, charIdx) => (
      <div key={charIdx} style={{ position: 'relative', display: 'inline-block' }} className="single-char">
        <div className="single-char-inner">
          {char}
        </div>
      </div>
    ));
  };

  const overlayText = "Showreel";

  return (
    <section
      className="section block-vimeo-player block-vimeo-player-home"
      data-theme-section="dark"
      data-scroll-section=""
    >
      <div className="container large">
        <div
          className="single-vimeo-player"
          data-vimeo-player-target=""
          data-vimeo-status-activated={String(activated)}
          data-vimeo-status-loaded={String(loaded)}
          data-vimeo-status-play={String(playing)}
          data-vimeo-status-muted={String(muted)}
          data-vimeo-status-hover={String(hover)}
          data-vimeo-status-show-interface={String(showInterface)}
          id="vimeo-player-index-0"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <div className="scroll-target" id="section-showreel"></div>

          {/* Vimeo iframe */}
          <iframe
            ref={iframeRef}
            src={`https://player.vimeo.com/video/${vimeoId}?api=1&background=1&autoplay=0&loop=0&muted=0`}
            width="640"
            height="360"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; encrypted-media"
            data-ready="true"
          />

          {/* Dark overlay */}
          <div className="overlay vimeo-overlay-dark"></div>

          {/* Interface bar (timeline, mute) */}
          <div className="overlay vimeo-overlay-interface">
            <div className="vimeo-duration">
              <span className="time duration">{fmtTime(currentTime)}</span>
            </div>
            <div className="vimeo-timeline">
              <input
                type="range"
                min="0"
                value={progress}
                step="0.01"
                max={duration}
                data-vimeo-control="timeline"
                onChange={handleScrub}
              />
              <progress  value={progress} max={duration}></progress>
            </div>
            <div className="vimeo-mute" data-vimeo-control="mute" onClick={handleMute}>
              {/* Unmuted icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 8.99998V15H7L12 20V3.99998L7 8.99998H3ZM16.5 12C16.5 10.23 15.48 8.70998 14 7.96998V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 3.22998V5.28998C16.89 6.14998 19 8.82998 19 12C19 15.17 16.89 17.85 14 18.71V20.77C18.01 19.86 21 16.28 21 12C21 7.71998 18.01 4.13998 14 3.22998V3.22998Z" fill="black" />
              </svg>
              {/* Muted icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 12C16.5 10.23 15.48 8.71 14 7.97V10.18L16.45 12.63C16.48 12.43 16.5 12.22 16.5 12V12ZM19 12C19 12.94 18.8 13.82 18.46 14.64L19.97 16.15C20.63 14.91 21 13.5 21 12C21 7.72 18.01 4.14 14 3.23V5.29C16.89 6.15 19 8.83 19 12ZM4.27 3L3 4.27L7.73 9H3V15H7L12 20V13.27L16.25 17.52C15.58 18.04 14.83 18.45 14 18.7V20.76C15.38 20.45 16.63 19.81 17.69 18.95L19.73 21L21 19.73L12 10.73L4.27 3ZM12 4L9.91 6.09L12 8.18V4Z" fill="black" />
              </svg>
            </div>
          </div>

          {/* Play overlay */}
          <div
            className="overlay vimeo-overlay-play"
            data-vimeo-control="play"
            data-anchor-target="#section-showreel"
            data-cursor-bubble-text="Play"
            data-cursor-bubble-color="secondary"
            onClick={handlePlay}
          >
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12V4L14 8L21 12L14 16L7 20V12Z" fill="black" />
              </svg>
            </div>
          </div>

          {/* Pause overlay */}
          <div 
            className="overlay vimeo-overlay-pause" 
            data-vimeo-control="pause" 
            onClick={handlePause}
          >
            <div className="icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 5V19" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
                <path d="M8 5V19" stroke="black" strokeWidth="3" strokeMiterlimit="10" />
              </svg>
            </div>
          </div>

          {/* Loading spinner */}
          <div className="overlay vimeo-overlay-loading">
            <svg version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 0 0" xmlSpace="preserve">
              <path fill="#000" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                <animateTransform 
                  attributeName="transform" 
                  attributeType="XML" 
                  type="rotate" 
                  dur="1s" 
                  from="0 50 50" 
                  to="360 50 50" 
                  repeatCount="indefinite" 
                />
              </path>
            </svg>
          </div>

          {/* Poster placeholder */}
          <picture className="overlay vimeo-overlay-placeholder">
            <source
              type="image/webp"
              data-srcset="/bg2.png"
              srcSet="/bg2.png"
            />
            <img
              alt=""
              className="lazy entered loaded"
              src={poster}
              data-src={poster}
              data-srcset={poster}
              width="1920"
              height="1440"
              data-ll-status="loaded"
              srcSet={poster}
            />
          </picture>

          {/* Overlay text */}
          <div className="overlay vimeo-overlay-text">
            <h2 className="split-chars">
              <div style={{ position: 'relative', display: 'inline-block' }} className="single-word">
                {splitChars(overlayText)}
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}