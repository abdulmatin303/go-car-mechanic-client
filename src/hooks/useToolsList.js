import { useEffect, useState } from "react";

const useToolsList = () => {

    const [services, setServices]= useState([]);

    useEffect(()=>{
        fetch('https://frozen-anchorage-94808.herokuapp.com/service')
        .then(res=> res.json())
        .then(data=> setServices(data))
    },[])

    return [services,setServices]

}

export default useToolsList;