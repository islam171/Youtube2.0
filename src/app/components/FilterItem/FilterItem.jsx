import styles from './FilterItem.module.css'

const FilterItem = ({title}) => {
    return <>
        <div className={styles.FilterItem}>
            {title}
        </div>
    </>
}

export default FilterItem