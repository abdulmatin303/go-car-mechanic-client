import { useEffect, useState } from "react";

const useToolsList = () => {

    const [services, setServices]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return [services,setServices]

}

export default useToolsList;