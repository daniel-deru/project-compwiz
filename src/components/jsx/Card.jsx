import "../css/Card.css"

const Card = ({ data }) => {
    // console.log(mic)
    return (
        <div className="card-outer">
            <div className="card">
                <div className="desc">{data.name}</div>
                <img src={data.img} alt=""/>
                <div className="was"> was: {data.was}</div>
                <div className="now">
                    <span> now: {data.now}</span>
                </div>
                
            </div>
          
           
        </div>
    )
}

export default Card
