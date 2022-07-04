import axios from 'axios'

const API_URL = '/api/tasks/'

// Create new task
const createTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, taskData, config)

  return response.data
}

// Get user tasks
const getTasks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user task
const deleteTask = async (taskId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + taskId, config)

  return response.data
}

// Update user task
const updateTask = async (taskData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
  const { taskId } = taskData
  const data = {
    text: taskData.text,
    deadline: taskData.deadline,
    place: taskData.place,
    type: taskData.type,
    color: taskData.color,
  }

  const response = await axios.put(API_URL + taskId, data, config)

  return response.data
}

const taskService = {
  createTask,
  getTasks,
  deleteTask,
  updateTask
}

export default taskService
