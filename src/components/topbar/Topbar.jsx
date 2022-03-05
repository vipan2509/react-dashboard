import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
  return (
    <div className='topbar'>
            <div className='topbarWrapper'>
                    <div className="topLeft">
                      <span className='logo'>Key<span className='heart'>Heart</span></span>
                    </div>
                    <div className="topRight">
                            <div className="topbarIconsContainer">
                                <NotificationsNone />
                                <div className="topIconBag">
                                    1
                                </div>
                            </div>
                            <div className="topbarIconsContainer">
                                <Language />
                                <div className="topIconBag">
                                    1
                                </div>
                            </div>
                            <div className="topbarIconsContainer">
                                <Settings />
                            </div>
                            <img src='' alt='' className='topAvatar'></img>
                    </div>
            </div>
    </div>
  )
}
