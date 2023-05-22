import React,{useEffect,useState} from "react";
import Navbarpage from "../component/Navbar";
import Headerpage from "../component/Header";
import Footerpage from "../component/Footer";
import Cardpage from "../component/Card";


export default function Productpage(){
    const [courses, setcourses] = useState([]);
    const [cart, setcart] = useState([]);
    useEffect(()=>{
        fetch("mocks/courses.json")
        .then((response)=> response.json())
        .then((data)=>{
            if(data && data.courses.length > 0){
                setcourses(data.courses);
            }
        })
        .catch((error)=> console.log(error))
    },[]);

    function handleaddtocart(data){
        if(data){
        let cartcopy = [...cart];
        cartcopy.push(data);
        setcart(cartcopy);
        }
    }

     return(
        <div>
            <Navbarpage heading="Learning Community" cartcount={cart.length}/>
            <Headerpage header="Choose your course" description="Flat 15% of your chourse"/>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {courses && 
                        courses.length > 0 && 
                        courses.map((d,i)=>(
                        <Cardpage product={d} key={`courses-details-${i}`} handleaddtocart={handleaddtocart} disabled={cart.filter((cItem)=> cItem.courseName === d.courseName).length > 0
                            ? true
                            : false}/>
                        ))}
                    </div>
                </div>
            </section>
            <Footerpage footheading="Copyright © Learning Community 2023"/>
        </div>
    )
} 