import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import './newsCard.css';
import IconCLock from '../../assets/icons/icon-time-2.png';
import IconHeart from '../../assets/icons/iconmonstr-favorite-2.svg';
import IconHeartFull from '../../assets/icons/iconmonstr-favorite-3.svg';

const NewsCard = ({article}) => {
  const { addArticleToFavList, favlist } = useContext(GlobalContext);
  
  // Check if article is in the favlist
  let storedArticle = favlist.find(o => o.objectID === article.objectID);
  const favlistDisabled = storedArticle ? true : false;

  if(!article.story_url) return null;

  return (
    <div className="card">
      <div className="card__link">
        <a href={article.story_url} target="_blank" rel="noreferrer" className='card__url'>
          <p className='card__time'> <img src={IconCLock} alt="icon-clock" />{article.created_at} by {article.author}</p>
          <p className='card__title'>{article.story_title}</p>
        </a>
      </div>
      <div className="card__fav">
        <button disabled={favlistDisabled} onClick={() => addArticleToFavList(article)}>
          {!favlistDisabled ? <img src={IconHeart} alt="icon-fav" /> : <img src={IconHeartFull} alt="icon-fav" />}
        </button>
      </div>
    </div>
  )
}

export default NewsCard;