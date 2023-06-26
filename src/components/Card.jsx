import '../style.css';
import fuji from '../assets/fuji.png'
import sydney from '../assets/sydney.png'
import geirangerfjord from '../assets/geirangerfjord.png'
import location_icon from '../assets/location.svg'

export default function Card(props){
    // REMOVE HARDCODED IMG SRC
    let image           
    if(props.item.imgSrc === "fuji"){       
        image = fuji
    }
    else if(props.item.imgSrc === "sydney"){
        image = sydney
    }
    else image = geirangerfjord
    // --------------------------------

    return(
        <div className='card'>
            <img className='card-img' src={image} alt="location site" />

            <div className="card-content">
                <div className='card-location'>
                    <img src={location_icon} className="card-location-icon" alt="" />
                    <h3 className='location-country'>{props.item.location.toUpperCase()}</h3>
                    <a className='location-link' href={props.item.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className='card-title'>{props.item.title}</h2>
                <div className="card-dates">
                    <p className='from'>{props.item.startDate}</p> - <p className='to'>{props.item.endDate}</p>
                </div>
                <p className='card-description'>{props.item.description}</p>
            </div>
        </div>
    )
}