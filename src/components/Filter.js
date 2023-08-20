import './Filter.css';
import { useRef } from 'react';
import newImg from '../../src/assets/hondaCivic.png';

const Filter = (props) => {

    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSubmit(inputRef.current.value);
        inputRef.current.value='';
    }

    const addHandler = (event) => {
        event.preventDefault();
        const newCar = {img: newImg, make: 'Honda', 'model': 'Civic', year: '2023', type: 'Sedan LX', mileage: '1000', price: '25,045',color:'red'};
        props.onAdd(newCar);
    }

    return (
        <div className='filter'>
            <form onSubmit={submitHandler} autoComplete='off'>
            <input type='search' name='filter' placeholder="Search makes, models or any keywords" 
            ref={inputRef}></input>
            <button onClick={addHandler}>Add</button>
            </form>
        </div>
    );
}

export default Filter;