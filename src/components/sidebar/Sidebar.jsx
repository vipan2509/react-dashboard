import React from 'react'
import "./sidebar.css"
import {LineStyle, Timeline, TrendingUp } from "@material-ui/icons"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';


export default function Sidebar() {
  return (
    <div className='sideBar'>
           <div className="sidebarWrapper">
               <div className="sidebarMenu">
                      <h3 className="sidebarTitle">Dashboard</h3>
                      <ul className="sidebarList">
                         <li className="sideBarListItem active">
                            <LineStyle  className="sidebarIcon" /> 
                            Home
                         </li>
                         <li className="sideBarListItem">
                            <Timeline className="sidebarIcon" /> 
                            Analytic
                         </li>
                         <li className="sideBarListItem">
                            <TrendingUp  className="sidebarIcon" /> 
                            Sales
                         </li>
                      </ul>
                      <h3 className="sidebarTitle">Quick Menu</h3>
                      <ul className="sidebarList">
                         <li className="sideBarListItem">
                            <LineStyle className="sidebarIcon" /> 
                            Users
                         </li>
                         <li className="sideBarListItem">
                            <Timeline className="sidebarIcon" /> 
                            Products
                         </li>
                         <li className="sideBarListItem">
                            <TrendingUp className="sidebarIcon" /> 
                             Transactions
                         </li>
                         <li className="sideBarListItem">
                            <TrendingUp className="sidebarIcon" /> 
                             Reports
                         </li>
                      </ul>

                      <h3 className="sidebarTitle">Notification</h3>
                      <ul className="sidebarList">
                         <li className="sideBarListItem">
                            <LineStyle className="sidebarIcon" /> 
                            Mail
                         </li>
                         <li className="sideBarListItem">
                            <Timeline className="sidebarIcon" /> 
                            Feedback
                         </li>
                         <li className="sideBarListItem">
                            <TrendingUp className="sidebarIcon" /> 
                            Messages
                         </li>
                      </ul>

                      <h3 className="sidebarTitle">Staff</h3>
                      <ul className="sidebarList">
                         <li className="sideBarListItem">
                            <LineStyle className="sidebarIcon" /> 
                            Manage
                         </li>
                         <li className="sideBarListItem">
                            <Timeline className="sidebarIcon" /> 
                            Analytic
                         </li>
                         <li className="sideBarListItem">
                            <TrendingUp className="sidebarIcon" /> 
                            Reports
                         </li>
                      </ul>
               </div>
           </div>
    </div>
  )
}
