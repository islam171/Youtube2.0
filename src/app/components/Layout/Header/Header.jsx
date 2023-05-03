import styles from './Header.module.css'
import Logo from './../../Logo/Logo'
import Burder from './../../Burger/Burger'
import SearchInput from '../../Input/SearchInput'
import ProfileButton from '../../ProfileButton/ProfileButton'

const Header = () => {
    return <>
        <div className={styles.Header}>
            <div className={styles.left}>
                <Burder/>
                <Logo/>
            </div>

            <div className={styles.center}>
                <SearchInput/>
            </div>
            <div className={styles.right}>
                <button name='settings'></button>
                <ProfileButton/>
            </div>
        </div>
    </>
}

export default Header