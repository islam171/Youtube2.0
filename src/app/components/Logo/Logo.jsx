import styles from './Logo.module.css'
import {Link} from 'react-router-dom'

const Logo = () => {
    return <Link to={'/'}>
        <div className={styles.Logo}>
            Youtube
        </div>
    </Link>
}


export default Logo