import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from '../components/Search';
function Home(){

    return(
        <div className='home'>
            <div className='home__header'>
                <div className='home__headerLEFT'>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className='home__headerRIGHT'>
                    <Link to="/gmail">Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>
            </div>
            <div className='home__body'>
                <img src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png' alt='...'/>
            </div>
            <div className='home__inputContainer'>
                <Search />
            </div>
        </div>
    )
}

export default Home