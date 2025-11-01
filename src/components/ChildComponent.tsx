import { useState } from "react"

interface ChildComponentProps {
    onIncrementEvent: () => void;
    cornerCount: number;
}
const ChildComponent = ({ onIncrementEvent, cornerCount }: ChildComponentProps) => {
    const [count, setCount] = useState<number>(0)

    const incFunc = () => {
        setCount((prev) => prev + 1)
        onIncrementEvent()
    }


    return (
        <div className="flex flex-col items-center m-2 w-32 rounded border p-2 gap-2 relative">
            <h1>{count}</h1>
            <h1 className="absolute top-0 right-0 text-sm">{cornerCount}</h1>
            <button onClick={incFunc} className="bg-blue-500 p-2 rounded-2xl">Increment</button>
        </div>
    )
}

export default ChildComponent
