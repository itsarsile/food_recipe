import Styles from '../Home.module.css'

const Product = (props) => {    
    return (
        <>
            <div>
                <img
                    className={Styles.photo}
                    id={Styles.on}
                    src={props.photo}
                    alt="Popular for you"
                />
                <h6 className="title" id={Styles.title}>{props.title}</h6>
            </div>
        </>
    )
}

export default Product