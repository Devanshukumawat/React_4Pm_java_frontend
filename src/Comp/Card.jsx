import Cardcss from "./card.module.css"
import FireImage from "./media/fire.jpg"

console.log(Cardcss)

function Card(props){
    const {title} = props
    return(
        <>  
            <div className={Cardcss.main}>
                <img src={FireImage} alt="" className={Cardcss.img}/>
                <h1 className={Cardcss.heading}>{title} 👤</h1>
                <h3 className={Cardcss.heading3}>Web Developer</h3>
                <button className={Cardcss.btn}>More Info</button>
                <button className="btn btn-danger form-control mt-1 mb-1">Login</button>
            </div>
        </>
    )
}

export default Card;