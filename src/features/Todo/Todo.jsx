import { useDispatch, useSelector } from "react-redux";
import { addTodo, changeEditId, changeValue, deleteTodo, editTodo } from "./TodoSlice";

const Todo = () => {
    const dispatch = useDispatch()
    const { value, todoList, editId, del } = useSelector(state => state.todos)
    return (
        <div>
            <input type="text" value={value} onChange={(e) => {
                dispatch(changeValue(e.target.value))
            }} />
            <button onClick={() => {
                if (!editId && value.trim()) {
                    dispatch(addTodo(value))
                } else if (value.trim()) {
                    dispatch(editTodo({ editId, value }))
                }
                dispatch(changeValue(""))
                dispatch(changeEditId(null))
            }} style={{
                height: '33px',
                height: '34px',
                width: '50px',
                borderRadius: '3px',
                background: '#de65f3'
            }}>{!editId ? 'Add' : 'Edit'}</button>
            {
                todoList?.map(({ id, element }) => {
                    return (
                        <div key={id}
                            style={{
                                background: '#e1dcdc',
                                borderRadius: '2px',
                                width: '30%',
                                height: ' 37px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-around',
                                margin: 'auto',
                                marginTop: '12px',
                                gap: '29px'
                            }}>
                            {element}
                            <button onClick={() => {
                                dispatch(changeValue(element))
                                dispatch(changeEditId(id))
                            }}
                                style={{
                                    background: 'aqua',
                                    height: '28px',
                                    width: '10%'
                                }}>Edit</button>
                            <button onClick={() => {
                                dispatch(deleteTodo(id))
                            }}
                                style={{
                                    background: 'aqua',
                                    height: '28px',
                                    width: '15%'
                                }}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Todo;


