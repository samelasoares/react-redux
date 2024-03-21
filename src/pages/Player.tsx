import { MessageSquare } from "lucide-react";

export function Player() {
  return (
    <div className="h-screen bg-zinc-950 text-zinc-50 flex justify-center items-center">
      <div className="flex w-[1100px] flex-col gap-6">
        {/*essa div principal, vai ficar o conteudo da aula, onde vai aparecer o titulo e o cabeçalho. E aqui vai começar a parte da aula atual*/}
        <div className="flex items-center justify-between">
          {/* header da minha aplicação */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-bold">Fundamentos do Redux</h1>
            <span className="text-sm text-zinc-400">
              Módulo "Desvendando o Redux"
            </span>
          </div>

          <button className="flex items-center gap-2 rounded bg-violet-600 px-3 py-2 text-sm font-medium text-white hover:bg-violet-900">
            <MessageSquare className="w-4 h-4" />
            Deixar feedback
          </button>
        </div>

        {/* No main, vai ficar o player do video e a sessão de modulos e aulas */}
        <main className="relative flex overflow-hidden rounded-lg border border-zinc-800 bg-zinc-900 shadow">
          <div className="flex-1">
            video
          </div>
          <aside className="w-80 border-l border-zinc-800 bg-zinc-900 h-[600px]">

          </aside>
        </main>
      </div>
    </div>
  );
}
