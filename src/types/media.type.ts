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