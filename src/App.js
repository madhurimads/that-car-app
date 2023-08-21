import './App.css';
import Header from '../src/components/Header';
import classesCss from './App.css';
import carTitleLogoPNG from '../src/assets/car.svg';
import Output from '../src/components/InventoryOutput';
import hondaAccord from '../src/assets/honda-accord-blue.png'
import teslaModelS from '../src/assets/2018-tesla-modelS.png';
import teslaWhite from '../src/assets/teslaWhite.png';
import bmwBlue from '../src/assets/bmw-blue.png';
import bmwGold from '../src/assets/bmw-gold.png';
import audiWhite from '../src/assets/Audi-white.png';
import audiGold from '../src/assets/audi-gold.png';
import hondaCivic from '../src/assets/hondaCivic.png';
import Filter from './components/Filter';
import { useState } from 'react';

function App() {

  const inventoryList = [
  {id:1, img: hondaAccord, make: 'Honda', 'model': 'Accord', year: '2022', type: 'Long-range', mileage: '35,000', price: '37,999', color: 'blue'}, 
  {id:2, img: teslaModelS, make: 'Tesla', 'model': 'Model S', year: '2023', type: 'Electric', mileage: '22,000', price: '52,999', color:'red'},
  {id:3, img: teslaWhite, make: 'Tesla', 'model': 'Model S', year: '2018', type: 'Electric', mileage: '42,000', price: '32,999', color: 'white'},
  {id:4, img: bmwBlue, make: 'BMW', 'model': 'X3', year: '2021', type: 'sDrive30i', mileage: '2,000', price: '45,999',color:'blue'},
  {id:5, img: bmwGold, make: 'BMW', 'model': '3 Series', year: '2023', type: '328i Gran Turismo Xdrive', mileage: '42,000', price: '22,999', color:'gold'},
  {id:6, img: audiWhite, make: 'Audi', 'model': 'TT', year: '2014', type: 'Quatro Premium', mileage: '82,000', price: '12,999',color:'white'},
  {id:7, img: audiGold, make: 'Audi', 'model': 'eTron', year: '2023', type: 'Chronos', mileage: '34,500', price: '62,999',color:'gold'},
  {id:8, img: hondaCivic, make: 'Honda', 'model': 'Civic', year: '2023', type: 'Sedan LX', mileage: '1000', price: '25,045',color:'red'}];


  const companyName = 'that car place';

  //const [isFiltered, setIsFiltered] = useState(false); 
  const [finalInvList, setFinalInvList] = useState(inventoryList);

  const filterHandler = (filterString) => {
    const searchVal = filterString;
    if(searchVal.length === 0) {
      setFinalInvList(inventoryList);
      return;
    }

    const searchValArr = searchVal.split(" ");
    let filteredList = [];
    if(searchValArr.length > 1) {
      for(let i=0; i<searchValArr.length; i++) {
        filteredList = inventoryList.filter(car => (car.color === searchValArr[i]
          || car.make === searchValArr[i]));
        }
    } else {
        filteredList = inventoryList.filter(car => (car.color === searchValArr[0]
        || car.make === searchValArr[0]));
    }
  

    setFinalInvList(filteredList);
  }


  return (
   <>
    <Header carTitle={companyName} carTitleLogo={carTitleLogoPNG} cssClass={classesCss}></Header>
    <Filter onSubmit={filterHandler}></Filter>
    { finalInvList && <Output iList={finalInvList} name={companyName}></Output>}
    { finalInvList.length === 0 && <p>No cars found</p>}
   </>
  );
}

export default App;
