import { useSelector } from "react-redux"

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
                        groupData.map((item)=><li key={item.groupName} className="list-group-item">{item.groupName} </li>)
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