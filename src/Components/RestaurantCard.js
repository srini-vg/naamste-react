import { resImageBaseUrl } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData}=props;
    const {cloudinaryImageId, name , cuisines, avgRating, costForTwo,sla}=resData;

    return (
        <div className="res-card">
            <img alt="res-logo"
                className="res-logo"
                src={resImageBaseUrl + cloudinaryImageId} />
            <h4>{name}</h4>
            <h5>{cuisines.join(", ").toString()}</h5>
            <h6>Rating : {avgRating}</h6>
            <h6>{costForTwo}</h6>
            <p>{sla.slaString}</p>
        </div>
    );
}


export default RestaurantCard;