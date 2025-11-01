import { useState } from "react"
import ChildComponent from "./ChildComponent"
import type { CounterType } from "../types/CounterType"
interface ParentComponentProps {
    counters: CounterType[];
}
const ParentComponent = ({ counters }: ParentComponentProps) => {
    const [Count, setCount] = useState<number>(0)
    const handleIncrement = () => {
        setCount((prev) => prev + 1)
    }
    return (
        <div className="flex flex-col gap-4 items-center justify-center">
            <h1>{Count}</h1>
            <div className="flex">
                {counters.map((c) =>
                    <div key={c.id}><ChildComponent onIncrementEvent={handleIncrement} cornerCount={Count} /></div>
                )}
            </div>
        </div>
    )
}

export default ParentComponent
