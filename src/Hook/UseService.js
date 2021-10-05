// for useService part
import { useEffect, useState } from "react";
const UseService = () =>{
    const [service,setService] = useState([]);
    useEffect(()=>{ 
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data => setService(data))
    },[]);
    return[service,setService]
 };

export default UseService;
