import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import TaskForm from '../components/TaskForm'
import TaskItem from '../components/TaskItem'
import UpdateForm from '../components/UpdateForm'
import { Modal } from '../components/Modal'
import Spinner from '../components/Spinner'
import { getTasks } from '../features/tasks/taskSlice'
import { FaPlus } from 'react-icons/fa'

function Dashboard() {
  const [searchtext, setSeachText] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [openupdatemodal, setOpenUpdateModal] = useState({
    isOpen: false,
    id: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { tasks, isLoading, isError, message } = useSelector(
    (state) => state.tasks
  )

  let orderedTasks
  if(searchtext === '') {
    orderedTasks = tasks.slice()
  }
  else {
    orderedTasks = tasks.slice().filter((task) => 
      task.text.toLowerCase().startsWith(searchtext.toLowerCase())
    )
  }

  orderedTasks = orderedTasks.sort((a, b) => b.createdAt.localeCompare(a.createdAt))

  useEffect(() => {
    if (!user) {
      navigate('/login')
    }

    dispatch(getTasks())
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  const handleUpdateModal = (id) => {
    setOpenUpdateModal({
      isOpen: true,
      id: id
    })
  }

  return (
    <>
      <div className="content">
        <div className="searchbar">

          <input
            type='text'
            placeholder='Search for a task...'
            value={searchtext}
            onChange={(e) => { setSeachText(e.target.value) }}
          />

        </div>
        <button className='btn btn-block' onClick={() => { setOpenModal(true) }}>
          <FaPlus /> Add a Task
        </button>
      </div>
      <section className='content'>
        {orderedTasks.length > 0 ? (
          <div className='tasks'>
            {orderedTasks.map((task) => (
              <TaskItem 
              openModal={(id) => {handleUpdateModal(id)}} 
              key={task._id} 
              task={task}  
              style={{backgroundColor: task.color}}
              />
            ))}
          </div>
        ) : (
          <h3>No tasks found</h3>
        )}
      </section>
      {openModal && <Modal
        component={<TaskForm closeModal={() => { setOpenModal(false) }} />}
        closeModal={() => { setOpenModal(false) }}
        title={"Add a New Task"}
      />}
      
      {openupdatemodal.isOpen && <Modal
        component={<UpdateForm id={openupdatemodal.id} closeModal={() => { setOpenUpdateModal({
          isOpen: false,
          id: ''
        }) }} />}
        closeModal={() => { setOpenUpdateModal(false) }}
        title={"Update Task"}
      />}
    </>
  )
}

export default Dashboard
