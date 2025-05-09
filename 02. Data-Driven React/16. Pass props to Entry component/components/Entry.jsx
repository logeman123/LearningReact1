export default function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={props.image.src} 
                    alt={props.image.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src="../images/marker.png" 
                    alt="map marker icon"
                />
                <span className="country">{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.startDate} - {props.endDate}</p>
                <p className="entry-text">{props.description}</p>
            </div>
            
        </article>
    )
}