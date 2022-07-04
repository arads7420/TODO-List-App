import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTask } from '../features/tasks/taskSlice'
import { FaPlus } from 'react-icons/fa'
import { ColorBtn } from '../components/ColorBtn'

const colors = {
  blue: '#d3e9ff',
  red: '#ffd8d4',
  yellow: '#fff1b6',
  green: '#d2ffd3',
  default: '#f4f4f4'
}

function TaskForm({ closeModal }) {
  const [text, setText] = useState('')
  const [deadline, setDeadline] = useState('')
  const [place, setPlace] = useState('')
  const [type, setType] = useState('')
  const [color, setColor] = useState(colors.default)

  const dispatch = useDispatch()


  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createTask({
      text,
      deadline,
      place,
      type,
      color
    }))

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
            required
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
            placeholder='Add a place'
            value={place}
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
        <div className='btn-container'>
          <button className='btn btn-block' type='submit'>
            <FaPlus /> Add Task
          </button>
        </div>
      </form>
    </section>
  )
}

export default TaskForm
