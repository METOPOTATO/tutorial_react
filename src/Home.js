import BlogList from "./BLogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data, isPending, error} = useFetch('http://127.0.0.1:5000/blogs');
  
  return (
    <div className="home">
      { error && <div>{error}</div> }
      { isPending && <div> Loading ... </div> }
      { data && <BlogList blogs={data} title='All Blogs' ></BlogList> }
    </div>
  );
};

export default Home;
