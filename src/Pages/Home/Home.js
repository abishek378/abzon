import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import Product from '../../components/Product/Product'
import './Home.css'
import { Store } from '../../redux/store/Mystore';
import { Provider } from 'react-redux';
import { ProductList } from '../../productdata/Productlist'
import ProductCard from '../../components/Product/ProductCard'
import { useSelector } from 'react-redux';
const HomeContainer = () => {




const mystore=useSelector(state=>state)
// console.log("mystore",mystore)


const [filterdata,setFilterdata]=useState("")
const myfun=(i)=>{
      let data=i;
      console.log("getting inpd from header",i)
      setFilterdata(i)
}
console.log("stored inpdata--",filterdata)



//serach filter condition


// const [filteru,setFilteru]=useState("")

// useEffect=(()=>{
//       setFilteru= ProductList.filter(item => item.title.toLowerCase().includes(filterdata.toLowerCase()))

// },[filterdata])
const filteru= ProductList.filter(item => item.title.toLowerCase().includes(filterdata.toLowerCase()))


  return (

//       <div className='main'>

//            <div className='headernav'> <Header /> </div>
//     <div className='home'>
      
    
//     <img 
//     className='home_image' 
//     src="https://m.media-amazon.com/images/I/71oT8vw4TIL._SX3000_.jpg" 
//     alt="" />

//     <div className='home_row'>
//       <Product
//       id="1"
//       title="Realme 10"
//       image="https://m.media-amazon.com/images/I/61eHj6VXGgL._SX679_.jpg"
//       price={30000}
//       rating={4}

//       />

// <Product
//       id="2"
//       title="Lenevo v15 Intel i3 11th Gen"
//       image="https://m.media-amazon.com/images/I/51uMR8hdx9L._SX679_.jpg"
//       price={40000}
//       rating={3}

//       />


// <Product
//       id="1"
//       title="Realme 10"
//       image="https://m.media-amazon.com/images/I/61eHj6VXGgL._SX679_.jpg"
//       price={30000}
//       rating={4}

//       />


// <Product
//       id="1"
//       title="Realme 10"
//       image="https://m.media-amazon.com/images/I/61eHj6VXGgL._SX679_.jpg"
//       price={30000}
//       rating={4}

//       />
//     </div>


//     <div className='home_row'>
//                  <div className='headernav'> <Header /> </div>
//       <Product
//       id="3"
//       title="Fire-Boltt Gladiator"
// image="https://m.media-amazon.com/images/I/71IqWwSIxwL._AC_UY327_FMwebp_QL65_.jpg"
//       price={2499}
//       rating={4}

//       />

// <Product
//       id="4"
//       title="Boult Audio Z25"
//       image="https://m.media-amazon.com/images/I/61NQZ-e9DBL._AC_UY327_FMwebp_QL65_.jpg"
//       price={1198}
//       rating={4}

//       />

//       <Product
//       id="1"
//       title="Realme 10"
//       image="https://m.media-amazon.com/images/I/61eHj6VXGgL._SX679_.jpg"
//       price={30000}
//       rating={4}

//       />

// <Product
//       id="1"
//       title="AB 10"
//       image="https://m.media-amazon.com/images/I/61eHj6VXGgL._SX679_.jpg"
//       price={30000}
//       rating={4}

//       />

//     </div>


//     </div>

//     </div>


<div className='main'>
<div className='headernav'> <Header func={myfun}/> </div>
<div className='home'>
     <img 
     className='home_image' 
     src="https://m.media-amazon.com/images/I/71oT8vw4TIL._SX3000_.jpg" 
     alt="" />


<div className='home_row'>

{filterdata.length ===0 ?(
      // <p>No results found</p>

      ProductList.map((p) => <Product {...p} key={p.id} />)
):(
      filteru.map((p)=> <Product {...p} key={p.id}/>)
)}
</div>
</div>
    

</div>
  )
}


const Home =()=>{
      return (
            // <Provider store={Store}>   // </Provider>
                  <HomeContainer />
            // </Provider>
      )
}
export default Home