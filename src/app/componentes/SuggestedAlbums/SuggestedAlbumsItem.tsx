import { ArrowUpRightIcon } from "lucide-react";
import Image from "next/image"

interface SuggestedAlbumsItemProps {
    title: string;
    image: string;
}

export function SuggestedAlbumsItem({ title, image }: SuggestedAlbumsItemProps) {
    return (
        <a className="bg-white/4 group rounded-lg flex items-center gap-6 overflow-hidden hover:bg-white/20 transition-colors">
            <Image src={image} alt="Capa do Álbum da banda Limonade" width={80} height={80} className="rounded-lg"/>
            <strong>{title}</strong>
            <Button />
        </a>
    )
}

function Button() {
    return (
        <button className="p-2 rounded-full bg-cyan-500 text-zinc-800 ml-auto mr-8 shadow-lg invisible group-hover:visible">
            <ArrowUpRightIcon size={16} />
        </button>
    )
}