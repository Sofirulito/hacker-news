const NewsCard = (props) => {
  if(!props.story_url) return null;
  return (
    <div className="news-card">
      <a href={props.story_url} target="_blank" rel="noreferrer">
        <p>{props.created_at} by {props.author}</p>
        <p>{props.story_title}</p>
      </a>
      <p>fav</p>
    </div>
  )
}

export default NewsCard;