import "../css/About.css"
import mouse from "../../resources/mouse.jpg"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const About = () => {

    useEffect(() => {
        const timeline = gsap.timeline()

        timeline.from(".about-desc", {scaleY: 0, ease: "back.out(2)"})
                .from("#about img", {opacity: 0})
    })
    return (
        <div id="about">
            <img src={mouse} alt=""/>
            <p className="about-desc">
                At CompWiz we have everything related to tech. From memory dongles to next gen computers. Need a state of the art drone with realtime first person goggles? Yep we got it! How About a camera that can see color of your eyes from the moon? No problem. Check out our products page or visit our store in person to get our amazing deals. Your next gadget is already sitting on our shelf gathering dust so what are you waiting for?
            </p>
        </div>
    )
}

export default About
