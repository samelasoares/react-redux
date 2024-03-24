import { ChevronDown, MessageSquare, PlayIcon } from "lucide-react";
import ReactPLayer from "react-player";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        {/*essa div principal, vai ficar o conteudo do dorama, onde vai aparecer o titulo e o cabeçalho. E aqui vai começar a parte do dorama atual*/}
        <div className="flex items-center justify-between">
          {/* header da minha aplicação */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Mundo dos Doramas</h1>
            <span className="text-sm text-zinc-400">
              Music "Love KDrama"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-900">
            <MessageSquare className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        {/* No main, vai ficar o player do video e a sessão dos doramas */}
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow pr-80">
          <div className="flex-1">
            <div className="w-full bg-zinc-950 aspect-video">
              <ReactPLayer
                width="100%"
                height="100%"
                controls
                url="https://www.youtube.com/watch?v=WDcPhknPWdU"
              />
            </div>
          </div>
          <aside className="w-80 absolute top-0 bottom-0 right-0 border-l divide-y-2 divide-zinc-900 border-zinc-800 bg-zinc-900 overflow-y-scroll scrollbar scrollbar-thin scrollbar-track-zinc-950 scrollbar-thumb-zinc-800">
            <div>
              {/* Botão principal, primeiro botão e o numero de musicas */}
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  1
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Business Proposal</strong>
                  <span className="text-xs text-zinc-400">3 músicas</span>
                </div>
                {/* icone do primeiro botão */}
                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
                {/* Segundo botão que foi copiado e colado para os outros botões e criado a tag Nav onde vai ficar os links */}
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Love maybe</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:05
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>You Are Mine</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:38
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Closer</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:58
                  </span>
                </button>
              </nav>
            </div>

            <div>
              {/* Botão segundo */}
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  2
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">True Beauty</strong>
                  <span className="text-xs text-zinc-400">3 músicas</span>
                </div>
                {/* icone do segundo botão */}
                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
                {/* Segundo botão que foi copiado e colado para os outros botões e criado a tag Nav onde vai ficar os links */}
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Im Missing You</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:02
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Love so Fine</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:10
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>It Starts Today</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    04:04
                  </span>
                </button>
              </nav>
            </div>

            <div>
              {/* Botão terceiro */}
              <button className="flex w-full items-center gap-3 bg-zinc-800 p-4">
                <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
                  3
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <strong className="text-sm">Start-Up</strong>
                  <span className="text-xs text-zinc-400">3 músicas</span>
                </div>
                {/* icone do terceiro botão */}
                <ChevronDown className="w-5 h-5 ml-auto text-zinc-400" />
                {/* Segundo botão que foi copiado e colado para os outros botões e criado a tag Nav onde vai ficar os links */}
              </button>
              <nav className="relative flex flex-col gap-4 p-6">
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Future</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:35
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Where Is Dream</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    03:03
                  </span>
                </button>
                <button className="flex items-center gap-3 text-sm text-zinc-400">
                  <PlayIcon className="w-4 h-4 text-zinc-500" />
                  <span>Day & Night</span>
                  <span className="ml-auto font-mono text-xs text-zinc-500">
                    04:20
                  </span>
                </button>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
