import Styles from '../Home.module.css'

const Product = (props) => {    
    return (
        <>
            <div>
                <img
                    className="photo"
                    id={Styles.on}
                    src={props.photo}
                    alt="First slide"
                />
                <h6 className="title" id={Styles.title}>{props.title}</h6>
            </div>
        </>
    )
}

export default Product