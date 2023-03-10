import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const BLogDetail = () => {
  const { id } = useParams();
  const { data: blog, isPending, error} = useFetch('http://127.0.0.1:5000/blogs/' + id);

  return ( 
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div>}
      { blog && (
        <article>
          <h2>{ blog.title }</h2>
          <p>Written by {  blog.author }</p>
          <p>{ blog.body }</p>
        </article>
      )}
    </div>
   );
}
 
export default BLogDetail;