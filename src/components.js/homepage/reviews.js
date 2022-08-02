import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import trust from '../../assets/img/trust.svg'
import './reviews.css'
const Reviews=({reviews})=>{

    return(
        <OwlCarousel className="owl-theme" loop margin={10} nav>
            {reviews.map((review)=>(
                <div className="item">
                    <img className="trust" src={trust}/>
                        <h6 className="heading-review">{review.title}</h6>
                            <p>{review.desc} <br/><small>{review.name}</small> </p>
                </div>
            ))}


        </OwlCarousel>
    )
}
export default Reviews