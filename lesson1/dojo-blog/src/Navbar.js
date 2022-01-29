// sfc to create new component
const Navbar = () => {
    return ( 
        <nav className="navBar">
            <h1>Djow Blog</h1>
            <div className="link">
                <a href="/">Home</a>   
                <a href="/create">New</a>   
            </div>
        </nav>
    );
}
 
export default Navbar;