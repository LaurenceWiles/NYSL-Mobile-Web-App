import React, { useEffect,useState } from "react";
import { Button} from 'react-bootstrap';
import {auth} from '../components/firebase'

export const GalleryButton = () => {
    
    const [isLoggin,setLoggin]=useState(false)

    useEffect(()=>{
        const unsuscribe= auth.onAuthStateChanged( user => {
           setLoggin(!!user)
           });
           return () =>unsuscribe();
    },[])
    
    return (
        <div>
            {isLoggin && <Button>Photo Gallery</Button>}
         </div>
    )
}