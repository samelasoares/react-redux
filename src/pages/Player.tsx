import { MessageSquare } from "lucide-react";
import { Header } from "../Components/Header";
import { Video } from "../Components/Video";
import { FirstKDrama } from "../Components/First-KDrama";
import { useEffect } from "react";
import { useCurrentSong, useStore } from "../zustand-store";

export function Player() {
  const { KDramaSong, load } = useStore((store) => {
    return {
      KDramaSong: store.KDramaSong,
      load: store.load,
    };
  });
  const { currentSong } = useCurrentSong();

  useEffect(() => {
    setTimeout(() => {
      load();
    }, 500);
  }, []);

  useEffect(() => {
    if (currentSong) {
      document.title = `Assistindo: ${currentSong.title}`;
    }
  }, [currentSong]);

  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        <div className="flex items-center justify-between">
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-900">
            <MessageSquare className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            {KDramaSong?.kDramas &&
              KDramaSong?.kDramas.map((dorama, index) => {
                return (
                  <FirstKDrama
                    key={dorama.id}
                    firstKDramaIndex={index}
                    title={dorama.title}
                    amountOfMusic={dorama.songs.length}
                  />
                );
              })}
          </aside>
        </main>
      </div>
    </div>
  );
}
