import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import NewsCardFav from "../components/NewsCard/NewsCardFav";

const FaveNews = () => {
  const {favlist} = useContext(GlobalContext);

  return (
    <div className="container">
      <div className="news__container">
        {favlist.length === 0 ? <p>Add favorites news!</p> : favlist.map((fav) => (
          <NewsCardFav key={fav.objectID} fav={fav} />
        ))}
      </div>
    </div>
  )
}

export default FaveNews;