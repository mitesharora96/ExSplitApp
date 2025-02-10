import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const ViewGroups=()=>{
    var groupData = useSelector((state)=>state.ExGroup)
    return (
        <>
        <div className="d-flex p-2">
            <div className="settle-div p-3">
                <center><h3>UnSettled Groups</h3></center>
                <div >
                <ul className="list-group">
                    {
                        groupData.map((item)=><Link to={`${item.groupID}`} key={item.groupID}><li  className="list-group-item cursor-pointer">{item.groupName} </li></Link>)
                    }
                </ul>
                </div>
            </div>
            <div className=" settle-div p-3">
            <center><h3>Settled Groups</h3></center>
            <p>No settled group..</p>
            </div>
        </div>
        </>
    )
}
export default ViewGroups