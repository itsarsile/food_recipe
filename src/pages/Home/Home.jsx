import Styles from './Home.module.css'
import burger from '../../assets/img/Rectangle 313.png'
import P1 from '../../assets/img/Rectangle 314.png'
import P2 from '../../assets/img/Rectangle 315.png'
import P3 from '../../assets/img/Rectangle 316.png'
import P4 from '../../assets/img/Rectangle 317.png'
import P5 from '../../assets/img/Rectangle 318.png'
import P6 from '../../assets/img/Rectangle 319.png'
import Footer from '../../components/footer/Footer'
import 'react-multi-carousel/lib/styles.css';
import Section1 from './section/Section1'
import Section2 from './section/Section2'

const Home = () => {
 

  return (
    <>
      <div className={Styles.bdy}>
        <Section1 />
        <Section2 />        
        <section className={Styles.sec}>
          <div className="container mt-5">
            <div className="row">
              <div className={Styles.slice}></div>
              <h5 className={Styles.hd5}>New Recipe</h5>
            </div>
          </div>
          <div className={Styles.wrapr}>
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
                <p className={Styles.p}>Quick + Easy span Chicken Bone Broth Ramen - Healthy chicken ramen in a hurry? That’s right!</p>
                <div className={Styles.btn}>
                  <button className={Styles.buttn}>Learn More</button>
                </div>
              </div>
            </div>
          </div>
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
              <div className="col-md-4">
                <div className={Styles.wrappe1}>
                  <img src={P1} alt="" className={Styles.product} />
                  <h6 className={Styles.titles}>Chiken Kare</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.wrappe2}>
                  <img src={P2} alt="" className={Styles.product} />
                  <h6 className={Styles.titles}>Bomb Chicken</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.wrappe3}>
                  <img src={P3} alt="" className={Styles.product} />
                  <h6 className={Styles.titless}>Banana Smothie Pop</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.wrappe1}>
                  <img src={P4} alt="" className={Styles.products} />
                  <h6 className={Styles.titless}>Cofee Lava Cake</h6>
                </div>
              </div>
              <div className="col-md-4">
                <div className={Styles.wrappe2}>
                  <img src={P5} alt="" className={Styles.products} />
                  <h6 className={Styles.titless}>Sugar Salmon</h6>
                </div>
              </div>
              <div className="col-md-4">
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
      </div >
    </>
  )
}

export default Home