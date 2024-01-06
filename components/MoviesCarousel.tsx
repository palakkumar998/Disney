import { Movie } from "@/typings";
import MovieCard from "./MovieCard";


type Props = {
    title?: string;
    movies: Movie[];
    isVertical?: boolean;

}
function MoviesCarousel({ title, movies, isVertical }: Props) {
    return (
        <div className="z-50" >
            <h1>{title} </h1>
            {movies?.map((movie) => (
                <MovieCard key= {movie.id} movie = {movie}  />
            ))}
        </div>
    )
}

export default MoviesCarousel