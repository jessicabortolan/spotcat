import { MyPlaylistsItems } from "./MyPlaylistsItems";

export function MyPlaylists() {
    return (
        <div>
            <h2 className="font-semibold text-2xl mt-8">Made For Jessica Bortolan</h2>
            <div className="grid grid-cols-5 gap-2 mt-4">
                <MyPlaylistsItems image="/16.png" title="Meow Me Maybe" subtitle="Cat C., DJ Whiskers, Pawlina Mia and Reader Cat." />
                <MyPlaylistsItems image="/9.png" title="Milk Before Bed" subtitle="Chillpaw, Cat C., Pawlina Mia, Pawlina Mia and Luna y los Ronrons." />
                <MyPlaylistsItems image="/13.png" title="Snooze on the Windowsill" subtitle="Reader Cat, DJ Whiskers, Chillpaw and Reader Cat." />
                <MyPlaylistsItems image="/12.png" title="Purring in the Rain" subtitle="Pawlina Mia, Chillpaw, Cat C., Luna y los Ronrons and Cat C." />
                <MyPlaylistsItems image="/14.png" title="Whisker Waltz" subtitle="Luna y los Ronrons, DJ Whiskers, Pawlina Mia and Reader Cat." />
            </div>
        </div>
    )
}    