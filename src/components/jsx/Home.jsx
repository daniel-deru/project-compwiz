import "../css/Home.css"
import computer from "../../resources/computer.jpg"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Home = () => {

    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { duration: 0.4}, delay: 2.5})

        timeline.from("span", {scale: 0, rotateX: 360, stagger: 0.2})
                .from("#home-background", { opacity: 0, duration: 5 })
    }, [])
    return (
        <div id="home">
            <h1>
                <span className="slogan">The</span>
                <span className="slogan">one</span>
                <span className="slogan">stop</span>
                <span className="slogan">shop</span>
                <br/>
                <span className="slogan">for</span>
                <span className="slogan">all</span>
                <span className="slogan">your</span>
                <br/>
                <span className="slogan">technology</span>
                <span className="slogan">needs</span>
            </h1>
        
            <img id="home-background" src={computer} alt=""/>
           
          
        </div>
    )
}

export default Home
