import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={"widgetBgButton " + type}>{type}</button>;
  }


  return (
    <div className="widgetLg">
       <h3 className="widgetLgTitle">Latest Transactions</h3>
       <table className="widgetLgTable">
         <tr className="widgetLgTr">
           <th className="widgetLgTh">Customer</th>
           <th className="widgetLgTh">Date</th> 
           <th className="widgetLgTh">Amount</th> 
           <th className="widgetLgTh">Status</th>  
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
           <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetLgImg" />
           <span className="widgetLgName">Susan Coral</span>
           </td>
           <td className="widgetLgDate">2 June 2022</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus">
            <Button type="Approved"></Button>
          </td>
         </tr>
          <tr className="widgetLgTr">
           <td className="widgetLgUser">
           <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetLgImg" />
           <span className="widgetLgName">Susan Coral</span>
           </td>
           <td className="widgetLgDate">2 June 2022</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus">
            <Button type="Pending"></Button>
          </td>
         </tr>
         <tr className="widgetLgTr">
           <td className="widgetLgUser">
           <img src="https://picsum.photos/200/300.jpg" alt="" className="widgetLgImg" />
           <span className="widgetLgName">Susan Coral</span>
           </td>
           <td className="widgetLgDate">2 June 2022</td>
           <td className="widgetLgAmount">$122.22</td>
           <td className="widgetLgStatus">
            <Button type="Decline"></Button>
          </td>
         </tr>
       </table>
    </div>
  )
}
