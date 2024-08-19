import bruchetta from "../images/bruschetta.jpg";
import lemonDessert from "../images/lemonDessert.jpg";
import greekSalad from "../images/greekSalad.jpg";
import cremeBrulee from "../images/creme-brulee.jpg";
import pasta from "../images/pasta.jpg";
import pizza from "../images/pizza.jpg";

function OrderOnline() {
    return (
        <div className="menu">
            <section className="specials">
                <h2>Our Specials!</h2>
                <button type="button">Online Menu</button>
            </section>
            <section className="cards">
                <div className="card">
                    <img src={greekSalad} className="card-img-top" alt="Greek Salad" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Greek Salad</h6>
                            <h6 className="price">$12.99</h6>
                        </p>
                        <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and reosemary croutons.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
                <div className="card">
                    <img src={bruchetta} className="card-img-top" alt="Bruchetta" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Bruchetta</h6>
                            <h6 className="price">$5.99</h6>
                        </p>
                        <p className="card-text">Our Bruchetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
                <div className="card">
                    <img src={lemonDessert} className="card-img-top" alt="Lemon Dessert" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Lemon Dessert</h6>
                            <h6 className="price">$5.00</h6>
                        </p>
                        <p className="card-text">This comes straight from grandma's recipe book, every last ingredient has been sourced and is authentic as can be imagined.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
                <div className="card">
                    <img src={cremeBrulee} className="card-img-top" alt="Creme Brulee" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Creme Brulee</h6>
                            <h6 className="price">$12.99</h6>
                        </p>
                        <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and reosemary croutons.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
                <div className="card">
                    <img src={pasta} className="card-img-top" alt="Pasta" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Pasta</h6>
                            <h6 className="price">$12.99</h6>
                        </p>
                        <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and reosemary croutons.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
                <div className="card">
                    <img src={pizza} className="card-img-top" alt="Pizza" />
                    <div className="card-body">
                        <p className="card-title">
                            <h6>Pizza</h6>
                            <h6 className="price">$12.99</h6>
                        </p>
                        <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and reosemary croutons.</p>
                        <h6>Order a delivery<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-scooter mx-2" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M9 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-.39l1.4 7a2.5 2.5 0 1 1-.98.195l-.189-.938-2.43 3.527A.5.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.287l2.831-4.11L11.09 3H9.5a.5.5 0 0 1-.5-.5ZM3.915 12a1.5 1.5 0 1 0 0 1H2.5a.5.5 0 0 1 0-1h1.415Zm8.817-.789A1.499 1.499 0 0 0 13.5 14a1.5 1.5 0 0 0 .213-2.985l.277 1.387a.5.5 0 0 1-.98.196l-.278-1.387Z"/></svg></h6>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default OrderOnline;