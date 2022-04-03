import "../css/Header.css"
import { FaFacebookSquare, FaTwitterSquare, FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa"
import { NavLink } from "react-router-dom"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Header = () => {


    useEffect(() => {
        const timeline = gsap.timeline({ defaults: {duration: 0.2, }, delay: 0.5})

        timeline.from(".navlink", { opacity: 0, y: -30, stagger: 0.2})
                .from(".contact", {opacity: 0, x: -30, stagger: 0.2})
                .from(".icon", {scale: 0, stagger: 0.2, ease: "elastic" })
    }, [])


    return (
        <div id="sidebar">
            <NavLink className="navlink" exact to="/"><h1>CompWiz</h1></NavLink>
        
            <ul>
                <NavLink className="navlink" activeClassName="active" exact to="/about"><li>About</li></NavLink>
                <NavLink className="navlink" activeClassName="active" exact to="/products"><li>Products</li></NavLink>
                <NavLink className="navlink" activeClassName="active" exact to="/reviews"><li>Reviews</li></NavLink>
            </ul>

            <div id='contact'>
                <div className="contact" id="number">+90 983 457 3853</div>
                <div className="contact" id="email">compwiz@gmail.com</div>
                <div className="contact" id="address">23 Mary Street London UK</div>
                <div className="social">
                    <FaFacebookSquare className="icon"/>
                    <FaTwitterSquare className="icon"/>
                    <FaInstagramSquare className="icon"/>
                    <FaYoutubeSquare className="icon"/>
                </div>
            </div>
          
        </div>
    )
}

export default Header
