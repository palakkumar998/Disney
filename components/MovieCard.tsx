import getImagePath from "@/lib/getImagePath"
import { Movie } from "@/typings"
import Image from "next/image"


function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="relative flex-shrink-0 transform hover:scale-105 cursor-pointer transition duration-200 ease-out hover:drop-shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1A1C29]/80 z-10" />
            <p className="absolute z-20 bottom-5 left-5 font-thin" >{movie.title}</p>

            <Image
                className="w-fit lg:min-w-[400px] h-56 object-cover object-center shadow-xl shadow-gray-900 drop-shadow-xl rounded-md"
                src={getImagePath(movie.backdrop_path || movie.poster_path)}
                width={1920}
                height={1080}
                alt="movie poster"
                key={movie.id}
            />
        </div>
    )
}

export default MovieCard