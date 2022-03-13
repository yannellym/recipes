import "../css/Search.css"
import useFetch from '../useFetch'
import { useState } from "react"
import { Link } from "react-router-dom";


const Search = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredResults, setFilteredResults] = useState([]);

    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
   


    const searchData = (value) => {
        setSearchTerm(value)
        if(searchTerm !== "") {
            const filteredData = blogs.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
           setFilteredResults(blogs) 
        }
    }
    
    return (
        <div className="search">
            <div className="search-div">
                <input 
                    placeholder="The Best Ever Lasagna ..." 
                    type="search" 
                    className="search-input"  
                    onChange={event => {searchData(event.target.value)}} 
                />
                <button type='submit' className="search-button"> Find recipe </button>
                { error && <div> { error } </div> }
            { isPending &&  <div> loading ... </div> }
        {searchTerm.length >1 && (
            filteredResults.map((item) => {
           return (
                <div className="blog-preview" key={item.id}>
                <Link to={`/blogs/${item.id}`}>
                <h1>{item.title}</h1>
                  <p> written by {item.author}</p>
                  </Link>
                </div>
           )
         })
     ) 
        }   
        </div>
    </div>
)}
 
export default Search;