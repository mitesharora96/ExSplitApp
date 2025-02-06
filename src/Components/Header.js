import { Link } from "react-router-dom"

const Header = () =>{
    return (
        <>
        <nav className="navbar navbar-expand-lg bg-dark p-3" data-bs-theme="dark">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">ExSplit</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav ">
                    <Link to='groups' className="nav-link">View Groups</Link>
                    <Link to='history' className="nav-link">History</Link>
                    <div className="nav-link "><div className="user-symbol">MA</div></div>
                    </div>
                </div>
            </div>
        </nav>
        </>
    )
}
export default Header