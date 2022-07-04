import { FaSignOutAlt } from 'react-icons/fa'
import { HiOutlineUser } from "react-icons/hi";
import { CgLogIn } from "react-icons/cg";
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>TODO List</Link>
      </div>
      <ul>
        {user ? (
          <li>
            <button className='btn btn-logout' onClick={onLogout}>
              <FaSignOutAlt />
            </button>
          </li>
        ) : (
          <>
            <li>
              <Link to='/login'>
                <CgLogIn /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <HiOutlineUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  )
}

export default Header
