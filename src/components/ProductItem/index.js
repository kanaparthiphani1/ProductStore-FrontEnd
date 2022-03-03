import React from "react";
import "./index.css";

const ProductItem = (props) => {
  const { id, imageUrl, price, isSellingFast, brandName, name } = props.item;
  const { isList } = props;
  console.log(id);
  return (
    <>
      {isList ? (
        <div className="outer-cont-2">
          <div className="img-cont-2">
            <img className="img-2" src={`https://${imageUrl}`} alt="product" />
          </div>
          <div className="side-cont">
            <div className="left-cont1">
              <h1 className="brandName1">{brandName}</h1>
              <h1 className="productName1">{name}</h1>
              {isSellingFast && <h1 className="bestSeller">Best Seller</h1>}
            </div>
            <div className="right-cont1">
              <span className="priceTag1">Price:</span>
              <h1 className="price1">{price?.current?.value}/-</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="outer-cont">
          <div className="img-cont">
            <img className="img" src={`https://${imageUrl}`} alt="product" />
          </div>
          <div className="bottom-cont">
            <div className="left-cont">
              <h1 className="brandName">{brandName}</h1>
              <h1 className="productName">{name}</h1>
              {isSellingFast && <h1 className="bestSeller">Best Seller</h1>}
            </div>
            <div className="right-cont">
              <span className="priceTag">Price:</span>
              <h1 className="price">{price?.current?.value}/-</h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductItem;
