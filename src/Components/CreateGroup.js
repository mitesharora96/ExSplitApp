import { Link, useNavigate } from "react-router-dom"
import { IoMdPersonAdd } from "react-icons/io";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { createExGroup } from "../Store/ExGroupSlice";

const CreateGroup = () =>{
    var gname = useRef('')
    var gType = useRef('')
    var [gMembers,setgMembers] = useState([])
    var memberName = useRef('')
    var memberEmail = useRef('')
    var dispatch = useDispatch()
    const navigate = useNavigate()
    
    const createGroup=()=>{
        const gData={
            groupID:'id' + (new Date()).getTime(),
            groupName:gname.current.value,
            groupType:gType.current.value,
            groupStatus:'UNSETTLED',
            groupMembers:gMembers,
            expenses:[],
            settlements:[]
        }
        dispatch(createExGroup(gData))
        navigate('/groups')
    }
    const addMember=()=>{
        let mem = [...gMembers,{
            'memberName': memberName.current.value,
            'memberEmail':memberEmail.current.value,
            'balance':[]
        }]
        setgMembers(mem)
        memberName.current.value=''
        memberEmail.current.value=''
    }
    function removeMember(email){
        let mem = gMembers.filter((item)=>item.memberEmail!==email)
        setgMembers(mem)
    }
    return (
        <>
        <div className="group-page">
            <center className="m-4"><h3>Create your group</h3></center>
            <div className="d-flex justify-content-evenly ">
                <div className="border p-4 create-group-div">
                    <div className="mb-3 row">
                        <label htmlFor="staticEmail" className="col-sm-3 col-form-label">Group Name</label>
                        <div className="col-sm-9">
                        <input ref={gname} type="text" className="form-control" id="staticEmail"/>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Group Type</label>
                        <div className="col-sm-9">
                        <select ref={gType} defaultValue={'Select Group type'} className="form-select" aria-label="Default select example">
                            <option >Select Group type</option>
                            <option value="Holiday">Holiday</option>
                            <option value="Home">Home</option>
                            <option value="Office">Office</option>
                            <option value="Other">Other</option>
                        </select>
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="inputPassword" className="col-sm-3 col-form-label">Members</label>
                        <div className="col-sm-9 d-flex">
                        <button className="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal"><IoMdPersonAdd /></button>
                            <div className="form-control">
                            <span className="badge text-bg-secondary mx-1">You</span>
                                {gMembers.map((item)=><span key={item.memberEmail} className="badge text-bg-secondary mx-1">{item.memberName} <span onClick={()=>removeMember(item.memberEmail)} className="cursor-pointer">X</span></span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex align-items-center ">
                    <button onClick={createGroup} type="button" className="btn btn-secondary btn-lg mx-3"> Create Group </button>
                    <Link to='/'><button type="button" className="btn btn-secondary btn-lg"> Cancel </button></Link>
                </div>
            </div>
            
        </div>

        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Add Member to the group</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div className="modal-body">
                <div className="mb-3">
                    <label htmlFor="mName" className="form-label">Name</label>
                    <input ref={memberName} type="text" className="form-control" id="mName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="mEmail" className="form-label">Email address</label>
                    <input ref={memberEmail} type="email" className="form-control" id="mEmail" placeholder="name@example.com"/>
                </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button onClick={addMember} type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CreateGroup