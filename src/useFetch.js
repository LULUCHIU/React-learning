import { useState, useEffect } from "react";
const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                // console.log(res);
                if(!res.ok){
                    throw Error('could not fecth the data');
                }
               return res.json();
            })
            .then((data) => {
                // console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setIsPending(false);
                setError(err.message);


            })
        // console.log('use effect ran');
        // console.log(name);
    }, [url]);

    return { data, isPending, error}

}

export default useFetch;
