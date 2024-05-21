import React from 'react'
import './Navbar.css'
import Searchbar from '../serchbar/Searchbar'
import logo from '../../assets/9ksHG8-LogoMakr.png';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import { useState,useEffect } from 'react';
function Navbar() {
  const [state,setState]=useState();
  const [searchicon,setSearchIcon]=useState();
  const [searchbar,setSearchBar]=useState(false);
  const [showmenu,setShowMenu]=useState(false);
  const handleshow=()=>{
    console.log('i am clicked');
  }
  useEffect(() => {
    if (window.innerWidth <=850) {
      console.log('Window width is less than 720px');
      setState(true);}
     else{
        setState(false); 
      }
      if (window.innerWidth <=500) {
        console.log('Window width is less than 500px');
        setSearchIcon(true);}
       else{
          setSearchIcon(false); 
        }
    const handleResize = () => {
      if (window.innerWidth <=850) {
        console.log('Window width is less than 720px');
        setState(true);
      }
      else{
        setState(false);
      }
      if (window.innerWidth <=500) {
        console.log('Window width is less than 500px');
        setSearchIcon(true);}
       else{
          setSearchIcon(false); 
        }
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
  }
  },[])
  console.log(state);
  
  return (
   <>
   <nav>
    <div id='logo'>
      <img src={logo}></img>
      <h2>MoVIX</h2>
    </div>
    {searchicon!==undefined&&<>{
    searchicon==true?
    <div id='searchicons' >
      <SearchIcon onClick={()=>setSearchBar(!searchbar)} />
      {searchbar==true&&(
        <Searchbar/>
      )
      }
    </div>:<Searchbar/>}
    </>}
   
    {state==true&&(
      <div id='menu'><MenuIcon onClick={()=>setShowMenu(!showmenu)} />
     {showmenu&&<div id='dropdown'>
      <div >Genres</div>
      <div >Upcoming</div>
      <div>Ongoing</div>
      <div >Top Rated</div>
      <div >Login</div>
      </div>}
      </div>
    )}
    {state==false&&(
      < >
      <div >Genres</div>
      <div >Upcoming</div>
      <div>Ongoing</div>
      <div >Top Rated</div>
      <div >Login</div>
      </>
    )}

    
   </nav>
   </>


  )
}

export default Navbar