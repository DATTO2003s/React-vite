const Todonew = (props) => {
    console.log(">>>check point",props)

    const {addNewTodo} = props
    addNewTodo("Hoang Tien Dat")
    return (
        <div className='todo-form'>
            <input type="text"/>
            <button>Add</button>
        </div>
    )
}
export default Todonew