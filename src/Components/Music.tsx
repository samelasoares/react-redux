import { Pause, PlayIcon } from "lucide-react";

interface MusicProps {
  title: string;
  duration: string;
  isCurrent?: boolean;
  onPlay: () => void;
}

export function Music({
  title,
  duration,
  onPlay,
  isCurrent = false,
}: MusicProps) {
  return (
    <button
      onClick={onPlay}
      data-active={isCurrent}
      disabled={isCurrent}
      className="flex items-center gap-3 text-sm text-zinc-400 data-[active=true]:text-violet-900 enabled:hover:text-zinc-100"
    >
      {isCurrent ? (
        <Pause className="w-4 h-4 text-violet-900" />
      ) : (
        <PlayIcon className="w-4 h-4 text-zinc-500" />
      )}
      {/* Love Maybe, 03:05 */}
      <span>{title}</span>
      <span className="ml-auto font-mono text-xs text-zinc-500">
        {duration}
      </span>
    </button>
  );
}
