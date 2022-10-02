import React, {useEffect, useState} from 'react';
import UseFetch from "./useFetch";

function Home() {
    const {veri:blogs,loading,err}=UseFetch('http://localhost:8000/Yazilar')


        return (
            <>
                {err && <div className="error">{err}</div>}
                {loading && <div className="loading"> Yükleniyor..</div>}
                {
                   blogs && blogs.map((blog)=>{
                        const {id,description,author,ad}=blog
                        //console.log(id,author,description,ad)
                    return(
                        <div key={id}>
                            <h2>{ad}</h2>
                            <p>{description}</p>
                            <p>Yazar: {author}</p>
                            <hr/>
                        </div>
                    )
                    })
                }


            </>
        );

}



export default Home;