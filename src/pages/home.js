import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard";
import ReactPaginate from "react-paginate";

const baseUrl = 'https://hn.algolia.com/api/v1'

const Home = () => {
  const [selectValue, setSelectValue] = useState('');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setIsLoading(true);
    fetchGeneralNews()
  }, [currentPage, selectValue])


  const fetchGeneralNews = async () => {
    try {
      const { data } = await axios.get(`${baseUrl}/search_by_date?`,{
        params: {
          query: selectValue,
          page: currentPage
        }
      });
      const { hits, nbPages } = data;
      setArticles(hits);
      setTotalPages(nbPages)
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false)
    }
  }

  const handlePageChange = event => {
    setCurrentPage(event.selected)
  }

  const handleChange = (e) => {
    setCurrentPage(0)
    setSelectValue(e);
  }

  return (
    <div className="container">
      <form className="form">
        <select onChange={(e) => handleChange(e.target.value)}>
          <option value="default">Select your news</option>
          <option value="angular">Angular</option>
          <option value="react">Reactjs</option>
          <option value="vue">Vuejs</option>
        </select>
      </form>
      <div className="news-container">
        { 
          isLoading ? <p>Loading...</p> : articles.map((article) => (
            <NewsCard key={article.objectID} {...article}/>
          ))
        }
      </div>
      <ReactPaginate 
        nextLabel= ">"
        previousLabel="<"
        breakLabel="..."
        forcePage={currentPage}
        pageCount={totalPages}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="paginator"
        activeClassName="active-page"
        previousClassName="prev-page"
        nextClassName="next-page"
      />
      {selectValue}
    </div>
  )
}

export default Home;