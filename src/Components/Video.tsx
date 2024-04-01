import ReactPlayer from "react-player";
import { useAppSelector } from "../Store";
import { useDispatch } from "react-redux";
import { next } from "../Store/Slices/player";

//video principal da tela
export function Video() {
  const dispatch = useDispatch()

  const songs = useAppSelector((state) => {
    //vou retornar os dados do KDramaSong atual
    const { currentKDramasIndex, currentSongIndex } = state.player;

    const currentSong =
      state.player.KDramaSong.kDramas[currentKDramasIndex].songs[
        currentSongIndex
      ];

    return currentSong;
  });

  function handlePlayNext() {
    dispatch(next("teste"))
  } 

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing   //essa propriedade se eu deixar ela como "true", ela dar play automatico no video
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${songs.id}`}
      />
    </div>
  );
}
