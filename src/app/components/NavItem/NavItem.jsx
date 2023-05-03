import styles from './NavItem.module.css'
import IconItem from '../Icon/IconItem'


const NavItem = ({title}) => {
    return <>
        <div className={styles.NavItem}>
            <IconItem/>
            <div>{title}</div>
        </div>
    </>
}

export default NavItem