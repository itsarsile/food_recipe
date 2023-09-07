import Styles from './Home.module.css'
import Footer from '../../components/footer/Footer'
import 'react-multi-carousel/lib/styles.css';
import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom';
import RequireLogin from '../Auth/RequireLogin';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getAllRecipeAction from '../../config/redux/actions/getAllRecipeAction';


const SearchPage = () => {
    const dispatch = useDispatch()
    const {recipe} = useSelector((state)=>state.recipe)
    // const [recipes, setRecipes] = useState([])
    useEffect(() => {
        // axios.get('https://food-recipe-be.onrender.com/recipes')
        //     .then((res) => {
        //         setRecipes(res.data.data);
        //     })
        dispatch(getAllRecipeAction())
    }, [dispatch]);

    const [search, setSearch] = useState("")

    const [sortOption, setSortOption] = useState('');
    const handleSort = (option) => {
        setSortOption(option);
    };

    return (
        <>
            <div className={Styles.bdy}>
                <section>
                    <div className="container">
                        <p style={{color:"transparent"}}>..</p>
                    </div>
                </section>
                <RequireLogin />
                <section className={Styles.sec}>
                    <div className="container mt-5">
                        <div className='d-flex'>
                            <input type="text" placeholder='Search Recipe' className={Styles.search} onChange={(e) => setSearch(e.target.value)} />
                            <DropdownButton variant="warning" id="dropdown-item-button" title="Sort" className="d-flex align-item-bottom">
                                <Dropdown.Item as="button" onClick={() => handleSort("name_asc")}>
                                    Name A-Z
                                </Dropdown.Item>
                                <Dropdown.Item as="button" onClick={() => handleSort("name_desc")}>
                                    Name Z-A
                                </Dropdown.Item>
                            </DropdownButton>
                        </div>
                        <div className='row mt-5'>
                            {recipe.filter((recipes) => {
                                if (search === "") {
                                    return recipes
                                } else if (recipes.title.toLowerCase().includes(search.toLowerCase())) {
                                    return recipes
                                }
                                return false
                            })
                                .sort((a, b) => {
                                    switch (sortOption) {
                                        case 'name_asc':
                                            return a.title.localeCompare(b.title);
                                        case 'name_desc':
                                            return b.title.localeCompare(a.title);
                                        default:
                                            return 0;
                                    }
                                })
                                .map((recipe => (
                                    <div className="col-md-4">
                                        <Link to={`/detail/${recipe.id}`}>
                                            <div className={Styles.wrappe1}>
                                                <img src={recipe.photo} alt="Recipe popular" className={Styles.product} style={{ filter: 'brightness(70%)', height: 200, objectFit: 'cover', borderRadius: "5px" }} />
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

export default SearchPage