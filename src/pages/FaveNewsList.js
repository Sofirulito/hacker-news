import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import NewsCardFav from "../components/NewsCard/NewsCardFav";

const FaveNews = () => {
  const {favlist} = useContext(GlobalContext);

  return (
    <>
      <li>Lista</li>
      {console.log(favlist)}
      {favlist.map((fav) => (
        <NewsCardFav key={fav.objectID} fav={fav} />
      ))}
    </>
  )
}

export default FaveNews;