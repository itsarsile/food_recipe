import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Styles from "./Detail.module.css";
import SecComment from './SecComment';


const Comment = () => {
    const usersId = localStorage.getItem('id')
    const { id } = useParams();
    const [data, setData] = useState({
        userid: Number(usersId),
        recipeid: Number(id),
        message: '',
    });

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value,
        });
        console.log(data)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://food-recipe-be.onrender.com/comment/${id}/${usersId}`, data)
            .then((res) => {
                setData(res.data);
                window.location.reload()
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <>
            <section>
                <div className={Styles.wrapp}>
                    <div className={Styles.wrap}>
                        <form onSubmit={handleSubmit}>
                            <textarea
                                name="message"
                                value={data.message}
                                type="text"
                                className={Styles.comment}
                                placeholder="Comment :"
                                onChange={handleChange}
                            />
                            <div className={Styles.mainBtn}>
                                <button className={Styles.subBtn} type='submit'>Send</button>
                            </div>
                            <p className={Styles.parf}>Comment:</p>
                            <SecComment />
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Comment