import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"

const GroupDetails=()=>{
    var {groupID} = useParams()
    var groupData = useSelector((state)=>state.ExGroup)
    var groupDetails = {}
    const getFormatDate=(dat)=>{
        const d = new Date(dat)
        let y = d.getFullYear()
        let m = d.getMonth() + 1;
        let da = d.getDate();
        return da+'/'+m+"/"+y
    }
    groupData.forEach((item)=>{
       if(item.groupID === groupID){
        groupDetails = item;
       }
    })
    const getTranDetail=(group)=>{
        const amount = group.amount/group.splitAmong.length
        if(didCurrentUserPaid(group.paidBy.memberEmail)){
            return 'You lent Rs.' + amount.toFixed(2)
        }
        else{
            return 'You borrowed Rs.' + amount.toFixed(2)
        }
    }
    function didCurrentUserPaid(email){
        let ob =  localStorage.getItem('CurrentUser')
        ob = JSON.parse(ob)
        if(ob.memberEmail === email)
            return true
        else
            return false
    }
   
    return (
        <>
        <div className="groupDetail-page">
        <center className="m-4"><h3>Transactions</h3></center>
        <div className="d-flex justify-content-evenly ">
            <div className="border p-4 create-group-div">
            <h3>{groupDetails.groupName}</h3>
                <ul className="list-group">
                    {
                     groupDetails.expenses ?groupDetails.expenses.map((item)=>  <li key={item.expenseDate} className="list-group-item cursor-pointer">
                        <div className="d-flex justify-content-between">
                        <div><span className="transaction-date">{getFormatDate(item.expenseDate)}</span><span className="transaction-desc mx-3">{item.description}</span>
                        <span className="transaction-date">{item.paidBy.memberName + ' Paid ' + item.amount}</span>
                        </div> <div><span className={`transaction-detail ${didCurrentUserPaid(item.paidBy.memberEmail) ? 'text-success' : 'text-danger'} `}>{getTranDetail(item)}</span></div>
                        </div>  </li> ):<h3>No Transactions</h3>
                    }
                    
                </ul>
            </div>
            <div className="d-flex align-items-center ">
                    <Link to='/add-expense'> <button  type="button" className="btn btn-secondary btn-lg mx-3"> Add Expense </button></Link>
                    <Link to='/'><button type="button" className="btn btn-secondary btn-lg"> Settle Up </button></Link>
            </div>
        </div>
        </div>
       
        </>
    )
}
export default GroupDetails