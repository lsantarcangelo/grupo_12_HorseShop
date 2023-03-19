import React from 'react';
import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */


function ContentRowProducts(){
    
    
    const [product, setProduct] = useState([])	
	useEffect(()=>{
		fetch("http://localhost:3000/api/products/")
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.count);
			})
		.catch(err => console.log(err))
	}, [])

    const [user, setUser] = useState([])	
	useEffect(()=>{
		fetch("http://localhost:3000/api/users/")
		.then(res=>res.json())
		.then((data) => {
				setUser(data.count);
			})
		.catch(err => console.log(err))
	}, [])

    const [category, setCategory] = useState([])	
	useEffect(()=>{
		fetch("http://localhost:3000/api/categories/")
		.then(res=>res.json())
		.then((data) => {
            setCategory(data.count);
			})
		.catch(err => console.log(err))
	}, [])
    

    let productsInDb = {
        title: 'Products in Data Base',
        color: 'primary', 
        count: product,
        icon: 'fa-truck-loading'
    }
    
    let usersInDb = {
        title:'Users in Data Base', 
        color:'success', 
        count: user,
        icon:'fa-user'
    }

    let categoriesInDb = {
        title:'Categories in Data Base', 
        color:'warning', 
        count: category,
        icon:'fa-user'
    }
    
    
    let cartProps = [productsInDb, usersInDb, categoriesInDb];
    return (
    
        <div className="row">
            
            {cartProps.map( (element, i) => {

                return <SmallCard {...element} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;
