import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { Link } from "react-router-dom"


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog } = useFetch('http://localhost:8000/blogs/' + id);


    return (
        <div className="recipe-details">
            <div className="single-recipe">
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <p>Written by { blog.author }</p>
                    <div> { blog.blogDescription} </div>
                </article>
            )}
            </div>
            <div className="search-more-div">
                <Link to="/"><button className="search-more">Search more recipes</button></Link> 
            </div>
        </div>
      );
}
 
export default BlogDetails;