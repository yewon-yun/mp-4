export interface Artwork {
    id: number;
    title: string;
    dated: string;
    primaryimageurl: string | null;
    culture: string | null;
    medium: string | null;
    description: string | null;
}