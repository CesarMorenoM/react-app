import { useContext, useState } from 'react'
//personal
import UserContext from '../../context/UserContext/UserContext'
//images
import defaultImg from '../../static/default-img.jpg'
//components
import BranchesList from '../Common/BranchesList/BranchesList'
import Menu from '../Menu/Menu'
import Card from '../Common/Cards/Card'
import './Branches.scss'

const Branches = () => {
  //Get the branches
  const { branches } = useContext(UserContext)

  const [currentBranch, setCurrentBranch] = useState(branches[0])

  const handleChangeBranch = branch => {
    setCurrentBranch(branch)
  }

  //Component
  return (
    <>
      <div className='branches__list'>
        <BranchesList branches={branches} currentBranch={currentBranch} setBranch={handleChangeBranch} />
      </div>
      <div className='branches__content'>
        <div className='branches__content__info'>
          <Card title='Branch'>
            <div className='branches__content__info__container'>
              <img className='branches__content__info__img' src={currentBranch.image || defaultImg} alt={currentBranch.name} />
              <h2 className='branches__content__info__name'>{currentBranch.name}</h2>
              <p className='branches__content__info__info'>{currentBranch.address}</p>
              <p className='branches__content__info__info'>{currentBranch.phone}</p>
              <button className='branches__content__info__settings'>Settings</button>
            </div>
          </Card>
        </div>
        <div>
          <Menu branch={currentBranch} franch={false} />
        </div>
      </div>
    </>
  )
}

export default Branches
