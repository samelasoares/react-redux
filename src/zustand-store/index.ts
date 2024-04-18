import { create } from "zustand";
import { api } from "../lib/axios";

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
  isLoading: boolean;

  play: (kdramaAndSongIndex: [number, number]) => void;
  next: () => void;
  load: () => Promise<void>;
}

export const useStore = create<PlayerState>((set, get) => {
  return {
    KDramaSong: null,
    currentKDramasIndex: 0,
    currentSongIndex: 0,
    isLoading: true,

    load: async () => {
      set({ isLoading: true });

      const response = await api.get("/KDramaSong/1");

      set({
        KDramaSong: response.data,
        isLoading: false,
      });
    },

    play: (kdramaAndSongIndex: [number, number]) => {
      const [kdramaIndex, songIndex] = kdramaAndSongIndex;

      set({
        currentKDramasIndex: kdramaIndex,
        currentSongIndex: songIndex,
      });
    },

    next: () => {
      const { currentSongIndex, currentKDramasIndex, KDramaSong } = get();

      //tiramos todo o state aqui:
      const nextSongIndex = currentSongIndex + 1;
      const nextSong =
        KDramaSong?.kDramas[currentKDramasIndex].songs[nextSongIndex];

      //no lugar onde tava atualizando o state colocamos o set()
      if (nextSong) {
        // state.currentSongIndex = nextSongIndex; /agora vai ficar:
        set({ currentSongIndex: nextSongIndex }); //aqui eu quero atualizar o currentSon... pra nextSong...
      } else {
        const nextKDramaIndex = currentKDramasIndex + 1;
        const nextKDrama = KDramaSong?.kDramas[nextKDramaIndex];

        //aqui a mesma coisa quero atualizar o estado(state) então coloco set(), como aqui é duas atualizações posso fazer no mesmo set():
        if (nextKDrama) {
          set({
            currentKDramasIndex: nextKDramaIndex,
            currentSongIndex: 0,
          });
          // state.currentKDramasIndex = nextKDramaIndex;
          // state.currentSongIndex = 0;
        }
      }
    },
  };
});

export const useCurrentSong = () => {
  return useStore((state) => {
    const { currentKDramasIndex, currentSongIndex } = state;

    const currentKDrama = state.KDramaSong?.kDramas[currentKDramasIndex];
    const currentSong = currentKDrama?.songs[currentSongIndex];

    return { currentSong, currentKDrama };
  });
};
