import "../css/Create.css"
import { useState } from "react"
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [title, setTitle] = useState("")
    const [blogDescription, setBlogDescription] = useState("")
    const [author, setAuthor] = useState("")
    const [isPending, setIsPending] = useState(false)
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, blogDescription, author }
        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('success!')
            setIsPending(false);
            // this will redirect the user to the homepage where the new blog will be
            history.push('/')
        })
    }
            
    
    return ( 
        <div className="create">
            <div className="recipe-form">
                <h1>Add a recipe</h1>
                <form onSubmit={handleSubmit}>
                    <label> Recipe Name :</label>
                    <input
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        required
                    />
                    <label> Recipe Description:</label>
                    <textarea
                        value={blogDescription}
                        onChange={e => setBlogDescription(e.target.value)}
                        required
                    ></textarea>
                    <label>Grandma's Name: </label>
                    <input
                        value={ author }
                        placeholder= "The best grandma ever ❤️"
                        onChange={e => setAuthor(e.target.value)}
                        >
                        
                    </input>
                    { !isPending && <button>Add Recipe</button> }
                    { isPending && <button disabled >Adding Recipe...</button>}
                </form>
            </div>
        </div>
     );
}
 
export default Create;