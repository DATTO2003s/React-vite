const TodoData = (props) => {
    console.log(">>> check props", props)
    //props la Objects
    // {
    //     name : "Hoang Tien Dat",
    //     age : 25,
    //     data: {}
    // }
    const { name, age, data:{address,country} ,addNewTodoFunct} = props
    return (
        <div className='list-container'>
            {addNewTodoFunct}
            <div className='list-info'>
                learn react
            </div>
            <div>
                {JSON.stringify(props.todoList)}
            </div>
            
        </div>
    )
}
export default TodoData