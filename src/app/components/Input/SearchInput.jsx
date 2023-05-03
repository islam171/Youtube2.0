import styles from "./SearchInput.module.css"
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceRoundedIcon from '@mui/icons-material/KeyboardVoiceRounded';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import {useState} from 'react'

const SearchInput = () => {
    
    const [value, setValue] = useState()



    return <>
    
    <div className={styles.SearchInput}>
        <div className={styles.Input}>
            <input type="text" placeholder="Ведите запрос" onChange={(e) => setValue(e.target.value)}/>
            <button><SearchIcon/></button>
            <div className={styles.cleanInput}>{value && <ClearRoundedIcon/>}</div>
            
        </div>
        <div className={styles.voice}><KeyboardVoiceRoundedIcon/></div>
    </div>
    </>
}

export default SearchInput