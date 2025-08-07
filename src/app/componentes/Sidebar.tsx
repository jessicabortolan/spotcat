import { HouseIcon, LibraryIcon, SearchIcon } from "lucide-react";

export function Sidebar () {
    return (
    <aside className="w-72 bg-zinc-950 p-6">
        <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
        </div>

        <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <HouseIcon />
              Home
            </a>
            <a href="" className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <SearchIcon />
              Search
            </a>
            <a href="" className="flex items-center gap-4 text-xs font-semibold text-zinc-400">
              <LibraryIcon />
              Your Library
            </a>
        </nav>

        <div className="mt-8 pt-8 border-t border-zinc-800 flex flex-col gap-4">
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Meow Hits #01</a>
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Hot Cats</a>
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Meowditation Sessions</a>
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Catitude Deluxe</a>
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Dance Cats</a>
            <a href="" className="text-xs text-zinc-400 hover:text-cyan-600">Meow Hits #08</a>
        </div>
    </aside>   
    )
}