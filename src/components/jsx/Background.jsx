import "../css/Background.css"
import { useEffect, useRef } from "react"
import gsap from "gsap"


//import img
import sidebar2 from "../../resources/sidebar2.png"
import sidebar from "../../resources/sidebar.png"

const Background = () => {
    const imgRef = useRef(null)

    useEffect(() => {
        gsap.from(imgRef.current, {scaleX: 0, duration: 0.5, transformOrigin: "left"})
    }, [])
    return (
        <img ref={imgRef} id="background" src={sidebar} alt=""/>
    )
}

export default Background
