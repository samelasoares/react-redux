import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Music } from "./Music";
import { useAppDispatch, useAppSelector } from "../Store";
import { play } from "../Store/Slices/player";

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
  const dispatch = useAppDispatch();

  const { currentKDramasIndex, currentSongIndex } = useAppSelector((state) => {
    const { currentKDramasIndex, currentSongIndex } = state.player;

    return { currentKDramasIndex, currentSongIndex };
  });

  const songs = useAppSelector((state) => {
    return state.player.KDramaSong?.kDramas[firstKDramaIndex].songs;
  });

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
        {/* icone do primeiro botão */}
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
                  onPlay={() => dispatch(play([firstKDramaIndex, songIndex]))}
                  isCurrent={isCurrent}
                />
              );
            })}
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
