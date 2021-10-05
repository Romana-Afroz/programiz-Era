// for service part
import { Link } from "react-router-dom";
import './Service.css';
const Service = (props) => {
    console.log(props.service);
    console.log(props.serb);
    const { img, description, Details, courseTitel, courseInstructor, courseFee } = props.service
    return (


        <div className="card-feature col-md-3 col-12">
            <div>
                <Link to="/services">
                    <img classNameName="img-size img-fluid" width="336px" src={img} alt="" />
                </Link>
            </div>

            <div className="card-body">
                <h5 className="card-title">{courseTitel}</h5>

            </div>
            <div className="card-footer">
                <Link to="/services">
                    <button type="button" className=" btn btn-dark">More Details</button>
                </Link>
            </div>

        </div>

    )
}
export default Service;