const Todonew = (props) => {
    console.log(">>>check point", props)

    const { addNewTodo } = props
    // addNewTodo("Hoang Tien Dat")

    const handleClick = () => {
        alert("Click me")
    }
    const handleOnChange = (name) => {
        console.log(">>>>HandleOnchange",name)
    }
    return (
        <div className='todo-form'>
            <input type="text"
                onChange={(event) => {handleOnChange(event.target.value)}}
                />
            <button style={{ cursor: "pointer" }}
                onClick = {handleClick}
            >Add</button>
        </div>
    )
}
export default Todonew