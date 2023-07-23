import React, { useEffect, useState } from "react";
import Styles from "./Detail.module.css";
import Play from "../../assets/image/play.png";
import Footer from "../../components/footer/Footer";
import { useParams } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Swal from 'sweetalert2'
import Comment from "./Comment";
import RequireLogin from "../Auth/RequireLogin";

const DetailRecipe = () => {
    const [lgShow, setLgShow] = useState(false);

    const { id } = useParams();
    const [userId, setUserId] = useState("");
    const [recipe, setRecipe] = useState("");

    useEffect(() => {
        const storedUserId = localStorage.getItem("id");
        setUserId(storedUserId);
    }, []);

    useEffect(() => {
        axios
            .get(`https://food-recipe-be.onrender.com/recipes/${id}`)
            .then((res) => {
                setRecipe(res.data.data.recipeData[0]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSave = (e) => {
        e.preventDefault();
        axios.post(
            `https://food-recipe-be.onrender.com/recipes/saved/${id}/user/${userId}`
        ).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Yeayy...',
                text: 'Recipe has been save',
            })
        })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oups...',
                    text: "Recipe can't be saved",
                })
            })
    };

    const handleLike = (e) => {
        e.preventDefault();
        axios.post(
            `https://food-recipe-be.onrender.com/recipes/liked/${id}/user/${userId}`
        ).then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Thank you',
                text: 'Recipe has been like',
            })
        }).catch(() => {
            Swal.fire({
                icon: 'error',
                title: 'Oups...',
                text: "Recipe can't be like",
            })
        })
    };
    return (
        <>

            <RequireLogin />
            <div className="container">
                <section>
                    <div className="col-12">
                        <div className={Styles.wrapper}>
                            <h1 className="mb-5" id={Styles.txt}>
                                {recipe.title}
                            </h1>
                            <div className={Styles.pth}>
                                <img
                                    src={recipe.photo}
                                    className={Styles.photo}
                                    alt="Logo product"
                                />
                                <div className={Styles.bton}>
                                    <button className={Styles.save} onClick={handleLike}>
                                        <i className="fa-regular fa-thumbs-up fa-lg"></i>
                                    </button>
                                    <button className={Styles.like} onClick={handleSave}>
                                        <i className="fa-regular fa-bookmark fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className={Styles.wrappe}>
                        <h3 className={Styles.ha3}>Ingredients</h3>
                        <div className={Styles.list}>
                            <p className={Styles.text}>{recipe.details}</p>
                            <h3 className={Styles.video}>Video Step</h3>
                            <div className={Styles.lists}>
                                <button className={Styles.btn} onClick={() => setLgShow(true)}>
                                    <img src={Play} alt="video" />
                                </button>
                                <Modal
                                    size="lg"
                                    show={lgShow}
                                    onHide={() => setLgShow(false)}
                                    aria-labelledby="example-modal-sizes-title-lg"
                                >
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-lg">
                                            Recipe video
                                        </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <video
                                            controls
                                            autoPlay
                                            src={recipe.video}
                                            type="mp4/video/webm"
                                            className="w-100"
                                        ></video>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </div>
                    </div>
                </section>

                <Comment id={id} />
            </div>
            <Footer />
        </>
    );
};

export default DetailRecipe;