// import React from 'react'
import * as React from 'react';
import { useEffect,useCallback,useState } from 'react';
import ShoppingBasket from "@mui/icons-material/ShoppingBasket"
import Search from "@mui/icons-material/Search"
import "./Header.css";

import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Home from '../../Pages/Home/Home';

const Header = (props) => {

    const store=useSelector(state=>state.myreducers)
    const storeitems=store.length
    // console.log(storeitems)


    const em=localStorage.getItem('Name')
    // console.log("em",em)
// console.log([...em].indexOf("@"))
const index=[...em].indexOf("@")


const Name=em.slice(0,index)
// console.log(em.slice(0,index))


// const standardtot=store.reduce((currenttot,item)=>{
//     return item.price+currenttot
// },0)


const Total=store.reduce((currentTotal ,item)=>{
    return item.total + currentTotal
  },0)
//   console.log(Total)

const [pass,setPass]=useState("")
const [trigger,setTrigger]=useState(false)
  const handlechange=(e)=>{
    console.log("handlechange",e.target.value)
    setPass(e.target.value)
    console.log("inputdata from header",pass)
    // memoizedFunction()
    // props.func(pass)
    setTrigger(true)
  }

if(trigger){
    props.func(pass)
}
//
console.log("pp",pass)
// const [triger,setTriger]=useState=(pass)



// const memofun = () => {
//     const memoizedValue = useMemo(() => {
//       // your expensive computation here
//       return "memoized value";
//     }, []);


// const memoizedFunction = useCallback(() => {
//     props.func(pass)
// }, [pass]);



// if(pass){
//     memoizedFunction()
//     }
// else{
// console.log("eeeeeeee")
// }

// useEffect(()=>{
//     props.func(pass)
// },[pass])

    return (
        <div>
            <nav className='header'>
                <Link to="/home">
                    <img className='header_logo' alt="logo" src='https://logos-world.net/wp-content/uploads/2020/04/Amazon-Emblem.jpg' />
            </Link>
                <div className='header_search'>
                    <Search className="header_searchIcon" />
                    <input className='header_searchInput' type="text"  onChange={handlechange}/>
                </div>

                <div className='header_nav'>
                    <Link to="/home" className='header_link'>
                        <div className='header_option'>
                            <span className='header_option_one'>Hello</span>
                            <span className='header_option_two'>{Name}</span>
                        </div>
                    </Link>

                    <Link to="/checkout" className='header_link'>
                        <div className='header_option_basket'>
                            <ShoppingBasket />
                            <span className='header_option_Two  header_basketCount'>{storeitems}</span>
                        </div></Link>


                    <Link to="/checkout" className='header_link'>
                        <div className='header_option'>
                            <span className='header_option_One'>Total</span>
                            <span className='header_option_Two'> {Total}</span>
                        </div>
                    </Link>


                    <Link to="/" className='header_link'>
                        <div className='header_option'>
                            {/* <span className='header_option_One'>Your Prime</span> */}
                                <h4 className='header_option_wo'>Sign out</h4> 
                            {/* <span className='header_option_Two'>Sign out</span> */}
                        </div>
                    </Link>


                </div>
            </nav>



            {/* <Home /> */}
        </div>
    )
}

export default Header
























