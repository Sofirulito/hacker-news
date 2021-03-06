import React, { useContext} from 'react';
import { GlobalContext } from '../../context/GlobalState';
import IconCLock from '../../assets/icons/icon-time-2.png';
import IconHeartFull from '../../assets/icons/iconmonstr-favorite-3.svg';

const NewsCardFav = ({fav}) => {
  const { removeArticleFromFavList } = useContext(GlobalContext)
  return (
    <div className="card">
    <div className="card__link">
      <a href={fav.story_url} target="_blank" rel="noreferrer" className='card__url'>
        <p className='card__time'> <img src={IconCLock} alt="icon-clock" />{fav.created_at} by {fav.author}</p>
        <p className='card__title'>{fav.story_title}</p>
      </a>
    </div>
    <div className="card__fav">
      <button onClick={() => removeArticleFromFavList(fav.objectID)}>
        <img src={IconHeartFull} alt="" />
      </button>
    </div>
  </div>
  )
}

export default NewsCardFav
