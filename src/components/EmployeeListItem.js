export default function EmployeeListItem(props){
    
    return(
        <div style={{border:"1px solid lightslategrey",borderRadius:'5%',marginTop:'10px',backgroundColor:'lavenderblush'}}>
            <h3 style={{color:'blue', fontWeight:'bolder'}}>{props.name}</h3>
            <i style={{color:'lightslategray', fontWeight:'bolder'}}>{props.title}</i>    
        </div>
    )
}