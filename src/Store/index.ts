import { configureStore } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import { player } from "./Slices/player";

//Store é o estado global
export const store = configureStore({
  reducer: {
    player,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
