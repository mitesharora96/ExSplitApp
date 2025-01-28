import { Link } from "react-router-dom"

const HomePage=()=>{
    return (
        <div className="d-flex justify-content-evenly align-items-center home-view-padding">
            <Link to='add-expense'><button type="button" class="btn btn-secondary btn-lg "> Add Expense </button></Link>
            <Link to='create-group'><button type="button" class="btn btn-secondary btn-lg "> Create Group </button></Link>
        </div>
    )
}
export default HomePage