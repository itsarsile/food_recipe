import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Foto from '../../assets/image/Ellipse 128.png'
import Styles from './Detail.module.css'
import Play from '../../assets/image/play.png'
import Footer from '../../components/footer/Footer'
import { useParams } from 'react-router-dom'
import axios from 'axios'


const DetailRecipe = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState("");
    useEffect(() => {
        axios.get(`https://food-recipe-be.onrender.com/recipes/${id}`)
            .then((res) => {
                setRecipe(res.data.data.recipeData[0]);
                // setRecipe(res.data.data.userData[0]);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])
    return (
        <>
            <Navbar />
            <div className="container">
                <section>
                    <div className="col-12">
                        <div className={Styles.wrapper}>
                            <h1 className='mb-5' id={Styles.txt}>{recipe.title}</h1>
                            <img src={recipe.photo} className={Styles.photo} alt="Image product" />
                            <div className={Styles.bton}>
                            <button className={Styles.save}><i className="fa-regular fa-bookmark fa-lg"></i></button>
                            <button className={Styles.like}><i className="fa-regular fa-thumbs-up fa-lg"></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={Styles.wrappe}>
                        <h3 className={Styles.ha3}>Ingredients</h3>
                        <div className={Styles.list}>
                            <p className={Styles.text}>{recipe.title}</p>
                            {/* <p className={Styles.text}> - 2 Egg</p>
                            <p className={Styles.text}> - 3 Slices Bread</p>
                            <p className={Styles.text}> - A Little Butter</p>
                            <p className={Styles.text}> - ⅓ Carton Of Cress</p>
                            <p className={Styles.text}> - 2-3 Slices Of Tomato Or A Lettuce Leaf And A Slice Of Ham Or Cheese</p>
                            <p className={Styles.text}> - Crisps , To Serve</p> */}
                            <h3 className={Styles.video}>Video Step</h3>
                            <div className={Styles.lists}>
                                <button className={Styles.btn}>
                                    <img src={Play} alt="" />
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={Styles.wrapp}>
                        <div className={Styles.wrap}>
                            <textarea type="text" className={Styles.comment} placeholder='Comment :' />
                            {/* <p className={Styles.paraf}>Comment :</p> */}
                            <div className={Styles.mainBtn}>
                                <button className={Styles.subBtn}>
                                    Send
                                </button>
                            </div>
                            <p className={Styles.parf}>Comment</p>
                            <div className={Styles.last}>
                                <div className={Styles.circle}>
                                    <img src={Foto} className={Styles.imge} alt="" />
                                </div>
                                <div className={Styles.box}>
                                    <h3>Ayudia</h3>
                                    <p className={Styles.farap}>Nice recipe. simple and delicious, thankyou</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default DetailRecipe