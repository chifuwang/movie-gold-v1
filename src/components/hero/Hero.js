import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import {Paper} from '@mui/material';
import Moment from 'moment'; 

const Hero = ({movies}) => {
  return (
    <div className = 'movie-carousel-container'>
      <Carousel>
        {
          movies?.map((movie) => {
            return (
              <Paper key={movie.title}>
                <div className='movie-card-container'>
                  <div className="movie-card">
                     <div className="movie-detail">
                      <div className="movie-title">
                          <h2>{movie.title}</h2>
                          <hr></hr>
                          <h4>Rank: {movie.rank}</h4>
                          <h4>Release Date: {Moment(movie.releaseDate).format('d MMM yyyy')}</h4>
                      </div>
                     </div>
                  </div>
                </div>
              </Paper>  
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero