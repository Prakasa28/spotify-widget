export interface PlaylistBase {
    collaborative: boolean;
    description: string | null;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    owner: UserReference;
    public: boolean | null;
    snapshot_id: string;
    tracks: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [x: string]: any;
      href: string;
      total: number;
    };
    type: 'playlist';
    uri: string;
  }
  
  export interface Playlist extends PlaylistBase {
    followers: Followers;
  }
  
  export interface Track {
    album: SimplifiedAlbum;
    artists: SimplifiedArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIds;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    is_playable?: boolean; 
    linked_from?: LinkedFrom;
    name: string;
    popularity: number;
    preview_url: string | null;
    restrictions?: Restrictions;
    track_number: number;
    type: 'track';
    uri: string;
  }
  
  export interface TrackItem {
    added_at: string; 
    added_by: AddedBy;
    is_local: boolean;
    track: Track | null; 
  }
  
  export interface PlaylistedTrack<Item extends TrackItem = TrackItem> {
    added_at: string
    added_by: AddedBy
    is_local: boolean
    primary_color: string
    track: Item
}
  
  export interface Page<T> {
    href: string;
    items: T[];
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
  }
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type Item = any; 
  
  
  export interface ExternalUrls {
    spotify: string;
  }
  
  export interface Followers {
    href: string | null;
    total: number;
  }
  
  export interface Image {
    height: number | null;
    url: string;
    width: number | null;
  }
  
  export interface UserReference {
    display_name?: string;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: 'user';
    uri: string;
  }
  
  export interface SimplifiedTrack {
    artists: SimplifiedArtist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    is_playable?: boolean; 
    linked_from?: LinkedFrom;
    name: string;
    preview_url: string | null;
    restrictions?: Restrictions;
    track_number: number;
    type: 'track';
    uri: string;
  }
  
  export interface SimplifiedAlbum {
    album_group?: string;
    album_type: string;
    artists: SimplifiedArtist[];
    available_markets: string[];
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string; 
    release_date_precision: string; 
    restrictions?: Restrictions;
    total_tracks: number;
    type: 'album';
    uri: string;
  }
  
  export interface SimplifiedArtist {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    name: string;
    type: 'artist';
    uri: string;
  }
  
  export interface LinkedFrom {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: 'track';
    uri: string;
  }
  
  export interface Restrictions {
    reason: string; 
  }
  
  export interface ExternalIds {
    isrc?: string;
    ean?: string;
    upc?: string;
  }
  
  export interface Episode {
    audio_preview_url: string | null;
    description: string;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    is_playable: boolean;
    languages: string[];
    name: string;
    release_date: string;  
    release_date_precision: string; 
    show: SimplifiedShow; 
    type: 'episode';
    uri: string;
  }
  
  export interface Copyright {
    text: string;
    type: 'C' | 'P'; 
  }
  
  export interface AddedBy {
    external_urls: ExternalUrls;
    href: string;
    id: string;
    type: 'user' | 'unknown';
    uri: string;
  }
  
  
  export interface SimplifiedShow {
      available_markets: string[];
      copyrights: Copyright[];
      description: string;
      explicit: boolean;
      external_urls: ExternalUrls;
      href: string;
      id: string;
      images: Image[];
      is_externally_hosted: boolean;
      languages: string[];
      media_type: string; 
      name: string;
      publisher: string;
      type: 'show';
      uri: string;
  }
  
  
  
  export type TItemType = 'track' | 'album' | 'artist' | 'playlist' | 'episode' | 'show'; 