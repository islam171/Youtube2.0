import styles from './VideoItemV2.module.scss'
import { Link } from 'react-router-dom'

const VideoItem = ({video}) => {
    return (
        <div className={styles.VideoItem}>
            <img src={video.avatar} alt="" />
            <div className={styles.content}>
                <div>
                    <Link to={`/watch/${video.id}`}><h2>{video.title}</h2></Link>
                    <span>{video.userid}</span>
                    <p>146 349 просмотров  22 апр. 2023 г.  React</p>
                </div>
            </div>
        </div>
    )
}


export default VideoItem