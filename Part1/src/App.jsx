import React from 'react';
import SalesCard from "./components/salescard.jsx";
import Input from "./components/input.jsx";
import Dropdown from './components/dropdown.jsx';
import PrimaryButton from './components/primarybutton.jsx';
import LeftSideBar from './components/leftsidebarbutton.jsx';
import ReactionBar from './components/reactionbar.jsx';
import PostHeader from './components/postheader.jsx';
import MenuItem from './components/menuItem.jsx';
import ReviewItem from './components/review.jsx';
import Menuitem2 from './components/menuitem2.jsx';


const Admin = () => {
  return (
    <div >


      <LeftSideBar/>
      <ReactionBar/>
      <PostHeader/>

      <SalesCard/>
      <PrimaryButton/>
      <Dropdown/>
      <Input/>


      <MenuItem/>
      <ReviewItem/>

      <Menuitem2/>




    </div>
  );
};



export default Admin;


