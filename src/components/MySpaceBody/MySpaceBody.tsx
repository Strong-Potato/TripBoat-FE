import {useState} from 'react';

import styles from './MySpaceBody.module.scss';

import MySpaceList from './MySpaceList/MySpaceList';
import Tab from './Tab/Tab';

function MySpaceBody() {
  const [tab, setTab] = useState<string>('upcoming');

  return (
    <section className={styles.container}>
      <Tab tab={tab} setTab={setTab} />

      <MySpaceList tab={tab} />
    </section>
  );
}

export default MySpaceBody;
