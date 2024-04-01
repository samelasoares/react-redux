import ReactPlayer from "react-player";
import { useDispatch } from "react-redux";
import { next, useCurrentSong } from "../Store/Slices/player";

//video principal da tela
export function Video() {
  const dispatch = useDispatch();
  //vou retornar os dados do KDramaSong atual
  const { currentSong } = useCurrentSong();

  function handlePlayNext() {
    dispatch(next());
  }

  return (
    <div className="w-full bg-zinc-950 aspect-video">
      <ReactPlayer
        width="100%"
        height="100%"
        controls
        playing //essa propriedade se eu deixar ela como "true", ela dar play automatico no video
        onEnded={handlePlayNext}
        url={`https://www.youtube.com/watch?v=${currentSong.id}`}
      />
    </div>
  );
}
