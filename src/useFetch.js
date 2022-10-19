import { useState, useEffect } from "react";

const useFetch = (url)  => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)      // A message to be rendered until the content promise's fullfilled

  useEffect (()=> {
    fetch(url)
      .then(res=>res.json())
      .then(json=>{
        setData(json);
        setIsPending(false);                           // Changing the message state to close it 
      });
  },[url]);

  return {data, isPending};
}

export default useFetch;