import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from "react-redux";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer café", "Estudar Redux", "Estudar Zustand"],
  // No reducers colocamos quais ações a interface pode fazer. Ou seja, quais ações o usuario pode desparar. Toda action do reducer, recebe sempre duas informações.
  reducers: {
    add: (state, action) => {
      //como criar uma ação
      state.push(action.payload.newTodo);
    },
  },
});
//Store é o estado global
export const store = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});

//Exportamos a função add para que o front-end(components) possa chamar ela.
export const { add } = todoSlice.actions;

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
