//import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {

    const {data, isPending, error} = useFetch('http://localhost:8000/blogs');

//    const handledelete=(id)=>{
//     const newBlogs=blogs.filter(blog=> blog.id!==id);
//     setBlogs(newBlogs);
//    }

  
    return ( 

        <div className="home">
                 {/* {blogs && <BlogList blogs={blogs} title="All Blogs! " handledelete={handledelete} /> } */}
            {error && <div> {error} </div>}
            {isPending && <div>Loading ... </div>}

            {data && <BlogList blogs={data} title="All Blogs! "  /> }

            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Talha')} title="Talha's Blogs! " /> */}
            {/* <button onClick={()=> setName('Asad')}> Change Name</button>
            <p> {name} </p> */}

        </div>
     );
}
 
export default Home;