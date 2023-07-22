import React from 'react'
import NavbarLogin from '../../../components/navbarLogin/NavbarLogin'
import Styles from '../Home.module.css'
import delicious from '../../../assets/img/—Pngtree—delicious food_568171 1.png'
import vector from '../../../assets/img/Make Vector BG.png'
import salad from '../../../assets/img/—Pngtree—lettuce_1175257 1.png'

const Section1 = () => {
  return (
    <>
    <section className={Styles.se}>
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
                    <img src={vector} className={Styles.photokedua} alt="" />
                    <img src={salad} className={Styles.photoketiga} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={Styles.re}>
          <div className={Styles.rep}></div>
        </div>
    </>
  )
}

export default Section1