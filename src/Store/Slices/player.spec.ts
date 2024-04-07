import { describe, expect, it } from "vitest";
import { player as reducer, play, next } from "./player";

//aqui to testando a slice do play

const exampleState = {
  KDramaSong: {
    kDramas: [
      {
        id: "1",
        title: "Business Proporsal",
        songs: [
          { id: "WDcPhknPWdU", title: "Love, Maybe", duration: "03:04" },
          { id: "slTMtSliUDM", title: "You Are Mine", duration: "03:29" },
        ],
      },
      {
        id: "2",
        title: "True beauty",
        songs: [
          //peguei o mesmo id do componente "Video"
          { id: "oogZh1gZ7bU", title: "Im Missing You", duration: "03:02" },
          { id: "-PQGsN_Xx9o", title: "Love So Fine", duration: "03:11" },
        ],
      },
    ],
  },
  //musicas ativas
  currentKDramasIndex: 0,
  currentSongIndex: 0,
};

describe("player slice", () => {
  it("should be able to play", () => {
    const state = reducer(exampleState, play([1, 2])); //esse "play" é a action e quero tocar a musica 1 e 2

    expect(state.currentKDramasIndex).toEqual(1); //eu espero(expect) que meu estado(state) '.' dorama q eu quero reproduzir(currentK..), seja igual(toEqual) a 1
    expect(state.currentSongIndex).toEqual(2);
  });

  it("should be able to play next video automatically ", () => {
    const state = reducer(exampleState, next());

    expect(state.currentKDramasIndex).toEqual(0);
    expect(state.currentSongIndex).toEqual(1);
  });

  it("should be able to jump to the next kdrama automatically ", () => {
    const state = reducer(
      {
        //aqui quero que ele pule a primeira musica e vá para segunda
        ...exampleState,
        currentSongIndex: 1,
      },
      next()
    );

    expect(state.currentKDramasIndex).toEqual(1); //aqui ele tem que pular para o proximo dorama na primeira music
    expect(state.currentSongIndex).toEqual(0);
  });

  it("should not update the current kdrama and songs index if there is no next songs available", () => {
    const state = reducer(
      {
        ...exampleState,
        currentSongIndex: 1,
        currentKDramasIndex: 1
      },
      next()
    );

    expect(state.currentKDramasIndex).toEqual(1);
    expect(state.currentSongIndex).toEqual(1);
  });
});
