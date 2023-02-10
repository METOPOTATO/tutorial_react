import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
   
      fetch(url)
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("Could not fetch data from server");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          // setData(null);
          setIsPending(false);
          setError(err.message);
        });
  
    return () => console.log('clean up');

  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
