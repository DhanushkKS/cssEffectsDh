import './style.css';
const InputLabel = ()=>{
    return(
        <div class="container">
        <div class="inputBox">
             <input type="text" class="input-item" aria-label="sss" required="required"/>
             <span>Full Name</span>
             <i></i>
        </div>
       
    </div>
    );
}
export default InputLabel;