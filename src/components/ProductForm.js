import { useState } from 'react';
import './ProductForm'

function ProductForm(){
    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangedHandler(event){
        setTitle(event.target.value); 
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }
    function submitHandler(event){
        event.preventDefault();

        const productData={
            title:newTitle,
            date:newDate
        };

        console.log(productData)

        setTitle('');
        setDate('');
     }
    return(<form onSubmit={submitHandler}>
        <div className='new-product_title'>
            <label>Title</label>
            <input type='text' value={newTitle} onChange={titleChangedHandler}></input>
        </div>
        <div className='new-product_date'>
            <label>Date</label>
            <input type='date' value={newTitle} onChange={dateChangeHandler} min='2023-1-1' max='2023-12-12'></input>
        </div>
        <div className='new-product_button'>
            <button type='submit'>Add Product</button>
        </div>
    </form>)
}
export default ProductForm;