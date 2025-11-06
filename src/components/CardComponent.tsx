import { useState } from "react";
import type { CardType } from "../types/CardType";

interface CardComponentProps {
    onClickEvent: () => void;
    card: CardType;
}

const CardComponent = ({ onClickEvent, card }: CardComponentProps) => {
    const [wish, setWish] = useState<boolean>(false)

    return (
        <div className=" flex flex-col shadow rounded-2xl gap-2 p-2 relative">
            <img className="p-2 object-cover hover:scale-110" src={card.pic} alt="" width={400} height={400} />
            <h1 className="text-2xl font-bold">{card.title}</h1>
            <p className="line-clamp-2">{card.description}</p>
            <h1 className="text-2xl font-bold">Rs {card.price}</h1>
            <div className="flex justify-center" ><button onClick={() => onClickEvent()} className=" bg-red-500 rounded p-2 -mb-7 hover:bg-white border-2 border-red-500 text-white hover:text-red-500 cursor-pointer  ">+ADD TO BUCKET</button></div>
            <div onClick={() => setWish(!wish)} className="absolute right-0 cursor-pointer">
                {wish? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>:
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="red" className="size-6">
                <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>}
            </div>

        </div>
    )
}

export default CardComponent
