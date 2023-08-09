

export type Pagination<T extends Artist | Track> = {
    href: string;
    limit: number;
    next: string | null;
    offset: number;
    previous: string | null;
    total: number;
    items: T[];
}

export type Artist = {
    external_urls: External_Urls;
    followers: Followers;
    genres: string[];
    href: string;
    id: string;
    images: Image[];
    name: string;
    popularity: number;
    type: 'artist';
    uri: string;
}

export type Track = {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    excplicit: boolean;
    external_ids: {
        isrc: string;
    }
    external_urls: External_Urls;
    href: string;
    id: string;
    is_playable: boolean;
    restrictions: {
        reason: 'market' | 'product' | 'explicit';
    }
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: 'track';
    uri: string;
    is_local: boolean;
}

export type SpotiyUser = {
    display_name: string;
    email: string;
    external_urls: External_Urls;
    followers: Followers;
    href: string;
    id: string;
    images: Image[];
    type: string;
    uri: string;
}

export type Album = {
    album_type: 'album' | 'single' | 'compilation';
    total_tracks: number;
    available_markets: string[];
    external_urls: External_Urls;
    href: string;
    id: string;
    images: Image[];
    name: string;
    release_date: string;
    release_date_precision: 'year' | 'month' | 'day';
    restrictions: {
        reason: 'market' | 'product' | 'explicit';
    }
    type: 'album';
    uri: string;
    external_ids: {
        upc: string;
    }
    genres: string[];
    label: string;
    popularity: number;
    album_group: 'album' | 'single' | 'compilation' | 'appears_on';
    artists: Pick<Artist, 'external_urls' | 'href' | 'id' | 'name' | 'type' | 'uri'>[];
}

type Image = {
    height: number | null;
    url: string;
    width: number | null;
}

type Followers = {
    href: string | null;
    total: number;
}

type External_Urls = {
    spotify: string;
}
