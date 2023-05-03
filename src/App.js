
import './App.css';
import Home from "./app/pages/Home/Home"
import Layout from './app/components/Layout/Layout'
import {Routes, Route} from 'react-router-dom'
import SingleVideoPage from './app/pages/SingleVideoPage/SingleVideoPage'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { loadedVideos, setVideos } from './app/store/actions/videos';
/* import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'; */



function App() {
 /*  const dispatch = useDispatch()

  const cash = useSelector(state => state.cash)
  const [inputValue, setInputValue] = useState(0)

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }
 */


  const dispatch = useDispatch()
  useEffect(() => {axios.get('https://64324c8e3e05ff8b3723d04b.mockapi.io/api/v1/posts')
                    .then((res) => dispatch(setVideos(res.data)))
                    .then(() => dispatch(loadedVideos()))}, [])
  

  return (
    <div className='wrapper'>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/watch/:videoId" element={<SingleVideoPage />}/>
        </Routes>
        
      </Layout>

      {/* {cash}
      <input onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
      <button onClick={() => addCash(inputValue)}>+</button>
      <button onClick={() => getCash(inputValue)}>-</button> */}
    </div>

  )
}

export default App;
