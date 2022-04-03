import "../css/Products.css"
import mic from "../../resources/mic.jpg"
import headphones from "../../resources/headphones.jpg"
import router from "../../resources/router.jpg"
import stand from "../../resources/stand.jpg"

import Card from "./Card"

let items = {
    mic:  {
        name: "rode mic",
        img: mic,
        was: 299,
        now: 199
    },
    headphones: {
        name: "bose headphones",
        img: headphones,
        was: 499,
        now: 399
    },
    router: {
        name: "tp link router",
        img: router,
        was: 99,
        now: 49
    },
    stand: {
        name: "camera stand",
        img: stand,
        was: 349,
        now: 299
    }


}



const Products = () => {

  
    return (
        <div id="products">
          <Card data={items.mic}/>
          <Card data={items.headphones}/>
          <Card data={items.router}/>
          <Card data={items.stand}/>
        </div>
    )
}

export default Products
