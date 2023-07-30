import Header from "../components/Header.js";
const billy = require('../image/billy.png')
export default function EmployeePage(){
    return(
        <div style={{display:"flex", border:'2px solid lightslategrey',borderRadius:'2%', width:'350px',height:"700px", flexDirection:'column',justifyContent:'center', alignContent:"center",alignSelf:'center', backgroundColor:'powderblue'}}>
            <div style={{marginBottom:'20px'}}>
                <Header directory='Employee'/>
            </div>
            <div style={{justifyContent:'center'}}>            
                <img src={billy} alt="Bill Gates" style={{width:"170px",height:'170px',borderRadius:'10%'}}/>
            </div>

            <h2 style={{color:"blue", fontWeight:'bolder'}}>Bill Gates</h2>
            <h4 style={{color:"blue"}}>Call Office</h4>
            <i style={{color:'lightslategray',fontWeight:'bolder'}}>867-5309</i>
            <h4 style={{color:"blue"}}>Call Mobile</h4>
            <i style={{color:'lightslategray',fontWeight:'bolder'}}>1 2 3 times 2 to the 6th</i>
            <h4 style={{color:"blue"}}>Email</h4>
            <i style={{color:'lightslategray',fontWeight:'bolder'}}>BillGates@IwillBerichForever.org </i>
        </div>
    )
}