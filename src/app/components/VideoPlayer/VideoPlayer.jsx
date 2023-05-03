import styles from './VideoPlayer.module.scss'


const VideoPlayer = () => {
    return (
        <div className={styles.VideoPlayer}>
          <video  controls>
          </video>
        </div>
    )
}


export default VideoPlayer