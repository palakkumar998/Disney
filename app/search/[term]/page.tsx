import AiSuggestion from '@/components/AiSuggestion';
import MoviesCarousel from '@/components/MoviesCarousel';
import { getPopularMovies, getSearchedMovies } from '@/lib/getmovies';
import { notFound } from 'next/navigation';

type Props = {
    params: {
        term: string;
    };
};

async function SearchPage({ params: { term } }: Props) {
    if (!term) notFound();

    const termToUse = decodeURI(term)

    const movies = await getSearchedMovies(termToUse)
    const popularMovies = await getPopularMovies()
    //todo APi call to get the populer movies


    return <div className='max-w-7xl mx-auto' >
        <div className='flex flex-col space-y-4 mt-32 xl:mt-42 ' >
            <h1 className='text-6xl font-bold px-10' >Results For {termToUse}</h1>

            <AiSuggestion term={termToUse} />
            
            <MoviesCarousel title='Movies' movies={movies} isVertical />
            <MoviesCarousel title='You may also Like !' movies={popularMovies} />
        </div>
    </div>
}

export default SearchPage