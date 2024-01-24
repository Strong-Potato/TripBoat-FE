import {AiOutlineBell} from 'react-icons/ai';
import {IoSearchSharp} from 'react-icons/io5';
import {Link} from 'react-router-dom';

import styles from './TabBar.module.scss';

function TabBar() {
  const news = localStorage.getItem('news');

  return (
    <div className={styles.container}>
      <div className={styles.icons}>
        <Link to='/home/search'>
          <IoSearchSharp />
        </Link>
        <Link to='/alarm' className={styles.icons__wrapper}>
          <AiOutlineBell />
          {news && <div className={styles.icons__wrapper__eclips} />}
        </Link>
      </div>
    </div>
  );
}

export default TabBar;
