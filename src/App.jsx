import { useState ,useEffect} from 'react'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Details from './pages/details/Details';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { useDispatch,useSelector} from 'react-redux';
import useConfig from './hooks/useConfig';
import { getUrl,getScrollState,getScrollTop} from './store/homeslice.js';
import ContentWrapper from './components/contentwrapper/ContentWrapper';
import useFetch from './hooks/useFetch.js';
import Search from './pages/search/Search.jsx';
import { useRef } from 'react';
function App() {
  const {configurl}=useConfig();
const ref=useRef();
const dispatch=useDispatch();
const scrolltop=useSelector((state)=>state?.home?.scrolltop)
//console.log('url',url)


useEffect(()=>{
  if(configurl!==undefined&&configurl!==null){
    console.log('config',configurl)
    dispatch(getUrl(configurl));
  }
},[configurl])

useEffect(()=>{
  if(scrolltop){
    const container=ref.current;
    console.log('container',container)
    if(container){
      console.log('scrolltop',scrolltop)
     // container.scrollIntoView({behavior:'smooth'})
     container.scrollTop=0;
   // container.scrollIntoView({ behavior: 'smooth' }); 
        dispatch(getScrollTop(false))
    }
  }
},[scrolltop])

useEffect(()=>{
const container=ref.current;

  const handlescroll=()=>{
    if(container){
      const {scrollHeight,scrollTop,clientHeight}=container
   
   
     // console.log('scrollHeight,scrollTop,clientHight',scrollHeight,scrollTop,clientHeight)
      if(scrollHeight-(scrollTop+clientHeight)<5){
        console.log('i am nearly touched')
        dispatch(getScrollState(true));
      }
      else{
        dispatch(getScrollState(false));
      }
    }  
  }
  container.addEventListener('scroll',handlescroll);
  return()=>{
container.removeEventListener('scroll',handlescroll);
  }
},[])

  return (
    <>
    
    <BrowserRouter>
    <Navbar/>
    <div id="main" ref={ref}>
      <ContentWrapper>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/details/:media_type/:media_id' element={<Details/>}></Route>
      <Route path='/search/:query' element={<Search/>}></Route>
    </Routes>
    </ContentWrapper>
    <Footer/>
    </div>
    </BrowserRouter>
    </>
  )
}

export default App
