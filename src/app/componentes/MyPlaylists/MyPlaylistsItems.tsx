import Image from "next/image"

interface MyPlaylistsItemsProps {
    title: string;
    subtitle: string;
    image: string;
}

export function MyPlaylistsItems({title, subtitle, image}: MyPlaylistsItemsProps) { 
    return (
        <a className="bg-white/2 p-4 rounded-lg hover:bg-white/10 transition-colors flex flex-col gap-1">
            <Image src={image} className="w-full rounded-md shadow-2xl" alt="Capa do Álbum" width={116} height={116} />
            <strong className="font-semibold mt-4 line-clamp-1">{title}</strong>
            <span className="text-xs text-zinc-500 line-clamp-2">{subtitle}</span>
        </a>
    )
}   