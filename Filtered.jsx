import { useMemo, useState } from "react";
const arr=["my", "name", "is", "devesh", "random", "for", "to"];
const sentences=[];
for(let i=0;i<=1000;i++){
    let curr="";
    for(let i=0;i<7;i++){
        let a=Math.floor(Math.random()*7);
        curr+=arr[a];
        curr+=" ";
    }
    sentences.push(curr);
}

function Filtered(){
    
    const [filter,setFilter]=useState("");
    const Filteredsentences=useMemo(()=>{
        return sentences.filter((sent)=>sent.includes(filter));
    },[filter])
    return <>
    <input type="text" placeholder="Sort" onChange={(e)=>setFilter(e.target.value)} />
    {
        Filteredsentences.map((el)=>{
            return <div>{el}</div>
        })
    }
    </>
}

export default Filtered;
