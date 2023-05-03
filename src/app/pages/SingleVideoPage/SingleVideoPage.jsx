import styles from './SingleVideoPage.module.scss'
import VideoPlayer from './../../components/VideoPlayer/VideoPlayer'
import { useDispatch, useSelector } from 'react-redux'
import VideoItemV2 from './../../components/VideoItemV2/VideoItemV2'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const SingleVideoPage = () => {

    const dispatch = useDispatch()
    const [video, setVideo] = useState({})

    const {videoId} = useParams()

    useEffect(() => {axios.get(`https://64324c8e3e05ff8b3723d04b.mockapi.io/api/v1/posts/${videoId}`).then((res) => setVideo(res.data))}, [])

    const likes = useSelector(state => state.likes)
    const dislikes = useSelector(state => state.dislikes)
    const videos = useSelector(state => state.videos) 

    const like = () => {
        dispatch({type:'LIKE_INC', payload: 1})
    }

    const dislike = () => {
        dispatch({type:'DISLIKE_INC', payload: 1})
        
    }


    return (<div className={styles.SingleVideoPage}>
        <div className={styles.left}>
            <div className={styles.videoplayer}><VideoPlayer/></div>
            <div className={styles.description}>
                <h1>{video && video.title}</h1>
                <div className={styles.panel}>
                    <div className={styles.panel__channel}>
                        <div className={styles.panel__logo}><img src={video.avatar} alt="" /></div>
                        <div className={styles.channel}>
                            <h2>Channel Name</h2>
                            <p>1.27 million subscribers</p>
                        </div>
                        <button className={styles.Subbutton}>Subscribers</button>
                    </div>
                    <div className={styles.panel__button}>
                        <button className={styles.Button} onClick={like}>like {likes}</button>
                        <button className={styles.Button} onClick={dislike}>dislike {dislikes}</button>
                        <button className={styles.Button}>share</button>
                        <button className={styles.Button}>Save</button>
                        <button className={styles.Button}>...</button>
                    </div>
                </div>
                <div className={styles.other}>
                    <h4>285 248 просмотров  2 авг. 2022 г.  Learn X in Y Minutes</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                </div>
            </div>
            <div className={styles.comments}></div>
        </div>
        <div className={styles.VideoSidebar}>

                {videos && videos.map(video =>(
                    <VideoItemV2 video={video} key={video.id}/>
                ))}

        </div>
        </div>
    )
}

export default SingleVideoPage