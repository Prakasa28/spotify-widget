import { useState, useEffect } from "react";

import { fetchSpotifyPlaylist } from "../spotify";
import { Playlist } from "../types";
import PlaylistItem from "./PlaylistItem";
import TrackItem from "./TrackItem";

const PLAYLIST_IDS = [
  "2wGYnJyPo3Ke2utC3N6MYg",
  "3cEYpjA9oz9GiPac4AsH4n",
  "6iijj28OFFYVJEY1Ma9HWb",
];

function List() {
  const [listItems, setListItems] = useState<Playlist[]>([]);

  const [currentPlaylist, setCurrentPlaylist] = useState<null | number>(null);

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        const playlists = await Promise.all(
          PLAYLIST_IDS.map((id) => fetchSpotifyPlaylist(id))
        );
        setListItems(playlists);
        console.log(playlists);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <>
      <h1>
        {currentPlaylist ? listItems[currentPlaylist].name : "My Playlists"}
      </h1>
      <ul>
        {currentPlaylist === null
          ? listItems.map((playlist, index) => (
              <PlaylistItem
                key={playlist.id}
                playlist={playlist}
                handleClick={() => setCurrentPlaylist(index)}
              />
            ))
          : listItems[currentPlaylist].tracks.items.map((track) => (
              <TrackItem key={track.track.id} track={track.track} />
            ))}
      </ul>
    </>
  );
}

export default List;
