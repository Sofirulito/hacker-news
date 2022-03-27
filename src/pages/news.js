import React, { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../components/NewsCard/NewsCard";
import ReactPaginate from "react-paginate";
import Select from "../components/Select/Select";

const baseUrl = 'https://hn.algolia.com/api/v1'

const News = () => {
  const [selectValue, setSelectValue] = useState('Select your news');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  // const [favorites, setFavorites] = useState([])

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

  // const handleChange = (e) => {
  //   setCurrentPage(0)
  //   setSelectValue(e);
  // }

  return (
    <div className="container">
      <Select selectValue={selectValue} setSelectValue={setSelectValue} setCurrentPage={setCurrentPage}/>
      <div className="news__container">
        { 
          isLoading ? <p>Loading...</p> : articles.map((article) => (
            <NewsCard key={article.objectID} {...article}/>
          ))
        }
      </div>
      <ReactPaginate 
        nextLabel= ">"
        previousLabel="<"
        breakLabel='...'
        pageCount={totalPages}
        pageRangeDisplayed={9}
        renderOnZeroPageCount={null}
        onPageChange={handlePageChange}
        className="paginator"
        activeClassName="active-page"
        previousClassName="prev-page"
        nextClassName="next-page"
      />
    </div>
  )
}

export default News;