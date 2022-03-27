import './newsCard.css'
import IconCLock from '../../assets/icons/icon-time-2.png'
import IconHeart from '../../assets/icons/iconmonstr-favorite-2.svg'
import { useState } from 'react';

const NewsCard = (props) => {
  const [isFavorite, setIsFavorite] = useState('');

  if(!props.story_url) return null;
  return (
    <div className="card">
      <div className="card__link">
        <a href={props.story_url} target="_blank" rel="noreferrer" className='card__url'>
          <p className='card__time'> <img src={IconCLock} alt="icon-clock" />{props.created_at} by {props.author}</p>
          <p className='card__title'>{props.story_title}</p>
        </a>
      </div>
      <div className="card__fav">
        {!isFavorite && (
          <img src={IconHeart} alt="" />
        )}
      </div>
    </div>
  )
}

export default NewsCard;