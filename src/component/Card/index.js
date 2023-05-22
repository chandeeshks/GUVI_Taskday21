import React from "react";

export default function Cardpage({product={}, handleaddtocart=(data)=>{}, disabled=()=>{}}){
    return (                    
        <div class="col mb-5">
        <div class="card h-100">
           {
            product.isforsale && ( <div class="badge bg-success text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>)
           }
            <img class="card-img-top" src={product.courseImage || "https://dummyimage.com/450x300/dee2e6/6c757d.jpg"} alt={product.courseName}/>
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">{product.courseName}</h5>
                    <span class="text-muted text-decoration-line-through">₹{product.actualprice}</span>
                    ₹{product.discountprice}
                    <div>Rating- {product.rating}</div>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center">
                    <button class="btn btn-outline-dark mt-auto" onClick={()=>handleaddtocart(product)}
                    disabled={disabled}
                    >
                        Add to cart</button></div>
            </div>
        </div>
    </div>
)} 