import { useState, useEffect } from "react";

const useFetch = (url) => {

        const [data , setData] = useState(null); //fetching data using json server now
        
    // const [name, setName]= useState('Talha');
        const [error, setError]= useState(null);

        const [isPending, setisPending] = useState(true);
    
    useEffect(()=>{
        const abortCont= new AbortController();

        fetch(url, {signal:abortCont.signal})
        .then(res=>{
            if(!res.ok)
            {
                throw Error('Could not Fetch data');
            }
            return res.json();
        })
        .then (data=>{
            setData(data);
            setisPending(false);
            setError(null);
        })
        .catch((err)=>{
           // console.log(err.message);
           if (err.name==='AbortError')
           {
            console.log('Fetch Aborted')
           }
           else{
           setisPending(false);
           setError(err.message);
           }
        })
        return ()=> abortCont.abort();
       },[url]); //function called when name changes so it becomes a dependency
        
    return {data, isPending, error};
}
 
export default useFetch;