import { useState, useEffect } from "react";
import { fetchSpotifyPlaylist, fetchAccessToken } from "../spotify";
import { Playlist } from "../types";
import PlaylistItem from "./PlaylistItem";
import TrackItem from "./TrackItem";
import "./List.scss";
import BackButton from "./BackButton";
import { useNavigate, useLocation } from "react-router-dom";

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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const loadPlaylists = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch the token only once
        const token = await fetchAccessToken();

        // Fetch all playlists at the same time using the token
        const fetchedPlaylists = await Promise.all(
          PLAYLIST_IDS.map((id) => fetchSpotifyPlaylist(id, token))
        );
        setPlaylists(fetchedPlaylists);
      } catch (err) {
        setError("Error fetching playlists.");
        console.error("Error fetching playlists:", err);
      } finally {
        setLoading(false);
      }
    };

    loadPlaylists();
  }, []);

  // Effect to reset the index when navigating back to the list view
  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPlaylistIndex(null);
    }
  }, [location]);

  const handlePlaylistClick = (index: number) => {
    setCurrentPlaylistIndex(index);
    navigate(`/playlist/${index}`);
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPlaylistIndex(null);
    }
  }, [location]);

  if (loading) {
    return <div>Loading playlists...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const handleBackClick = () => {
    setCurrentPlaylistIndex(null);
    navigate("/");
  };

  const renderContent = () => {
    if (currentPlaylistIndex === null) {
      return playlists.map((playlist, index) => (
        <div key={playlist.id} onClick={() => handlePlaylistClick(index)}>
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
