import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const AddExpense = () =>{
    var groupData = useSelector((state)=>state.ExGroup)
    var [membersData,setmembersData] = useState([])
    const groupSelected=(e)=>{
       let mem = groupData.filter((item)=>(item.groupName===e.target.value))
       setmembersData(mem[0].groupMembers)
       console.log(membersData)
    }
    return (
        <>
        <div className="group-page">
            <center className="m-4"><h3>Add Expense</h3></center>
            <div className="d-flex justify-content-evenly ">
                <div className="border p-4 create-group-div">
                    <div className="mb-3 row">
                        <label htmlFor="selectGroup" className="col-sm-3 col-form-label">Select Group</label>
                        <div className="col-sm-9">
                        <select onChange={(event)=>groupSelected(event)} defaultValue={'Select Group'} className="form-select" aria-label="Default select example">
                            <option >Select Group</option>
                            {groupData.map((item)=><option key={item.groupName} value={item.groupName}>{item.groupName}</option>)}
                        </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="desc" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                        <input  type="text" className="form-control" id="desc"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="amount" className="col-sm-3 col-form-label">Amount</label>
                        <div className="col-sm-9">
                        <input  type="text" className="form-control" id="amount"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="paidBy" className="col-sm-3 col-form-label">Paid By</label>
                        <div className="col-sm-9">
                        <select defaultValue={'Select a member'} className="form-select" aria-label="Default select example">
                            <option >Select member</option>
                            {membersData.map((item)=><option key={item.memberEmail} value={item.memberName}>{item.memberName}</option>)}
                            {/* <option value="Holiday">Holiday</option>
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                            <option value="Other">Other</option> */}
                        </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="paidBy" className="col-sm-3 col-form-label">Divide Among</label>
                        <div className="col-sm-9">
                        <select defaultValue={'Select a member'}  className="form-select" aria-label="Default select example">
                            <option >Select members</option>
                            {membersData.map((item)=><option key={item.memberEmail} value={item.memberName}>{item.memberName}</option>)}
                            {/* <option value="Home">Home</option>
                            <option value="Office">Office</option>
                            <option value="Other">Other</option> */}
                        </select>
                        </div>
                    </div>
                    
                </div>
                <div className="d-flex align-items-center ">
                    <button onClick={'createGroup'} type="button" className="btn btn-secondary btn-lg mx-3"> Add Expense </button>
                    <Link to='/'><button type="button" className="btn btn-secondary btn-lg"> Cancel </button></Link>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default AddExpense