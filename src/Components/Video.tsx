import ReactPlayer from "react-player";
import { useAppSelector } from "../Store";

//video principal da tela
export function Video() {
  const songs = useAppSelector((state) => {
    //vou retornar os dados do KDramaSong atual
    const { currentKDramasIndex, currentSongIndex } = state.player;

    const currentSong =
      state.player.KDramaSong.kDramas[currentKDramasIndex].songs[
        currentSongIndex
      ];

    return currentSong;
  });

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        url={`https://www.youtube.com/watch?v=${songs.id}`}
      />
    </div>
  );
}
