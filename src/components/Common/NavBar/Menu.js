import { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import UserContext from '../../../context/UserContext/UserContext'
import './menu.scss'

const Menu = ({ menuToggle, setMenuToggle }) => {

  const { logOut } = useContext(UserContext)

  const links = [
    { id: '1', name: 'Profile', path: '/profile', icon: 'person' },
    { id: '2', name: 'Dashboard', path: '/dashboard', icon: 'view_quilt' },
    { id: '3', name: 'Reservations', path: '/reservations', icon: 'chrome_reader_mode' },
    { id: '4', name: 'Configuration', path: '/config', icon: 'settings' }
  ]

  //! Close menu with scrolling or click
  useEffect(() => {
    const changeToggle = () => setMenuToggle(!menuToggle)
    if (menuToggle) {
      document.addEventListener('scroll', changeToggle)
      document.addEventListener('click', changeToggle)
    }
    return () => {
      if (!!document.getElementById('Menu')) {
        document.removeEventListener('click', changeToggle)
        document.removeEventListener('scroll', changeToggle)
      }
    }

  }, [menuToggle, setMenuToggle])


  //! Manage the LogOut button
  useEffect(() => {
    const toggleLogOut = e => {
      e.stopPropagation()
      logOut()
      setMenuToggle(!menuToggle)
    }
    if (menuToggle) document.getElementById('LogOut').addEventListener('click', toggleLogOut)
    return () => {
      if (!!document.getElementById('LogOut')) {
        document.getElementById('LogOut').removeEventListener('click', toggleLogOut)
      }
    }
  }, [menuToggle, setMenuToggle, logOut])


  return (
    <div id='Menu' className={`menu ${menuToggle ? '--active' : ''}`}>
      <ul className='menu__list'>
        {links.map(link =>
          <NavLink exact key={link.id}
            to={link.path}
            activeClassName='--active'
            className='menu__list__item hvr-bg-to-right'
          >
            <i className="menu__list__item__icon material-icons">{link.icon}</i>
            <p className='menu__list__item__title'>{link.name}</p>
          </NavLink>
        )}
        <li id='LogOut' className='menu__list__item hvr-bg-to-right'>
          <i className="menu__list__item__icon material-icons">exit_to_app</i>
          <p className='menu__list__item__title'>Log Out</p>
        </li>
      </ul>
    </div>
  )
}

export default Menu