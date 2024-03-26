import * as Collapsible from "@radix-ui/react-collapsible";

import { ChevronDown } from "lucide-react";
import { Music } from "./Music";

interface FirstButtonProps {
  firstButtonIndex: number;
  title: string;
  amountOfMusic: number;
}

export function FirstButton({
  title,
  firstButtonIndex,
  amountOfMusic,
}: FirstButtonProps) {
  return (
    <Collapsible.Root className="group">
      {/* Botão principal, primeiro botão e o numero de musicas */}
      <Collapsible.Trigger className="flex w-full items-center gap-3 bg-zinc-800 p-4">
        <div className="flex h-10 w-10 rounded-full items-center justify-center bg-zinc-950 text-xs">
          {/* 1 */}
          {firstButtonIndex + 1}
        </div>
        <div className="flex flex-col gap-1 text-left">
          {/* Business Proposal */}
          <strong className="text-sm">{title}</strong>
          <span className="text-xs text-zinc-400">{amountOfMusic} músicas</span>
        </div>
        {/* icone do primeiro botão */}
        <ChevronDown className="w-5 h-5 ml-auto text-zinc-400 group-data-[state=open]:rotate-180 transition-transform" />
        {/* Segundo botão que foi copiado e colado para os outros botões e criado a tag Nav onde vai ficar os links */}
      </Collapsible.Trigger>

      <Collapsible.Content>
        <nav className="relative flex flex-col gap-4 p-6">
          <Music title="Love Maybe" duration="03:05" />
          <Music title="Love Maybe" duration="03:05" />
          <Music title="Love Maybe" duration="03:05" />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
