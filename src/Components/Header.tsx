import { useAppSelector } from "../Store";
import { useCurrentSong } from "../Store/Slices/player";

export function Header() {
  const { currentKDrama, currentSong } = useCurrentSong();
  const isKDramaLoading = useAppSelector(state => state.player.isLoading)

  if(isKDramaLoading){
    return <h1 className="text-2xl font-bold">Loading...</h1>
  }

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentKDrama?.title}</h1>
      <span className="text-sm text-zinc-400">Music "{currentSong?.title}"</span>
    </div>
  );
}
