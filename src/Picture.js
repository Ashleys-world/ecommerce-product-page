import React, { useState } from 'react'
import image1 from './image-product-1.jpg'
import image2 from './image-product-2.jpg'
import image3 from './image-product-3.jpg'
import image4 from './image-product-4.jpg'
import thumb1 from './image-product-1-thumbnail.jpg'
import thumb2 from './image-product-2-thumbnail.jpg'
import thumb3 from './image-product-3-thumbnail.jpg'
import thumb4 from './image-product-4-thumbnail.jpg'

export default function Picture() {

  const [count, setCount] = useState(1)

    function one(){
        setCount(prevCount =>( 
            prevCount = 1)) 
    }
    function two(){
        setCount(prevCount =>( 
            prevCount = 2)) 
    }
    function three(){
        setCount(prevCount =>( 
            prevCount = 3)) 
    }
    function four(){
        setCount(prevCount =>( 
            prevCount = 4)) 
    }

  return (
    <div className="lg:ml-12 lg:pl-12 lg:mt-10 mx-0 "> {/*picture container*/}
        <img src={count === 1 ? image1 : 
                  count === 2 ? image2 :
                  count === 3 ? image3 : image4
                } 
          className="lg:w-80 lg:ml-12 lg:rounded-md xl:w-96" alt="" />
        <div className="lg:grid grid-cols-4 md:gap-x-7 lg:gap-x-0  ml-5 mt-1 hidden pt-5 pb-5 pl-6 pr-5 "> {/*thumbnails row*/}
            <img onClick={one} src={thumb1} className="lg:w-16 rounded-md lg:hover:w-20" alt="" />
            <img onClick={two} src={thumb2} className="lg:w-16 rounded-md lg:hover:w-20" alt="" />
            <img onClick={three} src={thumb3} className="lg:w-16 rounded-md lg:hover:w-20" alt="" />
            <img onClick={four} src={thumb4} className="lg:w-16 rounded-md lg:hover:w-20" alt="" />
        </div>          
    </div>
  )
}
