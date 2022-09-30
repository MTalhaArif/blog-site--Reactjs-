import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => { //same as passing props and declaring as done in the comments
    // const blogs=props.blogs;

    // const title=props.title;

    return ( 
        <div className="blog-list">
            <br/>
            <h2> {title} </h2>
             {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link to={`/blogs/${blog.id}`}>
                <h1>{blog.title}</h1>
                <p>Written by {blog.author}</p>
                </Link>
                {/* <button onClick={()=> handledelete (blog.id)}> Delete Blog</button> */}
                
            </div>
          ))}
        </div>
     );
}
 
export default BlogList;