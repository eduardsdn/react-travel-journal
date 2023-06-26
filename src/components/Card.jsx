import '../style.css';
import fuji from '../assets/fuji.png'
import location_icon from '../assets/location.svg'

export default function Card(){
    return(
        <div className='card'>
            <img className='card-img' src={fuji} alt="location site" />

            <div className="card-content">
                <div className='card-location'>
                    <img src={location_icon} className="card-location-icon" alt="" />
                    <h3 className='location-country'>JAPAN</h3>
                    <a className='location-link' href="https://www.google.com/maps/place/%D0%A4%D1%83%D0%B4%D0%B7%D0%B8%D1%8F%D0%BC%D0%B0/@35.3606246,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">
                        View on Google Maps
                    </a>
                </div>
                <h2 className='card-title'>Mount Fuji</h2>
                <div className="card-dates">
                    <p className='from'>12 Jan, 2021</p> - <p className='to'>24 Jan, 2021</p>
                </div>
                <p className='card-description'>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
            </div>
        </div>
    )
}