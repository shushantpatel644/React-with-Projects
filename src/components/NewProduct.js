import './NewProduct.css'
import ProductForm from './ProductForm';
// import Products from './Products';

function NewProduct(props){


    function saveProduct(product){
        console.log("I am inside new product");
        console.log(product);

        // calling new parent

        props.pranay(product);

    }

    return(<div className='new-product'>
        <ProductForm onSaveProduct = {saveProduct}/>
    </div>) 
}

export default NewProduct;