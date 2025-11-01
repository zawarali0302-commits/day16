import { useState } from "react"
import CardComponent from "./CardComponent"
import type { CardType } from "../types/CardType"
interface CartComponentProps {
  items: CardType[];
}
const CartComponent = ({ items }: CartComponentProps) => {
  const [count, setCount] = useState<number>(0)
  const [bill, setBill] = useState<number>(0)
  const handleAddToCart = (price:number) => {
    setCount((prev) => prev + 1)
    setBill((prev) => prev +  price)
  }
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-between">
        <h1>Top Deals</h1>
        <h1>Count: {count} , Bill:Rs {bill}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2">
        {items.map((c) =>
        <div key={c.id}><CardComponent card={c} onClickEvent={()=>handleAddToCart(c.price)} /></div>
      )}
      </div>

    </div>
  )
}

export default CartComponent
