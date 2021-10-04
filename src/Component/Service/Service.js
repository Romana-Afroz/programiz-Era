import { Link } from "react-router-dom";

const Service=(props) => {
    console.log(props.service);
    const {img, description,Details,courseTitel,courseInstructor,courseFee}=props.service 
    return(
        <div>
            <div className="service">
                <Link to="/services"> 
                <img   className="img-size" src={img} alt="" />
                </Link>
            </div>
        </div>
    )
}
export default Service;