import Header from "../components/Header.js";
import Searchbar from "../components/SearchBar.js";
import EmployeeList from "../components/EmployeeList.js";
export default function HomePage(){
    return(
        <div style={{display:"flex", border:'2px solid lightslategrey',borderRadius:'2%', width:'350px',height:"700px", flexDirection:'column',justifyContent:'center', alignContent:"center",alignSelf:'center', backgroundColor:'whitesmoke'}}>
        <div style={{marginTop:"65px"}}>
            <Header directory ="Employee Directory"/>
        </div>
        <Searchbar />
        <EmployeeList />
        </div>
        
    )
}