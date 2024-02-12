import React , {useEffect , useState} from 'react'
import BlogItem from './BlogItem';

export default function BlogsNews() {
     const [news, setNews] = useState([]);
    useEffect(() => {
        // Fetch news articles
        fetch('https://newsdata.io/api/1/news?apikey=pub_380455beb397a49429f6f0a2451bad133f787&q=blog')
            .then(res => res.json())
            .then(data => {
                // Update state with fetched news articles
                setNews(data.results);
            })
            .catch(error => console.error('Error fetching news articles:', error));
    }, []); // Empty dependency array to run effect only once after initial render

    console.log(news);
  return (
      <section className="category_section my-5">
          <div className="container">
              <div className="Categories_header text-center mb-3">
                  <h2>News</h2>
                  <p>Lorem Ipsum goes In farans To get Knowledge</p>
              </div>
              <div className="categories_wrapper row">
                  {news.slice(0, 8).map((newsItem, index) => (
                      <div className="col-md-3" key={index}>
                          <BlogItem title={newsItem.title}
                              image={newsItem.image_url} // Assuming you have an image URL in the newsItem object
                              description={newsItem.description} />
                      </div>))}
              </div>
          </div>
      </section>
  )
}
