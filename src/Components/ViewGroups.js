import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ViewGroups=()=>{
    var groupData = useSelector((state)=>state.ExGroup)
    var settledGroups = groupData.filter(item=>item.groupStatus==='SETTLED')
    var unSettledGroups = groupData.filter(item=>item.groupStatus==='UNSETTLED')
    return (
        <>
        <div className="d-flex p-2">
            <div className="settle-div p-3">
                <center><h3>UnSettled Groups</h3></center>
                <div >
                <ul className="list-group">
                    {
                        unSettledGroups.length > 0 ?
                        unSettledGroups.map((item)=><Link className="nav-link" to={`${item.groupID}`} key={item.groupID}><li  className="list-group-item cursor-pointer">{item.groupName} </li></Link>) : <p>No Groups to show</p>
                    }
                </ul>
                </div>
            </div>
            <div className=" settle-div p-3">
            <center><h3>Settled Groups</h3></center>
            <ul className="list-group">
                    {
                        settledGroups.length > 0 ?
                        settledGroups.map((item)=><Link className="nav-link" to={`${item.groupID}`} key={item.groupID}><li  className="list-group-item cursor-pointer">{item.groupName} </li></Link>) : <p>No Groups to show</p>
                    }
                </ul>
            </div>
        </div>
        </>
    )
}
export default ViewGroups