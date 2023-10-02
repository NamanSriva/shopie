import React, { Fragment, useEffect } from "react";
import { BiArrowToBottom } from "react-icons/bi";
import "./Home.css";
import {getProduct,clearErrors} from "../../actions/productAction";
import MetaData from "../layout/MetaData";
import{useSelector, useDispatch} from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ProductCard from "./ProductCard.js";






const Home = () => {
  const alert = useAlert();
  const dispatch=useDispatch();
  const {loading,error,products,productsCount}=useSelector((state)=>state.products);

  useEffect(()=>{ 

    if (error) {
      alert.error(error);
            dispatch(clearErrors());
    }

dispatch(getProduct());
  }, [dispatch,error, alert]);
  
  return(
    <Fragment>
      {loading ?(
       <Loader />
      ):(
    
    <Fragment>
    <MetaData title="Shopie" />
    <div className="banner">
            <p>Welcome to SHOPIE</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <BiArrowToBottom />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">Featured Products</h2>
          <div className="container" id="container">

       
          {products && products.map((product)=>(
            <ProductCard key={product._id} product={product} />
          ))}
         

          </div>

  </Fragment>
      )}
       </Fragment>
  );
};

export default Home;