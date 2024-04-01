import { createSlice } from "@reduxjs/toolkit";

const playerSlice = createSlice({
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
    play: (state, action) => {
      state.currentKDramasIndex = action.payload[0];
      state.currentSongIndex = action.payload[1];
    },
  },
});
//aqui eu vou importar player no index dentro do store/reducer
export const player = playerSlice.reducer;
export const { play } = playerSlice.actions;
