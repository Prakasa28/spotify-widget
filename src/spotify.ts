import { Playlist } from "./types";

let cachedAccessToken: string | null = null;

const accessToken = import.meta.env.VITE_SPOTIFY_TOKEN;

// Function to fetch the access token
async function fetchAccessToken(): Promise<string> {
  // If a token is already cached, return it
  if (cachedAccessToken) {
    console.log("Using cached token");
    return cachedAccessToken;
  }

  // Otherwise, request a new token
  console.log("Fetching new token");
  const tokenResponse = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Basic " + accessToken,
    },
    body: "grant_type=client_credentials",
  });

  if (!tokenResponse.ok) {
    throw new Error("Failed to fetch token");
  }

  const bearerToken = await tokenResponse.json();
  cachedAccessToken = bearerToken.access_token;
  return cachedAccessToken;
}

// Function to fetch a Spotify playlist
async function fetchSpotifyPlaylist(
  playlistId: string,
  accessToken: string
): Promise<Playlist> {
  const response = await fetch(
    `https://api.spotify.com/v1/playlists/${playlistId}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch playlist");
  }

  return await response.json();
}

export { fetchSpotifyPlaylist, fetchAccessToken };
