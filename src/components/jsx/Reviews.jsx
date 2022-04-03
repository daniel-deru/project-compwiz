import "../css/Reviews.css"
import { useEffect, useRef } from "react"
import gsap from "gsap"

const Reviews = () => {

    useEffect(() => {
        gsap.from("blockquote", { rotateZ: -90, transformOrigin: "left", opacity: 0, stagger: 0.4})
    }, [])
    return (
        <div id="reviews">
            <blockquote>
                outstanding customer service in person and on the phone
                <figcaption>
                    Martha Bland ~ 12/03/20
                </figcaption>
            </blockquote>
            <blockquote>
                great prices on all their gadgets. 
                <figcaption>
                    John Kale ~ 26/10/19
                </figcaption>
            </blockquote>
            <blockquote>
                awesome gear and even if they don't have something in stock, they can easily get it.
                <figcaption>
                    Mark Ether ~ 15/06/21
                </figcaption>
            </blockquote>
            <blockquote>
                Amazing customer service and the shop assistants are very friendly and knowledgeable about technology.
                <figcaption>
                    Sammy Mcintosh ~ 25/09/18
                </figcaption>
            </blockquote>
            
        </div>
    )
}

export default Reviews
