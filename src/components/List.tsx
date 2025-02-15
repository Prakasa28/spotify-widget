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
  const [playlists, setPlaylists] = useState<Playlist[]>([]);
  const [currentPlaylistIndex, setCurrentPlaylistIndex] = useState<
    null | number
  >(null);

  useEffect(() => {
    const loadPlaylists = async () => {
      try {
        const fetchedPlaylists = await Promise.all(
          PLAYLIST_IDS.map((id) => fetchSpotifyPlaylist(id))
        );
        setPlaylists(fetchedPlaylists);
      } catch (error) {
        console.error("Error fetching playlists:", error);
      }
    };

    loadPlaylists();
  }, []);

  const handleBackClick = () => {
    setCurrentPlaylistIndex(null);
  };

  // Render Playlist items or Track items based on current state
  const renderContent = () => {
    if (currentPlaylistIndex === null) {
      return playlists.map((playlist, index) => (
        <div key={playlist.id} onClick={() => setCurrentPlaylistIndex(index)}>
          <PlaylistItem playlist={playlist} />
        </div>
      ));
    } else {
      const currentPlaylist = playlists[currentPlaylistIndex];
      return currentPlaylist.tracks.items.map((track) => (
        <TrackItem key={track.track.id} track={track.track} />
      ));
    }
  };

  return (
    <div className="playlist">
      <h1 className="playlist__title">
        {currentPlaylistIndex !== null
          ? playlists[currentPlaylistIndex].name
          : "My Playlists"}
      </h1>
      <div className="playlist__container">
        <img src="/spotify.png" alt="Spotify" className="playlist__logo" />

        {/* Show back button only when a specific playlist is selected */}
        {currentPlaylistIndex !== null && (
          <div className="playlist__back">
            <BackButton size={40} onClick={handleBackClick} />
          </div>
        )}

        <div className="playlist__tracks">{renderContent()}</div>
      </div>
    </div>
  );
}

export default List;
