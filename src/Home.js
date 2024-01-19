// import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    

   const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // }

    

    return (  
        <div className="home">
            {/* <h2>Home word</h2> */}
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))} */}
            {error && <div> { error }</div>}
            {isPending && <div>Loading....</div>}
            {blogs && <BlogList blogs = {blogs} title="welcome home" />}
            {/* <button onClick = {() => setName('lulu')}>change name</button> */}
            {/* <p>{name}</p> */}
            {/* <BlogList blogs = {blogs.filter((blog) => blog.author === 'tina')} title="Tina's blogs" /> */}
        </div>
    );
}
 
export default Home;