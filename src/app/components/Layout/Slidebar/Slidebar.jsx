import styles from './Sidebar.module.css'
import NavItem from '../../NavItem/NavItem'
import { Link } from 'react-router-dom'

const Slidebar = () => {
    return <div className={styles.Slidebar}>
        <div className={styles.menu}>
            <div className={styles.section}>
                <Link to={'/'}><NavItem title={'Home'}/></Link>
                <NavItem title={'Navigation'}/>
                <NavItem title={'Sorts'}/>
                <NavItem title={'Subscribers'}/>
            </div>
            <div className={styles.section}>
                <NavItem title={'Library'}/>
                <NavItem title={'History'}/>
            </div>
            <div className={styles.section}>

            </div>
        </div>

    </div>
}

export default Slidebar