export interface OtherCardPropsType {
  image: string;
  name: string;
  location: string;
  point: string;
  count: number;
}

export interface ReviewPropsTypes {
  name: string;
  isGoogle: boolean;
  point: string;
  visitedAt: string;
  content: string;
  images: string[] | undefined;
}
