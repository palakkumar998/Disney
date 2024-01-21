import { Genres } from "@/typings";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react";
import Link from "next/link";


async function GenreDropdown() {
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en';

    const options: RequestInit = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${process.env.TMDB_API_KEY}`
        },
        next: {
            revalidate: 60 * 60 * 24,  // for chaching , 24 hours
        }
    };
    const response = await fetch(url.toString(), options)
    const data = (await response.json()) as Genres

    console.log(data.genres);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white justify-center items-center flex" >Genre
                <ChevronDown className="ml-1" />
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuLabel>Select any Genre</DropdownMenuLabel>
                <DropdownMenuSeparator />

                {/*//? <-------Map function with genre iterator to fetch all genres from the API------> */}
                {data.genres?.map((genre) => (
                    <DropdownMenuItem className="cursor-pointer" key={genre.id}>
                        <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                            {genre.name}
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    )
}

export default GenreDropdown