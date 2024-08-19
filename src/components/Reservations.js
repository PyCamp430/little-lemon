import {useState} from "react";
import { useNavigate } from "react-router-dom";

function Reservations() {
    const [seating, setSeating] = useState("");
    const [occ, setOcc] = useState("");
    const [date, setDate] = useState(null);
    const [dinerNumber, setDinerNumber] = useState(0);
    const [dineTime, setDineTime] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitted", seating, occ, date, dinerNumber, dineTime);
        navigate("/bookingForm", {state: [seating, occ, date, dinerNumber, dineTime]});
    }

    return (
        <form className="reservation" onSubmit={(e) => handleSubmit(e)}>
            <div className="row">
                <div className="col">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="seatings" value="Indoor seating" checked={seating === "Indoor seating"} onChange={(e) => setSeating(e.target.value)} required />
                        <label className="form-check-label mb-5" htmlFor="flexRadioDefault1">Indoor seating</label>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="occasion">Occasion</label>
                        <select className="form-select" id="occasion" onChange={(e) => setOcc(e.target.value)} required>
                            <option value="">Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="dine-date">Date</label>
                        <input type="date" className="form-control" id="dine-date" onChange={(e) => setDate(e.target.value)} required/>
                    </div>
                </div>
                <div className="col">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="seatings" value="Outdoor seating" checked={seating === "Outdoor seating"} onChange={(e) => setSeating(e.target.value)} required />
                        <label className="form-check-label mb-5" htmlFor="flexRadioDefault2">Outdoor seating</label>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="guests">Number of Diners</label>
                        <input className="form-control mb-3" type="number" placeholder="No. of Diners" min="1" max="10" id="guests" onChange={(e) => setDinerNumber(e.target.value)} required/>
                    </div>
                    <div className="mb-5">
                        <label htmlFor="dine-time">Select Dine Time</label>
                        <select className="form-select" id="dine-time" onChange={(e) => setDineTime(e.target.value)} required>
                            <option value="">Select time</option>
                            <option value="5">5:00 pm</option>
                            <option value="6">6:00 pm</option>
                            <option value="7">7:00 pm</option>
                            <option value="8">8:00 pm</option>
                            <option value="9">9:00 pm</option>
                            <option value="10">10:00 pm</option>
                        </select>
                    </div>
                </div>
                <button type="Submit">Reserve a Table</button>
            </div>
        </form>
    );
}

export default Reservations;