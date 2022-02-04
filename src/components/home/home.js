import React ,{useEffect} from 'react';
import MovieListing from '../movieListing/movieListing'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';



const Home=()=> {

    // Either we can fetch like this (Synchronously...)
    // const movieText = "Harry"
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     const fetchMovies = async()=>{
    //         // const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
    //         // .catch((err)=>{
    //         //     console.log(err)
    //         // })
    //         // // console.log("The response from api is" ,response)
    //         // dispatch(addMovies(response.data))
    //     };
    //     fetchMovies();
    // },[]); 

    // or

    const dispatch = useDispatch()
    const movieText = "Harry"
    const ShowText = "Friends"

    useEffect(()=>{
            dispatch(fetchAsyncMovies(movieText));
            dispatch(fetchAsyncShows(ShowText));
    },[])
  return (<>
      <div className="banner-img"></div>
          <MovieListing></MovieListing>
  </>
  );
}

export default Home;
