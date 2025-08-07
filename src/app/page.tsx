import { ChevronLeft, ChevronRight } from "lucide-react";
import { Sidebar } from "./componentes/Sidebar";
import { Footer } from "./componentes/Footer";
import { SuggestedAlbums } from "./componentes/SuggestedAlbums/SuggestedAlbums";
import { MyPlaylists } from "./componentes/MyPlaylists/MyPlaylists";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto custom-scrollbar">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/60 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/60 p-1">
              <ChevronRight />
            </button>
          </div>
          <SuggestedAlbums />
          <MyPlaylists />
        </main>
      </div>
      <Footer />
    </div>
  );
}
