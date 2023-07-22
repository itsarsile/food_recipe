import Styles from './Home.module.css'
// import burger from '../../assets/img/Rectangle 313.png'
import Footer from '../../components/footer/Footer'
import 'react-multi-carousel/lib/styles.css';
import Section1 from './section/Section1'
import Carousel from 'react-multi-carousel';
import three from '../../assets/img/Make Vector.png'
import Product from './section/Product'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


const Home = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
      slidesToSlide: 2
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
      slidesToSlide: 2
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get('https://food-recipe-be.onrender.com/recipes')
      .then((res) => {
        console.log(res.data.data);
        setRecipes(res.data.data);
      })
  }, []);

  const products = recipes.map(recipe => (
    <Product title={recipe.title} photo={recipe.photo} />
  ))

  return (
    <>
      <div className={Styles.bdy}>
        <Section1 />
        <section className={Styles.se}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>Popular For you !</h5>
            </div>
          </div>
          <div className="mt-5">
            <img src={three} className={Styles.n} alt="Vector" />
          </div>
          <div className={Styles.wrap}>
            <Carousel
              responsive={responsive}>
              {products}
            </Carousel>
          </div>

        </section >

        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>New Recipe</h5>
            </div>
          </div>
          {recipes.slice(0, 1).map((recipe => (
            <div className={Styles.wrapr}>
              <div className="col-6">
                <div className={Styles.frs}>
                  <div className={Styles.scn}>
                    <div className={Styles.thr}>
                      <img src={recipe.photo} className={Styles.bgr} alt="Product utama" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className={Styles.wrapper}>
                  <h1 className={Styles.hlth}>{recipe.title}</h1>
                  <div className={Styles.line}></div>
                  <p className={Styles.p}>{recipe.details}</p>
                  <div className={Styles.btn}>
                    <button className={Styles.buttn}>Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          )))}
        </section>

        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>Popular Recipe</h5>
            </div>
          </div>
          <div className="container mt-5">
            <div className='row'>
              {recipes.map((recipe => (
                <div className="col-md-4">
                  <Link to={`detail/${recipe.id}`}>
                    <div className={Styles.wrappe1}>
                      <img src={recipe.photo} alt="Recipe popular" className={Styles.product} />
                      <h6 className={Styles.titles}>{recipe.title}</h6>
                    </div>
                  </Link>
                </div>
              )))}
            </div>
          </div>
        </section >
        <div className="mt-5">
          <Footer />
        </div>
      </div >
    </>
  )
}

export default Home