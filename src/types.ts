export interface Playlist {
  images: Image[];
  name: string;
  owner: UserReference;
  tracks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
    href: string;
    total: number;
  };
  id: string;
}

export interface Image {
  height: number | null;
  url: string;
  width: number | null;
}

export interface UserReference {
  display_name?: string;
}

export interface TrackItem {
  items: Track | null;
}

export interface Track {
  album: SimplifiedAlbum;
  artists: SimplifiedArtist[];
  name: string;
}

export interface SimplifiedAlbum {
  images: Image[];
  name: string;
}

export interface SimplifiedArtist {
  name: string;
}
