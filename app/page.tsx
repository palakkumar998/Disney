import MoviesCarousel from "@/components/ui/MoviesCarousel";
import { getPopulerMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getmovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies();
  const topRatedMovies = await getTopRatedMovies();
  const populerMovies = await getPopulerMovies();
  return (
    <main className="" >
      {/* CarouselBannerWrapper */}
      <div className="flex flex-col space-y-2 xl:-mt-48" >
        <MoviesCarousel movies={upcomingMovies} title='upcoming' />
        <MoviesCarousel movies={topRatedMovies} title='top rated' />
        <MoviesCarousel movies={populerMovies} title='Populer' />
      </div>

    </main>


  )
}
