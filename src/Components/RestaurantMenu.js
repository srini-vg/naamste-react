import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = (props) => {
    const [restInfo, setRestInfo] = useState(null);
    const  {resId}  = useParams();
    
    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        let result = await fetch(MENU_API + resId);
        const json = await result.json();
        setRestInfo(json.data);
    };

    if (restInfo === null)
        return <Shimmer />;

    const { name, cuisines, costForTwoMessage } = restInfo?.cards[2]?.card?.card?.info;
    const { cards } = restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
    
    return (
        <div className="restro-menu">
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{costForTwoMessage}</h3>
            <h1>Menu</h1>
            <ul>
                {
                    cards.map((card) => {
                        let { itemCards } = card.card?.card;
                        return itemCards?.map((item) => (
                            <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {(item?.card?.info?.defaultPrice / 100) || (item?.card?.info?.price / 100)}/-</li>
                        ))
                    })
                }
            </ul>
        </div>
    );
};

export default RestaurantMenu;