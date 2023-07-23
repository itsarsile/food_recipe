import React from 'react'
import Styles from "./Detail.module.css";
import { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const SecComment = () => {
    const { id } = useParams();
    const [coments, setComents] = useState([])
    useEffect(() => {
        axios.get(`https://food-recipe-be.onrender.com/comment/${id}`)
            .then((res) => {
                setComents(res.data.data);
                console.log(res.data.data);
                return
            })
            .catch((err) => {
                console.log(err);
            })
    },[id])
    return (
        <>
        {coments.map((coment =>(
             <div className={Styles.last}>
             <div className={Styles.circle}>
                 <img src={coment.user.photo} className={Styles.imge} alt="" />
             </div>
             <div className={Styles.box}>
                 <h3>{coment.user.name}</h3>
                 <p className={Styles.farap}>
                     {coment.message}
                 </p>
             </div>
         </div>
        )))}
        </>
    )
}

export default SecComment