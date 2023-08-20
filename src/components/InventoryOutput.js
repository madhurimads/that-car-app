import Card from './Card';
import './InventoryOutput.css';


const InventoryOutput = (props) => {
    let invListSorted = props.iList.sort((a,b) => (a.id < b.id) ? 1 : -1);
    console.log(invListSorted);
    return (invListSorted.map(car =>  
    <div style={{"padding":"10px", "display":"inline-block"}}>    
    <Card>
        <ul>
        <li> <img src={car.img} alt={car.id}></img></li>    
        <li><text style={{"color":"gray", "font-size": "11px", "text-transform":"uppercase"}}>{props.name} CERTIFIED</text></li>    
        <li><text style={{"font-size":"20px", "fontWeight":"bolder"}}>{car.year}  {car.make}  {car.model}</text> </li>
        <li><span>{car.type} <b>.</b> {car.mileage} miles</span></li>
        <li><h2>${car.price}</h2></li>
        <hr></hr>
        <li style={{"font-size": "13px"}}> <b>Free shipping</b> . Get it by tomorrow</li>
        </ul>
    </Card>
    </div>
    ));
}

export default InventoryOutput;