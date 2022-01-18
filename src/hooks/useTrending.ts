import { useEffect, useState } from "react";
import { trendingMovies } from "../services/movie-api";

export type ResultType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const useTrending = () => {
  const [resultsTrending, setResultsTrending] = useState<ResultType[]>([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const isTrendingMovies = localStorage.getItem('trendingMovies') !== null ? true : false; 
      
      if(isTrendingMovies){
        const getStorage = localStorage.getItem('trendingMovies')
        const trendingMovies = JSON.parse(getStorage as string);

        setResultsTrending(trendingMovies);
      }
      else {
        const response = await trendingMovies();
        setResultsTrending(response.status === 200 ? response.data.results : []);
        window.localStorage.setItem('trendingMovies', JSON.stringify(response.data.results));
      }
    }

    fetchTrendingMovies();
  }, []);

  return { resultsTrending };
}

