import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // let name = 'mario';
    // const [name, setName] = useState('mario');
    // const [age, setAge] = useState(25);

    // const handleClick = () => {
    //   setName('lulu');
    //   setAge(30);
    // }

    const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    return (  
        <div className="home">
            <h2>Home word</h2>
            {/* <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click me</button> */}
            {/* {blogs.map((blog) => (
                <div className="blog-preview" key = {blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                </div>
            ))} */}
            <BlogList blogs = {blogs} title='welcome home'/>
        </div>
    );
}
 
export default Home;