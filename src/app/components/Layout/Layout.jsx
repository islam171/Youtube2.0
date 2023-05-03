import Header from './Header/Header'
import Slidebar from './Slidebar/Slidebar'
import styles from './Layout.module.scss'
import Filters from '../../components/Filters/Filters'

const Layout = ({ children }) => {
    return (<div className={styles.Layout}>
        <div className={styles.Layout__header}>
            <Header />
            <div className={styles.Filters}><Filters/></div>
        </div>
        <div className={styles.Layout__saidbar}>
            <Slidebar />
        </div>
        <div className={styles.Layout__main}>{children}</div>
    </div>)
}

export default Layout