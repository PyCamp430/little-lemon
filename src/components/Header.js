import restaurantfood from "../images/restaurantfood.jpg";

function Header() {
    return (
        <div className="header">
            <div className="desc">
                <h2>Little Lemon</h2>
                <h4>Chicago</h4>
                <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                <button type="button">Reserve a Table</button>
            </div>
            <div className="desc-img">
                <img src={restaurantfood} alt="Restaurant Food" />
            </div>
        </div>
    );
}

export default Header;