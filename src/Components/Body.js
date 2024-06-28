import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [orgListOfRestaurants, setOrgListOfRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3991989&lng=78.3857379&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data?.json();
        let list = [];
        json?.data?.cards?.map(card => {
            card?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map((rest) => list.push(rest));
        });
        setListOfRestaurants(list);
        setOrgListOfRestaurants(list);
    };

    // Conditional Rendering
    // if (listOfRestaurants.length === 0) {
    //     return <Shimmer />;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e) => { setSearchText(e.target.value) }} />
                    <button onClick={() => {
                        let filteredRestras=orgListOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setListOfRestaurants(filteredRestras);
                    }}>search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    let list = orgListOfRestaurants.filter((res) => res.info.avgRating > 4)
                    setListOfRestaurants(list);
                }}
                >
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurants.map((restaurant) => (
                        <Link className="restro-link" to={`/restaurants/${restaurant.info.id}`}> <RestaurantCard key={restaurant.info.id} resData={restaurant.info} /></Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;