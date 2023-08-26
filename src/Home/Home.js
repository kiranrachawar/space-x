import React from 'react';
import logo from '../Images/SpaceX.jpg';
import Header from './Header';
import Landing from './Landing';
import Categories from './Categories';
import {Divider} from 'antd'


function Home(){
    return(
        <div>
            <Header />
            <Landing />
            <Divider></Divider>
            <Categories />
        </div>
    )
}
export default Home;