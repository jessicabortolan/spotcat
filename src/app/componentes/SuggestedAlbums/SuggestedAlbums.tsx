import { SuggestedAlbumsItem } from "./SuggestedAlbumsItem";

export function SuggestedAlbums() {
    return (
        <div>
            <h1 className="font-semibold text-3xl mt-8">Good Afternoon</h1>
            <div className="grid grid-cols-3 gap-2 mt-4">
                <SuggestedAlbumsItem image="/17.png" title="Midnight Meow"/>
                <SuggestedAlbumsItem image="/2.png" title="Catitude Deluxe"/>
                <SuggestedAlbumsItem image="/3.png" title="Meowditation"/>
                <SuggestedAlbumsItem image="/4.png" title="Cafe Purrlatte"/>
                <SuggestedAlbumsItem image="/5.png" title="Milk and Lounge"/>
                <SuggestedAlbumsItem image="/15.png" title="Paw Beats"/>
            </div>
        </div>
    )
}