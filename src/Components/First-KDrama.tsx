import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronDown } from "lucide-react";
import { Music } from "./Music";
import { useStore } from "../zustand-store";

interface FirstKDramaProps {
  firstKDramaIndex: number;
  title: string;
  amountOfMusic: number;
}
export function FirstKDrama({
  title,
  firstKDramaIndex,
  amountOfMusic,
}: FirstKDramaProps) {
  const { currentSongIndex, currentKDramasIndex, play, songs } = useStore(
    (store) => {
      return {
        songs: store.KDramaSong?.kDramas[firstKDramaIndex].songs,
        currentSongIndex: store.currentSongIndex,
        currentKDramasIndex: store.currentKDramasIndex,
        play: store.play,
      };
    }
  );

  return (
    <Collapsible.Root className="group" defaultOpen={firstKDramaIndex === 0}>
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {/* 1 */}
          {firstKDramaIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          {/* Business Proposal */}
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfMusic} músicas</span>
        </div>
        {/* first button icon*/}
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          {songs &&
            songs.map((song, songIndex) => {
              const isCurrent =
                currentKDramasIndex === firstKDramaIndex &&
                currentSongIndex === songIndex;
              return (
                <Music
                  key={song.id}
                  title={song.title}
                  duration={song.duration}
                  onPlay={() => play([firstKDramaIndex, songIndex])}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
