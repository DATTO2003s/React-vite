import { useState } from "react"

const Todonew = (props) => {

    //useState hook
    // const valueInput = "Dat"
    const [valueInput, setValueInput] = useState("Erik")


    const { addNewTodo } = props
    // addNewTodo("Hoang Tien Dat")

    const handleClick = () => {
        console.log(">>> Check Value", valueInput)
    }
    const handleOnChange = (name) => {
        setValueInput(name)
    }
    return (
        <div className='todo-form'>
            <input type="text"
                onChange={(event) => { handleOnChange(event.target.value) }}
            />
            <button style={{ cursor: "pointer" }}
                onClick={handleClick}
            >Add</button>
            <div>
                MY tex input is = {valueInput}
            </div>
        </div>
    )
}
export default Todonew