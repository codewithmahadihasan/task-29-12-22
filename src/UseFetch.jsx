import React, { useEffect, useState } from 'react';

const UseFetch = (url) => {
    const[users,setUsers]= useState([])
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            
            setUsers(data)})
    },[url])

    return   [ users]
    
};

export default UseFetch;