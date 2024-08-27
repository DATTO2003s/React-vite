const TodoData = (props) => {


    const { todoList } = props
   
    return (
        <div className='list-container'>
            {todoList.map((item, index) => {
                console.log(">>>check map", item, index)
                return (
                    <>
                        <div className={`todo-Item ${index}`} key={item.id}>
                            {item.name}
                            <button>delete</button>
                            
                        </div>

                    </>

                )
            })}


        </div>
    )
}
export default TodoData