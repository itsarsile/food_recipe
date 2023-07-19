import React from 'react'
import NavbarLogin from '../../components/navbarLogin/NavbarLogin'
import Styles from './Home.module.css'
import delicious from '../../assets/img/—Pngtree—delicious food_568171 1.png'
import one from '../../assets/img/1.png'
import two from '../../assets/img/2.png'
import three from '../../assets/img/Make Vector.png'
import burger from '../../assets/img/Rectangle 313.png'
import P1 from '../../assets/img/Rectangle 314.png'
import P2 from '../../assets/img/Rectangle 315.png'
import P3 from '../../assets/img/Rectangle 316.png'
import P4 from '../../assets/img/Rectangle 317.png'
import P5 from '../../assets/img/Rectangle 318.png'
import P6 from '../../assets/img/Rectangle 319.png'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <>
      <section className={Styles.sec}>
        <NavbarLogin />
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
                  <img
                    src={delicious}
                    className={Styles.photoawal}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={Styles.se}>
        <div className="container">
          <div className="row">
            <div className={Styles.slice}></div>
            <h5 className={Styles.hd5}>Popular For you !</h5>
          </div>
        </div>
        <div className="mt-5">
          <img src={three} className={Styles.n} alt="" />
        </div>
        <div className="row">
          <div className={Styles.wrap}>
            <img src={one} className={Styles.on} alt="" />
            <h6 className={Styles.title}>Pizza Lamoa</h6>
          </div>
          <div className={Styles.wrapp}>
            <img src={two} className={Styles.ont} alt="" />
            <h6 className={Styles.title}>King Burger</h6>
          </div>
        </div>
      </section>

      <section className={Styles.sec}>
        <div className="container">
          <div className="row">
            <div className={Styles.slice}></div>
            <h5 className={Styles.hd5}>New Recipe</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <div className={Styles.frs}>
              <div className={Styles.scn}>
                <div className={Styles.thr}>
                  <img src={burger} className={Styles.bgr} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className={Styles.wrapper}>
              <h1 className={Styles.hlth}>Healthy Bone Broth Ramen (Quick & Easy)</h1>
              <div className={Styles.line}></div>
              <p className={Styles.p}>Quick + Easy Chicken Bone Broth Ramen - Healthy chicken ramen in a hurry? That’s right!</p>
              <div className={Styles.btn}>
                <button className={Styles.buttn}>Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section> 

       <section className={Styles.sec}>
        <div className="container">
          <div className="row">
            <div className={Styles.slice}></div>
            <h5 className={Styles.hd5}>Popular Recipe</h5>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-4 col">
              <div className={Styles.wrappe1}>
                <img src={P1} alt="" className={Styles.product} />
                <h6 className={Styles.titles}>Chiken Kare</h6>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.wrappe2}>
                <img src={P2} alt="" className={Styles.product} />
                <h6 className={Styles.titles}>Bomb Chicken</h6>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.wrappe3}>
                <img src={P3} alt="" className={Styles.product} />
                <h6 className={Styles.titless}>Banana Smothie Pop</h6>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.wrappe1}>
                <img src={P4} alt="" className={Styles.products} />
                <h6 className={Styles.titless}>Cofee Lava Cake</h6>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.wrappe2}>
                <img src={P5} alt="" className={Styles.products} />
                <h6 className={Styles.titless}>Sugar Salmon</h6>
              </div>
            </div>
            <div className="col-4">
              <div className={Styles.wrappe3}>
                <img src={P6} alt="" className={Styles.products} />
                <h6 className={Styles.titles}>Indian Salad</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  )
}

export default Home