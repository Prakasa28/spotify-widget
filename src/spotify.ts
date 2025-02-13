import { Playlist } from "./types";

const accessToken = import.meta.env.VITE_SPOTIFY_TOKEN;



async function fetchSpotifyPlaylist(playlistId: string, ): Promise<Playlist> {
 console.log(accessToken)
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic ' + accessToken
        },
       
         body: "grant_type=client_credentials"
 
    });

    if (!tokenResponse.ok) {
        throw new Error('Failed to fetch token');
    }

    const bearerToken = await tokenResponse.json();
    console.log("bearer_tokem" , bearerToken);
    
    const response = await fetch(`https://api.spotify.com/v1/playlists/${playlistId}`, {
        headers: {
            'Authorization': `Bearer ` + bearerToken.access_token
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch playlist');
    }

    return await response.json();
}

export { fetchSpotifyPlaylist };