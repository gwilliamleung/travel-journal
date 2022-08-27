export default function Card(props){
    console.log(props)
    return (
        <div className="card">
            <img className="image" src={props.item.image}/>
            <h2 className="location">{props.item.location}</h2>
            <span className="gMap">View on Google Maps</span>
            <div className="middle">
                <h1 className="attraction">{props.item.attraction}</h1>
                <p className="date">{props.item.date}</p>
                </div>
            <p className="description">{props.item.description}</p>
        </div>
    )
}