import styles from './Filters.module.css'
import FilterItem from './../FilterItem/FilterItem'

const Filters = () => {
    return <>
        <div className={styles.Filters}>
            <FilterItem title={'All'}/>
            <FilterItem title={'Videogame'}/>
            <FilterItem title={'Music'}/>
            <FilterItem title={'Live'}/>
        </div>
    </>
}

export default Filters