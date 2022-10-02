import React, {useEffect, useState} from 'react';


const useFetch=(url)=>{
    const [veri,setVeri]=useState(null)
    const [loading,setLoading]=useState(true)
    const [err,setErr]=useState(null)

    useEffect(()=>{
        fetch(url).then(res=>{
            if (!res.ok) throw Error("Veriler Çekilemedi...")
            return res.json();
        }).then(data=>{
            //console.log(data)
            setVeri(data)
            setLoading(false)
        }).catch(err=>{
            setErr(err.message)
            setLoading(false)
        })

    },[url])

    return {veri,loading,err}
}

export default useFetch;