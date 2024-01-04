import { Movie } from "@/typings";
import { title } from "process";

type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;

}
function MoviesCarousel({ title, movies, isVertical }: Props) {
    return (
        <div className="z-50" >
            <h1>{title}</h1>
        </div>
    )
}

export default MoviesCarousel