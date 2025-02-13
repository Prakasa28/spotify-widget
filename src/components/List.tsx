import { useState, useEffect } from "react";
import { fetchSpotifyPlaylist } from "../spotify";
import { Playlist } from "../types";
import PlaylistItem from "./PlaylistItem";
import TrackItem from "./TrackItem";
import "./List.scss";
import BackButton from "./BackButton";

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
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    fetchPlaylists();
  }, []);

  return (
    <div className="playlist">
      <h1 className="playlist__title">
        {currentPlaylist !== null
          ? listItems[currentPlaylist].name
          : "My Playlists"}
      </h1>
      <div className="playlist__container">
        <img src="/spotify.png" alt="Spotify" className="playlist__logo" />

        {currentPlaylist !== null && (
          <div className="playlist__back">
            <BackButton size={40} onClick={() => setCurrentPlaylist(null)} />
          </div>
        )}

        {currentPlaylist === null ? (
          <div className="playlist__tracks">
            {listItems.map((playlist, index) => (
              <div key={playlist.id} onClick={() => setCurrentPlaylist(index)}>
                <PlaylistItem playlist={playlist} />
              </div>
            ))}
          </div>
        ) : (
          <div className="playlist__tracks">
            {listItems[currentPlaylist].tracks.items.map((track) => (
              <TrackItem key={track.track.id} track={track.track} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default List;
