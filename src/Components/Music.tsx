import { PlayIcon } from "lucide-react";

interface MusicProps {
    title: string
    duration: string
}

export function Music({title, duration}:MusicProps) {
  return (
    <button className="flex items-center gap-3 text-sm text-zinc-400">
      <PlayIcon className="w-4 h-4 text-zinc-500" />
      {/* Love Maybe, 03:05 */}
      <span>{title}</span> 
      <span className="ml-auto font-mono text-xs text-zinc-500">{duration}</span>
    </button>
  );
}
