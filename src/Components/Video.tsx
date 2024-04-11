import ReactPlayer from "react-player";
import { next, useCurrentSong } from "../Store/Slices/player";
import { useAppDispatch, useAppSelector } from "../Store";
import { Loader } from "lucide-react";

export function Video() {
  const dispatch = useAppDispatch();
  const { currentSong } = useCurrentSong();
  //foi colocado o loading
  const isKDramaSongLoading = useAppSelector(state => state.player.isLoading);

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      {isKDramaSongLoading ? (
        <div className="flex h-full items-center justify-center">
          <Loader className="w-6 h-6 text-zinc-200 animate-spin"/>
        </div>
      ) : (
        <ReactPlayer
          width="100%"
          height="100%"
          controls
          playing
          onEnded={handlePlayNext}
          url={`https://www.youtube.com/watch?v=${currentSong?.id}`}
        />
      )}
    </div>
  );
}
