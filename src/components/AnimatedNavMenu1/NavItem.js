import { useEffect } from "react";

const NavItem = (props)=>{
useEffect(()=>{
 changeClass();
        })

    const changeClass = ()=>{
        
        let list = document.querySelectorAll('.list');
        
      function activeLink(){
          list.forEach((item)=>
          item.classList.remove('active'));//
          this.classList.add('active');
          
      }
      list.forEach((item)=>
      item.addEventListener('click',activeLink))

    }
    return(
        <li className="list active" onClick={changeClass}>
                <a href="#">
                    <span className="icon"><ion-icon name={props.ico}></ion-icon></span>
                    <span className="text">{props.itemName}</span>
                </a>
            </li>
    );
}
export default NavItem;