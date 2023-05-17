
import styles from './Home.module.css'
import VideoItem from '../../components/VideoItem/VideoItem'
import { useSelector } from 'react-redux'

const Home = () => {    

    const videos = useSelector(state => state.videosReducers.videos)
    const isLoaded = useSelector(state => state.videosReducers.isLoaded)

    return <>
        <div className={styles.Home}>
       
            <div className={styles.Videos}>
                {isLoaded ? videos.map(video =>(
                    <VideoItem video={video} key={video.id}/>
                )) : <div> Loading... Hello</div>}
                fsdfsd
            </div>
        </div>
    </>
}

export default Home