import { Link } from "react-router-dom";

const MainNav = ()=>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/animatdnavmenu1" onClick={(e)=>{}}>Animated Nav menu</Link>
                </li>
                <li>
                    <Link to="/inputlabelanimation" onClick={(e)=>{}}>Input Label Animation</Link>
                </li>
            </ul>
        </nav>
    );
}
export default MainNav;