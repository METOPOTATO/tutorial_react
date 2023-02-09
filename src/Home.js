import userEvent from "@testing-library/user-event";
import { useState } from "react";
import BlogList from "./BLogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { 
      title: "My new website", 
      body: "lorem ipsum...", 
      author: "mario", 
      id: 1 
    },
    {
      title: "Welcome to party",
      body: "lorem ipsum...",
      author: "linh",
      id: 2,
    },
    {
      title: "Web develop tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) =>{
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }

  return (
    <div className="home">
      <BlogList blogs={blogs} title='All Blogs'  handleDelete={handleDelete}></BlogList>
      {/* <BlogList blogs={blogs.filter((blog)=>blog.author === 'mario')} title="Mario's blog" handleDelete={handleDelete}></BlogList> */}
    </div>
  );
};

export default Home;
