import { beforeEach, describe, expect, it } from "vitest";
import { useStore } from "."; 

const KDramaSong = {
  id: 1,
  kDramas: [
    {
      id: 1,
      title: "Business Proporsal",
      songs: [
        { id: "WDcPhknPWdU", title: "Love, Maybe", duration: "03:04" },
        { id: "slTMtSliUDM", title: "You Are Mine", duration: "03:29" },
      ],
    },
    {
      id: 2,
      title: "True beauty",
      songs: [
        { id: "oogZh1gZ7bU", title: "Im Missing You", duration: "03:02" },
        { id: "-PQGsN_Xx9o", title: "Love So Fine", duration: "03:11" },
      ],
    },
  ],
};

const initialState = useStore.getState();

describe("zustand store", () => {
  beforeEach(() => {
    useStore.setState(initialState);
  });

  it("should be able to play", () => {
    const { play } = useStore.getState();
    play([1, 2]);

    const { currentKDramasIndex, currentSongIndex } = useStore.getState();

    expect(currentKDramasIndex).toEqual(1);
    expect(currentSongIndex).toEqual(2);
  });

  it("should be able to play next video automatically ", () => {
    useStore.setState({ KDramaSong });

    const { next } = useStore.getState();
    next();
    const { currentKDramasIndex, currentSongIndex } = useStore.getState();

    expect(currentKDramasIndex).toEqual(0);
    expect(currentSongIndex).toEqual(1);
  });

  it("should be able to jump to the next kdrama automatically ", () => {
    useStore.setState({ KDramaSong });

    const { next } = useStore.getState();
    useStore.setState({ currentSongIndex: 1 });

    next();

    const { currentKDramasIndex, currentSongIndex } = useStore.getState();

    expect(currentKDramasIndex).toEqual(1);
    expect(currentSongIndex).toEqual(0);
  });

  it("should not update the current kdrama and songs index if there is no next songs available", () => {
    useStore.setState({ KDramaSong });

    const { next } = useStore.getState();
    useStore.setState({
      currentSongIndex: 1,
      currentKDramasIndex: 1,
    });

    next();

    const { currentKDramasIndex, currentSongIndex } = useStore.getState();

    expect(currentKDramasIndex).toEqual(1);
    expect(currentSongIndex).toEqual(1);
  });
});
