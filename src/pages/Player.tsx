import { MessageSquare } from "lucide-react";
import { Header } from "../Components/Header";
import { Video } from "../Components/Video";
import { FirstButton } from "../Components/First-button";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        {/*essa div principal, vai ficar o conteudo do dorama, onde vai aparecer o titulo e o cabeçalho. E aqui vai começar a parte do dorama atual*/}
        <div className="flex items-center justify-between">
          {/* header da minha aplicação */}
          <Header />

          <button className="flex items-center gap-2 rounded bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-900">
            <MessageSquare className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        {/* No main, vai ficar o player do video e a sessão dos doramas */}
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <Video />
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <FirstButton
              firstButtonIndex={0}
              title="Busness Proporsal"
              amountOfMusic={3}
            />
            <FirstButton
              firstButtonIndex={1}
              title="Busness Proporsal"
              amountOfMusic={3}
            />
            <FirstButton
              firstButtonIndex={2}
              title="Busness Proporsal"
              amountOfMusic={3}
            />
          </aside>
        </main>
      </div>
    </div>
  );
}
