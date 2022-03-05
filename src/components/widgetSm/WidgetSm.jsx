import "./widgetSm.css"
import { Visibility } from "@material-ui/icons"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
               <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                 <span className="widgetSmUserName">Vipan</span>
                 <span className="widgetSmUserTitle">UX/UI</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
               </button>
            </li>
            <li className="widgetSmListItem">
               <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                 <span className="widgetSmUserName">Vipan</span>
                 <span className="widgetSmUserTitle">UX/UI</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
               </button>
            </li>
            <li className="widgetSmListItem">
               <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                 <span className="widgetSmUserName">Vipan</span>
                 <span className="widgetSmUserTitle">UX/UI</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
               </button>
            </li>
            <li className="widgetSmListItem">
               <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetSmImg" />
               <div className="widgetSmUser">
                 <span className="widgetSmUserName">Vipan</span>
                 <span className="widgetSmUserTitle">UX/UI</span>
               </div>
               <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
               </button>
            </li>
        </ul>
    </div>
  )
}
