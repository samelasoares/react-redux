import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useAppSelector } from "..";
import { api } from "../../lib/axios";

interface KDramaSong {
  id: number;
  kDramas: {
    id: number;
    title: string;
    songs: {
      id: string;
      title: string;
      duration: string;
    }[];
  }[];
}

export interface PlayerState {
  KDramaSong: KDramaSong | null;
  currentKDramasIndex: number;
  currentSongIndex: number;
  isLoading: boolean
}
const initialState: PlayerState = {
  KDramaSong: null,
  currentKDramasIndex: 0,
  currentSongIndex: 0,
  isLoading: true,
};
export const loadSongs = createAsyncThunk("player/load", async () => {
  const response = await api.get("/KDramaSong/1");
  return response.data;
});

export const playerSlice = createSlice({
  name: "player",
  initialState,

  reducers: {
    play: (state, action: PayloadAction<[number, number]>) => {
      state.currentKDramasIndex = action.payload[0];
      state.currentSongIndex = action.payload[1];
    },

    next: (state) => {
      const nextSongIndex = state.currentSongIndex + 1;
      const nextSong =
        state.KDramaSong?.kDramas[state.currentKDramasIndex].songs[
          nextSongIndex
        ];

      if (nextSong) {
        state.currentSongIndex = nextSongIndex;
      } else {
        const nextKDramaIndex = state.currentKDramasIndex + 1;
        const nextKDrama = state.KDramaSong?.kDramas[nextKDramaIndex];

        if (nextKDrama) {
          state.currentKDramasIndex = nextKDramaIndex;
          state.currentSongIndex = 0;
        }
      }
    },
  },
  extraReducers(builder) {
    builder.addCase(loadSongs.pending, (state) => {
      state.isLoading = true
    });

    builder.addCase(loadSongs.fulfilled, (state, action) => {
      state.KDramaSong = action.payload;
      state.isLoading = false
    });
  },
});

export const player = playerSlice.reducer;
export const { play, next } = playerSlice.actions;

export const useCurrentSong = () => {
  return useAppSelector((state) => {
    const { currentKDramasIndex, currentSongIndex } = state.player;

    const currentKDrama = state.player.KDramaSong?.kDramas[currentKDramasIndex];
    const currentSong = currentKDrama?.songs[currentSongIndex];

    return { currentSong, currentKDrama };
  });
};
