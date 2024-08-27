const TodoData = (props) => {


    const { todoList } = props
    console.log(">>> check props", todoList)
    return (
        <div className='list-container'>
            {todoList.map((item, index) => {
                console.log(">>>check map", item, index)
                return (
                    <>
                        <div className="todo-Item">
                            {item.name}
                            <button>delete</button>
                            
                        </div>

                    </>

                )
            })}

            <div>
                {JSON.stringify(props.todoList)}
            </div>

        </div>
    )
}
export default TodoData