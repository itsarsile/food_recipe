import Styles from './Home.module.css';
import Footer from '../../components/footer/Footer';
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import three from '../../assets/img/Make Vector.png';
import Product from './section/Product';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
// import NavbarLogin from '../../components/navbarLogin/NavbarLogin'
import delicious from '../../assets/img/—Pngtree—delicious food_568171 1.png';
import vector from '../../assets/img/Make Vector BG.png';
import salad from '../../assets/img/—Pngtree—lettuce_1175257 1.png';
// import Pagination from './Pagination';
import RequireLogin from '../Auth/RequireLogin';
import Pagination from './Pagination';

const Home = () => {
  const navigate = useNavigate();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: {max: 4000, min: 1024},
      items: 2,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: {max: 1024, min: 800},
      items: 2,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: {max: 800, min: 464},
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: {max: 464, min: 0},
      items: 1,
    },
  };

  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    axios.get('https://food-recipe-be.onrender.com/recipes').then((res) => {
      setRecipes(res.data.data);
    });
  }, []);

  // const [search, setSearch] = useState("")

  const products = recipes.map((recipe) => (
    <Link to={`detail/${recipe.id}`}>
      <Product title={recipe.title} photo={recipe.photo} />
    </Link>
  ));

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipes.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className={Styles.bdy}>
        <section className={Styles.se}>
          <RequireLogin />
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className={Styles.header1}>
                  <h1 className={Styles.h}>Discover Recipe</h1>
                  <h1 className={Styles.h}>&amp; Delicious Food</h1>
                  <div className={Styles.put}>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" placeholder="Search Recipe" className={Styles.nput} />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="row">
                  <div className={Styles.box}>
                    <img src={delicious} className={Styles.photoawal} alt="Delicious food" />
                    <img src={vector} className={Styles.photokedua} alt="Vector Bg" />
                    <img src={salad} className={Styles.photoketiga} alt="Lettuce" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={Styles.re}>
          <div className={Styles.rep}></div>
        </div>

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
            <Carousel responsive={responsive}>{products}</Carousel>
          </div>
        </section>

        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>New Recipe</h5>
            </div>
          </div>
          {recipes.slice(0, 1).map((recipe) => (
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
                    <button className={Styles.buttn} onClick={() => navigate(`detail/${recipe.id}`)}>
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>Popular Recipe</h5>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              {currentPosts.map((recipe) => (
                <div className="col-md-4">
                  <Link to={`detail/${recipe.id}`}>
                    <div className={Styles.wrappe1}>
                      <img src={recipe.photo} alt="Recipe popular" className={Styles.product} style={{filter: 'brightness(70%)', height: 200, objectFit: 'cover', borderRadius: '5px'}} />
                      <h6 className={Styles.titles}>{recipe.title}</h6>
                    </div>
                  </Link>
                </div>
              ))}

              {/* .filter(recipe => {
                if (search === "") {
                  return recipe
                } else if (recipe.title.toLowerCase().includes(search.toLowerCase())) {
                  return recipe
                }
              })
              /> 
              
              onChange={(e) => setSearch(e.target.value)} */}
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <Pagination totalPosts={recipes.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
          </div>
        </section>
        <div className="mt-5">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
