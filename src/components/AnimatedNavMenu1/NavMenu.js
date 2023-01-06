import NavItem from './NavItem';
import './style.css';
const NavMenu = ()=>{
    
    const navItems = [
        {name:"Home",ico:"home-outline"},
        {name:"Profile",ico:"person-outline"},
        {name:"Messages",ico:"chatbubble-outline"},
        {name:"Gallery",ico:"images-outline"},
        {name:"Settings",ico:"settings-outline"},
    ];
    return(
    <div>
         <div className="navigation">
        <ul>
            {navItems.map(item => {
                return(
                <NavItem itemName={item.name} ico={item.ico}/>
           ) })}
           
            <div className="indicator"></div>
        </ul>
    </div>
    </div>
    );

}
export default NavMenu;