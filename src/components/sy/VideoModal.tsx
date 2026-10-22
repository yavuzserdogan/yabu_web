"use client";

import { useEffect, useEffectEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Icon } from "./Icon";
import { Portal } from "./Portal";
import { VideoPlaceholder } from "./VideoPlaceholder";

type Props = { onClose: () => void; variant?: "sphere" | "waves" };

/** Showreel player with sound (placeholder until the concept A montage exists). Mount it to open. */
export function VideoModal({ onClose, variant = "sphere" }: Props) {
  const t = useTranslations("Common.video");
  const [shown, setShown] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const closeRef = useRef<HTMLButtonElement>(null);

  const onEscape = useEffectEvent((e: KeyboardEvent) => { if (e.key === "Escape") onClose(); });

  useEffect(() => {
    const timer = setTimeout(() => { setShown(true); closeRef.current?.focus(); }, 20);
    window.addEventListener("keydown", onEscape);
    return () => { clearTimeout(timer); window.removeEventListener("keydown", onEscape); };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const i = setInterval(() => setProgress((v) => (v + 0.4) % 100), 100);
    return () => clearInterval(i);
  }, [playing]);

  return (
    <Portal>
      <div
        className={cn("sy-modal", shown && "is-open")}
        data-theme="inverse"
        role="dialog"
        aria-modal
        aria-label="Showreel"
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      >
        <div className="sy-modal__frame">
          <VideoPlaceholder variant={variant} playing={playing} note={t("note")} />
          <button ref={closeRef} className="sy-modal__close" onClick={onClose} aria-label={t("close")}>
            <Icon name="close" />
          </button>
          <div className="sy-modal__bar">
            <button onClick={() => setPlaying(!playing)} aria-label={playing ? t("pause") : t("play")}>
              <Icon name={playing ? "pause" : "play"} size={20} />
            </button>
            <span className="sy-num">0:{String(Math.floor(progress * 0.6)).padStart(2, "0")} / 1:00</span>
            <div className="sy-modal__track"><i style={{ width: `${progress}%` }} /></div>
            <button onClick={() => setMuted(!muted)} aria-label={muted ? t("unmute") : t("mute")}>
              <Icon name={muted ? "mute" : "sound"} size={20} />
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
}
