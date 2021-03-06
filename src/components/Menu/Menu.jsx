//libraries
import { useContext } from 'react'
import Switch from "react-switch"
import PropTypes from 'prop-types'
//images
import defaultImg from '../../static/default-img.jpg'
//components
import Loader from '../Common/Loader/Loader'
import Card from '../Common/Cards/Card'
import MenuModal from './Modal/MenuModal'
import './Menu.scss'
//custom hooks
import UserContext from '../../context/UserContext/UserContext'
import { capitalize } from '../../helpers/helpers'

const Menu = ({ franch = true, branch }) => {
  const { dishes, switchDishStatus, noFranchise, categories } = useContext(UserContext)

  // Define the branch to not franchises restaurants
  if (branch === undefined) branch = noFranchise()

  // Which are the current dishes
  const currentDishes = Object.keys(dishes).length !== 0 ? Object.values(dishes[branch.id]) : undefined

  // Is charging
  if (!currentDishes || !categories) return <Loader />

  //Component
  return <>
    {!!franch &&
      <div className='menuList__header'>
        <h1 className='menuList__header__title'>{branch.name}</h1>
        <button className='menuList__header__button'>Settings</button>
      </div>}
    <Card title='Menu'>
      <div className="menuList">
        {currentDishes.map((dish) =>
          <details key={dish.id} className='menuList__dish'>
            <summary className='menuList__dish__info'>
              <span className='menuList__dish__name'>{dish.name}</span>
              <div className="menuList__dish__options">
                <Switch
                  onChange={() => switchDishStatus(dish.id, branch.id)}
                  checked={dishes[branch.id][dish.id].isActive}
                  onColor="#ff3229"
                  onHandleColor="#ff3229"
                  handleDiameter={20}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 4px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={15}
                  width={32}
                  className="react-switch"
                  id={String(dish.id)}
                />
                <MenuModal action={'Edit'} dish={dish} branch={branch} />
                {/* <i className="menuList__dish__close material-icons" onClick={() => deleteDish(branch.id, dish.id)}>close</i> */}
              </div>

            </summary>
            <div className='menuList__dish__desc'>
              <img className='menuList__dish__desc__img' src={dish.pathImage || defaultImg} alt='img' />
              <div className='menuList__dish__desc__section'>
                <p className='menuList__dish__desc__text'><span>Price:</span> ${dish.price.toLocaleString('en-US')}</p>
                <p className='menuList__dish__desc__text'>
                  <span> Category:</span> {categories.filter(c => +c.id === +dish.dishCategoryId)[0].name}
                </p>
                {(dish.caloriesMinimun || dish.caloriesMaximun)
                  ? <p className='menuList__dish__desc__text'><span>Calories: </span>{dish.caloriesMinimun || ' '} - {dish.caloriesMaximun || ' '}</p>
                  : ''}
                <h4 className='menuList__dish__desc__subtitle'><span>Description:</span></h4>
                <p className="menuList__dish__desc__ingredients">
                  <span>{capitalize(dish.description)}</span>
                </p>

              </div>
            </div>
          </details>)}

        <MenuModal action={"Add Dish"} branch={branch} />
      </div>
    </Card>
  </>
}

Menu.propTypes = {
  /**Is the restaurant a franchise? */
  franch: PropTypes.bool,
  /**The branch we want to show */
  branch: PropTypes.object
}

export default Menu
