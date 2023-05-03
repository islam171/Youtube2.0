import styles from './VideoItem.module.scss'
import Icon from './../Icon/IconItem'
import { Link } from 'react-router-dom'

const VideoItem = ({video}) => {
    return (
        <div className={styles.VideoItem}>
            <img src={video.avatar} alt="" />
            <div className={styles.content}>
                <Icon />
                <div>
                    <Link to={`/watch/${video.id}`}><h2>{video.title}</h2></Link>
                    <span>{video.userid}</span>
                </div>

            </div>
        </div>
    )
}


export default VideoItem