import styles from './styles.css';

import helpIcon from '../../assets/help.svg';
import hiddenEyeIcon from '../../assets/hiddenEye.svg';
import notificationIcon from '../../assets/notification.svg';
import userDefaultIcon from '../../assets/userIconDeafult.svg';

import userPerfilExample from '../../assets/userPerfilExample.jpg';

export const Header = () => {

  const user = {
    name: 'Gustavo',
    photo: userPerfilExample
  };

  return (
    <header className='container'>
      <div className='content'>
        {user.photo ?
          <img src={user.photo} className='userPhoto' />
        :
          <img src={userDefaultIcon} className='userPhotoDefault' />
        }
        <div className='menu'>
          <img className='icon' onClick={() => console.log('click 1')} src={hiddenEyeIcon}/>
          <img className='icon' onClick={() => console.log('click 2')} src={helpIcon}/>
          <img className='icon' onClick={() => console.log('click 3')} src={notificationIcon} />
        </div>
      </div>
      <h1 className='title'>
        Olá, {user.name}
      </h1>
    </header>
  )
};