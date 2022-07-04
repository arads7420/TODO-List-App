import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateTask } from '../features/tasks/taskSlice'
import {ColorBtn} from '../components/ColorBtn'

const colors = {
    blue: '#d3e9ff',
    red: '#ffd8d4',
    yellow: '#fff1b6',
    green: '#d2ffd3',
    default: '#f4f4f4'
}

function UpdateForm({ closeModal, id }) {
    const task = useSelector((state) => state.tasks.tasks.find((task) => task._id === id))

    const [text, setText] = useState(task.text)
    const [deadline, setDeadline] = useState(task.deadline)
    const [place, setPlace] = useState(task.place)
    const [type, setType] = useState(task.type)
    const [color, setColor] = useState(task.color)

    const dispatch = useDispatch()

    useEffect(() => {
        const setButtonColor = () => {
            let buttons = document.getElementsByClassName('type-button')
            for (let i = 0; i < buttons.length; i++) {
                if (buttons[i].textContent === task.type) {
                    buttons[i].classList.add('clicked')
                    break
                }
            }
        }

        setButtonColor()
    }, [task.type])

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(updateTask({ taskId: task._id, text, deadline, place, type, color }))
        setText('')
        setDeadline('')
        setPlace('')
        setType('')

        closeModal()
    }

    const handleClick = (e) => {
        e.preventDefault()
        setType(e.target.textContent)

        let buttons = document.getElementsByClassName('type-button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('clicked')
        }

        e.target.classList.add('clicked')
    }

    const handleColorClick = (e, value) => {
        setColor(value)

        let buttons = document.getElementsByClassName('color-button')
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('color-clicked')
        }

        e.target.classList.add('color-clicked')
    }

    return (
        <section className='form'>

            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='color'>Color</label>
                    <div className="color-select">
                        <ColorBtn isChecked={true} handleClick={handleColorClick} color={colors.default} />
                        <ColorBtn isChecked={false} handleClick={handleColorClick} color={colors.blue} />
                        <ColorBtn isChecked={false} handleClick={handleColorClick} color={colors.red} />
                        <ColorBtn isChecked={false} handleClick={handleColorClick} color={colors.yellow} />
                        <ColorBtn isChecked={false} handleClick={handleColorClick} color={colors.green} />
                    </div>
                </div>
                <div className='form-group'>
                    <label htmlFor='text'>Task</label>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        placeholder='Add some text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='deadline'>Deadline</label>
                    <input
                        type='datetime-local'
                        name='deadline'
                        id='deadline'
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='place'>Place</label>
                    <input
                        type='text'
                        name='place'
                        id='place'
                        value={place}
                        placeholder='Add a place'
                        onChange={(e) => setPlace(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <label>Task Type</label>
                    <div className="type-select">
                        <button onClick={handleClick} className="type-button">Basic</button>
                        <button onClick={handleClick} className="type-button ">Urgent</button>
                        <button onClick={handleClick} className="type-button ">Important</button>
                    </div>
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Save
                    </button>
                </div>
            </form>
        </section>
    )
}

export default UpdateForm
