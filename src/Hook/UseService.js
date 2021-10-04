import { useEffect, useState } from "react";
const useService = () =>{
    const [Service,setService] = useState([]);
    useEffect(()=>{ 
    fetch('./services.JSON')
    .then(res => res.json())
    .then(data =>setService(data))
    },[]);
 }

export default UseService;
