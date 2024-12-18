import './ProductCardstyling.css';

function ProductCard(props) {
    const { prodtitle :productname, description :proddescription, price : prodprice , imgurl :prodimg } = props;
    return (
      <div>
    <div className = 'detailtitle'>
          <h1> PRODUCT DETAILS </h1>
    </div> 
    <div className='productcard'>
        <div className='prodimage'>
         <img src={prodimg} alt ='loading...' />
         </div>
        <p className = 'detailsdata'>Product Name : {productname}
          <br></br>
          <br></br>
          <br></br>
        Description :  {proddescription}
        <br></br>
        <br></br>
        <br></br>
        Price : Rs. {prodprice}.
        </p>
        
    </div>
    </div>
    );
    }
    export default ProductCard;