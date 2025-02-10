import { useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import { addExpenseInGroup } from "../Store/ExGroupSlice";

const AddExpense = () =>{
    var groupData = useSelector((state)=>state.ExGroup)
    var [membersData,setmembersData] = useState([])
    var selectGroup = useRef('')
    var description = useRef('')
    var amount = useRef('')
    var paidBy = useRef('')
    var divideAmong = []
    var dispatch = useDispatch()
    const navigate = useNavigate()
    const groupSelected=(e)=>{
       let mem = groupData.filter((item)=>(item.groupID===e.target.value))
       setmembersData(mem[0].groupMembers)
    }
    const addExpense = ()=>{
       const expenses={
            groupID:selectGroup.current.value,
            description:description.current.value,
            amount:amount.current.value,
            paidBy:getMemberData(paidBy.current.value),
            splitAmong:divideAmong,
            expenseDate:new Date().getTime(),
            expenseStatus:'UNSETTLED'
        }
        dispatch(addExpenseInGroup(expenses))
        navigate('/groups')
    }
    const getMemberData=(email)=>{
        let mem = {}
        membersData.forEach((item)=>{
            if(item.memberEmail===email)
                mem = item
        })
        return mem
    }
    const selectMember = (mem)=>{
        divideAmong.push(mem)
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
                        <select ref={selectGroup} onChange={(event)=>groupSelected(event)} defaultValue={'Select Group'} className="form-select" aria-label="Default select example">
                            <option >Select Group</option>
                            {groupData.map((item)=><option key={item.groupID} value={item.groupID}>{item.groupName}</option>)}
                        </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="desc" className="col-sm-3 col-form-label">Description</label>
                        <div className="col-sm-9">
                        <input ref={description} type="text" className="form-control" id="desc"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="amount" className="col-sm-3 col-form-label">Amount</label>
                        <div className="col-sm-9">
                        <input ref={amount} type="text" className="form-control" id="amount"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="paidBy" className="col-sm-3 col-form-label">Paid By</label>
                        <div className="col-sm-9">
                        <select ref={paidBy}   defaultValue={'Select Group'} className="form-select" aria-label="Default select example">
                            <option >Select Member</option>
                            {membersData.map((item)=><option key={item.memberEmail} value={item.memberEmail}>{item.memberName}</option>)}
                        </select>
                        </div>
                    </div>

                    <div className="mb-3 row">
                        <label htmlFor="paidBy" className="col-sm-3 col-form-label">Divide Among</label>
                        <div className="col-sm-9">
                            {membersData.map((item)=>
                            <div key={item.memberEmail} className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
                                <input onChange={()=>selectMember(item)} type="checkbox" className="btn-check"  id={item.memberEmail} autoComplete="off"/>
                                <label className="btn btn-outline-primary" htmlFor={item.memberEmail}>{item.memberName}</label>
                          </div>
                        )
                            }
                        </div>
                    </div>
                    
                </div>
                <div className="d-flex align-items-center ">
                    <button onClick={addExpense}  type="button" className="btn btn-secondary btn-lg mx-3"> Add Expense </button>
                    <Link to='/'><button type="button" className="btn btn-secondary btn-lg"> Cancel </button></Link>
                </div>
            </div>
            
        </div>
        </>
    )
}
export default AddExpense