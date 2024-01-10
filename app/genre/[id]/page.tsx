
import MoviesCarousel from '@/components/MoviesCarousel'
import { getDiscoverMovies } from '@/lib/getmovies'
import React from 'react'
type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}

async function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
    const movies = await getDiscoverMovies(id)


    return (
        <>

            <div className='max-w-7xl mx-auto' >
                {/*// todo openAI Azure servie suggestion */}

                <div className='flex flex-col space-y-4 mt-32 xl:mt-42 ' >
                    <h2 className='text-6xl font-bold px-10' >Explore {genre}</h2>
                    <MoviesCarousel title='Genre' movies={movies} isVertical />

                </div>
            </div>

        </>
    )
}

export default GenrePage