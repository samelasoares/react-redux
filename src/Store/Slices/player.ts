import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { useAppSelector } from "..";

export const playerSlice = createSlice({
  name: "player",
  initialState: {
    //aqui eu vou ter as informações sobre as musicas e sobre os doramas
    //aqui vai ser como se fosse a resposta da api. E cada objeto vai ter um id,title,songs
    KDramaSong: {
      kDramas: [
        {
          id: "1",
          title: "Business Proporsal",
          songs: [
            { id: "WDcPhknPWdU", title: "Love, Maybe", duration: "03:04" },
            { id: "slTMtSliUDM", title: "You Are Mine", duration: "03:29" },
            { id: "A8Izgl25RKo", title: "Closer", duration: "03:59" },
          ],
        },
        {
          id: "2",
          title: "True beauty",
          songs: [
            //peguei o mesmo id do componente "Video"
            { id: "oogZh1gZ7bU", title: "Im Missing You", duration: "03:02" },
            { id: "-PQGsN_Xx9o", title: "Love So Fine", duration: "03:11" },
            { id: "9LjxxZSYw0I", title: "It Start Today", duration: "04:01" },
          ],
        },
        {
          id: "3",
          title: "Start-Up",
          songs: [
            { id: "GTcM3qCeup0", title: "Future", duration: "03:34" },
            { id: "tErAX213xcQ", title: "Where Is Dream", duration: "03:02" },
            { id: "2dEeiY_w3xE", title: "Day & Night", duration: "04:14" },
          ],
        },
      ],
    },
    //musicas ativas
    currentKDramasIndex: 0,
    currentSongIndex: 0,
  },
  //aqui são as minhas ações. State: estado atual / action: ações em si
  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentKDramasIndex = action.payload[0];
      state.currentSongIndex = action.payload[1];
    },
// verificação para conseguir passar as musicas depois que ela terminar e tambem trocar de modulo e passar a proxima musica, se tiver outra musica ou outro modulo
    next: (state) => {
      const nextSongIndex = state.currentSongIndex + 1  //to pegando o index da aula atual e + 1
      const nextSong = state.KDramaSong.kDramas[state.currentKDramasIndex].songs[nextSongIndex] //agora vou verificar se existe uma proxima musica. Vou pegar o dorama atual e vou verificar se tem uma proxima msc

      if(nextSong) { //se(if) nextSong existir, se existir uma proxima musica ele vai trocar a msc atual para a proximo musica  
        state.currentSongIndex = nextSongIndex // ele me retorna a proxima musica.
     } else { //aqui vou verificar se existe o proximo dorama
      const nextKDramaIndex = state.currentKDramasIndex + 1
      const nextKDrama = state.KDramaSong.kDramas[nextKDramaIndex]

      if(nextKDrama){   //se existir um proximo dorama, ele vai trocar do dorama atual para o proximo dorama  
        state.currentKDramasIndex = nextKDramaIndex
        state.currentSongIndex = 0  // aqui vai ficar 0 porque é a primeira musica
      }
     }
    },
  },
});
//aqui eu vou importar player no index dentro do store/reducer
export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

export const useCurrentSong = () => {
  return useAppSelector(state => {
    //vou retornar os dados do KDramaSong atual
    const { currentKDramasIndex, currentSongIndex } = state.player;

    const currentKDrama = state.player.KDramaSong.kDramas[currentKDramasIndex]
    const currentSong = currentKDrama.songs[currentSongIndex];

    return {currentSong, currentKDrama};
  });
}