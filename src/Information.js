import React, { useState } from 'react'

export default function Information() {

    const [count, setCount] = useState(0)

    function remove(){
        setCount(prevCount =>( 
            count === 0 ? prevCount : prevCount - 1)) 
    }

    function add(){
        setCount(prevCount => prevCount + 1) 
    }

  return (
        <div className="lg:mt-10 px-4" > {/*discription container*/}
          <h1 className="mt-10 text-sm font-bold text-orange-500 font-sans">SNEAKER COMPANY</h1>
          <h1 className="text-2xl font-bold mt-4">Fall limited edition sneakers</h1>
          <p className="mt-4 text-sm text-gray-500">these low profile sneakers are your perfect casual wear <br/>
            companion . Featuring a durable rubber outer sole. they'll<br/>
            withstand everything the weather can offer
          </p>
          <div className="flex flex-row">{/*price and discount*/}
            <p className="text-xl font-bold mt-3">$125.00</p>
            <p className="text-sm mt-4 ml-5 text-orange-500 font-bold">50%</p>
          </div>
          <p className="text-sm mt-2 text-gray-500 font-bold line-through ">$250.00</p>
          <div className="flex lg:flex-row flex-col content-center lg:mt-3 ml-0">{/*buttons*/}
            <div className="flex flex-row content-center mt-7 lg:ml-3 space-x-32 lg:space-x-0
            md:space-x-72 md:ml-2">
              <button onClick={remove} className="rounded border-2 mr-1 h-10 w-12 font-bold text-orange-500">-</button>
              <p className="mx-1 px-3 pt-2 font-bold">{count}</p>
              <button onClick={add} className="rounded border-2 mx-1 h-10 w-12 font-bold text-orange-500">+</button>
            </div>           
            <button className="rounded-md border-2 h-10 lg:ml-2 lg:px-8 lg:mt-7 mt-8 font-bold bg-orange-500 text-white
             lg:mb-0 mb-10 px-15">Add to cart</button>
          </div>
        </div>

  )
}
