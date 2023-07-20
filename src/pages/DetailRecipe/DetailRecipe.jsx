import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Food from '../../assets/image/Rectangle 313 (1).png'
import Foto from '../../assets/image/Ellipse 128.png'
import Styles from './Detail.module.css'
import Play from '../../assets/image/play.png'
import Footer from '../../components/footer/Footer'


const DetailRecipe = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <section>
                    <div className="col-12">
                        <div className={Styles.wrapper}>
                            <h1 className='mb-5' id={Styles.txt}>Loream Sandwich</h1>
                            <img src={Food} className={Styles.photo} alt="" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className={Styles.wrappe}>
                        <h3 className={Styles.ha3}>Ingredients</h3>
                        <div className={Styles.list}>
                            <p className={Styles.text}> - 2 Egg</p>
                            <p className={Styles.text}> - 2 Tbsp Mayonnaise</p>
                            <p className={Styles.text}> - 3 Slices Bread</p>
                            <p className={Styles.text}> - A Little Butter</p>
                            <p className={Styles.text}> - ⅓ Carton Of Cress</p>
                            <p className={Styles.text}> - 2-3 Slices Of Tomato Or A Lettuce Leaf And A Slice Of Ham Or Cheese</p>
                            <p className={Styles.text}> - Crisps , To Serve</p>
                            <h3 className={Styles.video}>Video Step</h3>
                            <div className={Styles.lists}>
                                <button className={Styles.btn}>
                                    <img src={Play} alt="" />
                                </button>
                                <button className={Styles.btn}>
                                    <img src={Play} alt="" />
                                </button>
                                <button className={Styles.btn}>
                                    <img src={Play} alt="" />
                                </button>
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
                            <input type="text" className={Styles.comment} />
                            <p className={Styles.paraf}>Comment :</p>
                            <div className={Styles.mainBtn}>
                                <button className={Styles.subBtn}>
                                    Send</button>
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