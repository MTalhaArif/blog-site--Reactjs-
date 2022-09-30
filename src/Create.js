import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Talha');
    const [isPending, setisPending] = useState(false);
    const history = useHistory();

    const handleSubmit= (e)=>{
        e.preventDefault();
        const blog= {title, body, author};
        setisPending(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers : {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then (()=>{
            console.log('New Blog Added');
            setisPending(false);
            //history.go(-1);  this goes back one page
            history.push('/'); // redirects to home page
        })
    }
    return ( 
        <div className="create">
            <h2> Add a new Blog </h2>

            <form onSubmit={handleSubmit}>
                <label>Blog Title : </label>
                <input 
                    type="text"
                    required
                    value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
                <label>Blog Body : </label>
                <textarea
                    required
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}


                />
                <label>Blog Author :</label>
                <select 
                value={author}
                onChange={(e)=>setAuthor(e.target.value)}
                >
                    <option value="Talha">Talha</option>
                    <option value="Asad">Asad</option>
                </select>
               {!isPending && <button>Add Blog </button>}
               {isPending && <button disabled >Addong Blog... </button>}
                {/* <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p> */}
            </form>
        </div>
     );
}
 
export default Create;