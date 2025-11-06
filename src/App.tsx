
import './App.css'
import CartComponent from './components/CartComponent'
import type { CardType } from './types/CardType'


const item: CardType[] = [{
    id: 1,
    pic: "https://placehold.co/400",
    title: "Value Bucket",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, et?",
    price: 2050,
},{
    id: 2,
    pic: "https://placehold.co/400",
    title: "Family Festival 3",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. At ipsa fugiat est aliquid voluptatibus molestiae animi similique repellat natus blanditiis.",
    price: 2590,
},{
    id: 3,
    pic: "https://placehold.co/400",
    title: "Xtream Duo Box",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores rem maiores itaque eos provident dignissimos architecto veniam accusamus alias officiis, odit laboriosam ut eius possimus sed tempora eum magni ab!",
    price: 1560,
},{
    id: 4,
    pic: "https://placehold.co/400",
    title: "Crispy Duo Box",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto, similique.",
    price: 1350,
},]


function App() {

  return (
    <>
    <CartComponent items = {item}/>
    </>
  )
}

export default App
