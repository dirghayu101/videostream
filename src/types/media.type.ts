export interface Media {
  id: number;
  title: string;
  image: string;
  largePoster?: string;
  synopsis?: string;
  rentPrice?: number;
  purchasePrice?: number;
  year?: number;
  genre?: string;
  description?: string;
}

export type MediaConfig = {
  type: string;
  title: string;
  endpoint: string;
}

export type MediaDetailConfig = {
  endpoint: string;
};

export type MediaDetailParams = {
  type: "movies" | "tvshows";
  id: string;
};