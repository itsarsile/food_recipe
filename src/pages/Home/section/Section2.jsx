import Carousel from 'react-multi-carousel';
import axios from 'axios'
import Styles from '../Home.module.css'
import React, { useEffect, useState } from 'react'
import three from '../../../assets/img/Make Vector.png'
import one from '../../../assets/img/Rectangle 313.png'

const Section2 = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
      axios.get('https://food-recipe-be.onrender.com/recipes')
        .then((res) => {
          console.log(res.data.data);
          setRecipes(res.data.data);
        })
    })

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <section className={Styles.se}>
            <div className="container mt-5">
                <div className="row">
                    <div className={Styles.slice}></div>
                    <h5 className={Styles.hd5}>Popular For you !</h5>
                </div>
            </div>
            <div className="mt-5">
                <img src={three} className={Styles.n} alt="" />
            </div>
            
            <div className={Styles.wrap}>
                <Carousel responsive={responsive}>
                    <div>
                        <img
                            className={Styles.on}
                            src={one}
                            alt="First slide"
                        />
                        <h6 className="title" id={Styles.title}>Pizza Lamoa</h6>
                    </div>
                    <div>
                        <img
                            className={Styles.on}
                            src={one}
                            alt="First slide"
                        />
                        <h6 className="title" id={Styles.title}>Pizza Lamoa</h6>
                    </div>
                    <div>
                        <img
                            className={Styles.on}
                            src={one}
                            alt="First slide"
                        />
                        <h6 className="title" id={Styles.title}>Pizza Lamoa</h6>
                    </div>
                    <div>
                        <img
                            className={Styles.on}
                            src={one}
                            alt="First slide"
                        />
                        <h6 className="title" id={Styles.title}>Pizza Lamoa</h6>
                    </div>
                </Carousel>
            </div>
        </section >
    )
}

export default Section2