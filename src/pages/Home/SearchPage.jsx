import Styles from './Home.module.css'
import Footer from '../../components/footer/Footer'
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import RequireLogin from '../Auth/RequireLogin';
import Pagination from './Pagination';


const SearchPage = () => {
//   const navigate = useNavigate();

  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    axios.get('https://food-recipe-be.onrender.com/recipes')
      .then((res) => {
        setRecipes(res.data.data);
      })
  }, []);

  // const [search, setSearch] = useState("")


  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = recipes.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <div className={Styles.bdy}>

          <RequireLogin />

        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>Popular Recipe</h5>
            </div>
            <div className='row mt-5'>
              {currentPosts.map((recipe => (
                <div className="col-md-4">
                  <Link to={`detail/${recipe.id}`}>
                    <div className={Styles.wrappe1}>
                      <img src={recipe.photo} alt="Recipe popular" className={Styles.product} style={{ filter: 'brightness(70%)', height: 200, objectFit: 'cover', borderRadius: "5px" }} />
                      <h6 className={Styles.titles}>{recipe.title}</h6>
                    </div>
                  </Link>
                </div>
              )))}


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
        </section >
        <div className="mt-5">
          <Footer />
        </div>
      </div >
    </>
  )
}

export default SearchPage