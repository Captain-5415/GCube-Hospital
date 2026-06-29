import { useEffect, useState } from "react";

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    async function fetchData() {

      try {
        const res = await fetch(url);
        const result = await res.json();
        setData(result);
      }

      catch (err) {
        console.log(err);
      }

      finally {
        setLoading(false);
      }

    }

    fetchData();

  }, [url]);

  return { data, loading };

}

export default useFetch;