import EmployeeListItem
 from "./EmployeeListItem"
export default function EmployeeList(){
    return(
        <div style={{display:"flex", flexDirection:'column'}}>
            <EmployeeListItem name="James King" title="President & CEO"/>
            <EmployeeListItem name="Barack Obama" title="President"/>
            <EmployeeListItem name="Bill Gates" title="CEO"/>
            <EmployeeListItem name="Steve Wozniak" title="President & CEO"/>
            <EmployeeListItem name="James Bond" title="Not a Spy"/>
            <EmployeeListItem name="Werner Heisenberg" title="Mechanic (Quantum)"/>
        </div>
    )
}