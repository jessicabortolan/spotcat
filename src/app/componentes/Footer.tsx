import { Laptop2Icon, LayoutListIcon, Maximize2Icon, Mic2Icon, PlayIcon, RepeatIcon, ShuffleIcon, SkipBackIcon, SkipForwardIcon, VolumeIcon } from "lucide-react";
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 p-5 flex items-center justify-between">
      
      <div className="flex items-center gap-4">
        <Image src="/10.png" className="rounded-lg shadow-2xl" alt="Capa do Álbum da banda Limonade" width={64} height={64} />
        <div className="flex flex-col gap-0.5">
          <strong className="font-semibold">Cat Humming</strong>
          <span className="text-xs text-zinc-500">Reader Cat</span>
        </div>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="flex items-center gap-8">
          <ShuffleIcon className="text-zinc-200" size={16} />
          <SkipBackIcon className="text-zinc-200" size={16} />
          <button className="p-2 rounded-full bg-zinc-200 text-zinc-800">
            <PlayIcon size={16} />
          </button>
          <SkipForwardIcon className="text-zinc-200" size={16} />
          <RepeatIcon className="text-zinc-200" size={16} />
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs text-zinc-400">0:30</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-40 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-xs text-zinc-400">2:00</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Mic2Icon size={16} />
        <LayoutListIcon size={16} />
        <Laptop2Icon size={16} />
        <div className="flex items-center gap-2">
          <VolumeIcon size={16} />
          <div className="h-1 w-24 rounded-full bg-zinc-600">
            <div className="h-1 w-16 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2Icon size={16} />
      </div>

    </footer>
  )
}
