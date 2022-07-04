import { useDispatch } from 'react-redux'
import { deleteTask } from '../features/tasks/taskSlice'
import { FaPenSquare } from 'react-icons/fa'
import { IoLocationOutline } from "react-icons/io5"
import { BsCalendarWeek } from "react-icons/bs"
import { IoClose } from 'react-icons/io5'
import { ImClock } from "react-icons/im"

function TaskItem({ task, openModal, style }) {
  const dispatch = useDispatch()
  const options = {
    dateStyle: "medium"
  }
  const createdAt = new Date(task.createdAt).toLocaleString('en-US', options)

  return (
    <div className='task' style={style}>
      <div className="task-header">
        <div className="created-at">{createdAt}</div>
        <div className="buttons">
          <button className="edit" onClick={() => { openModal(task._id) }}><FaPenSquare /></button>
          <button onClick={() => dispatch(deleteTask(task._id))} className='close'>
            <IoClose />
          </button>
        </div>

      </div>

      <div className="desc">{task.text}</div>

      <div className="details">
        {task.deadline && (
          <>
            <div className="small">
              <BsCalendarWeek />
              <div>{new Date(task.deadline).toLocaleString('en-US', options)}</div>
            </div>

            <div className="small">
              <ImClock />
              <div>{new Date(task.deadline).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true })}</div>
            </div>
          </>
        )}

        {task.place && (
          <div className="small">
            <IoLocationOutline />
            <div>{task.place}</div>
          </div>
        )}

        {task.type && (
          <div className="small">
            <div className='type'>{task.type}</div>
          </div>
        )}
      </div>
    </div>

  )
}

export default TaskItem
