import { useAppSelector } from "../Store";

export function Header() {
  const {currentKDrama,currentSong } = useAppSelector((state) => {
    //vou retornar os dados do KDramaSong atual
    const { currentKDramasIndex, currentSongIndex } = state.player;

    const currentKDrama = state.player.KDramaSong.kDramas[currentKDramasIndex]
    const currentSong = currentKDrama.songs[currentSongIndex];

    return {currentSong, currentKDrama};
  });

  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-2xl font-bold">{currentKDrama.title}</h1>
      <span className="text-sm text-zinc-400">Music "{currentSong.title}"</span>
    </div>
  );
}
