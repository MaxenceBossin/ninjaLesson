// sfc to create new component
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Djow Blog</h1>
            <div className="link">
                <a href="/">Home</a>   
                <a className="btn-red" href="/create">New</a>   
            </div>
        </nav>
    );
}
 
export default Navbar;