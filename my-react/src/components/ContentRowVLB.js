import React from 'react';
import { useState, useEffect } from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */





function ContentRowProducts(){
    
    
    const [product, setProduct] = useState([])	
	useEffect(()=>{
		let endPoint = `http://localhost:3000/api/products/`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setProduct(data.count);
			})
		.catch(err => console.log(err))
	}, [])

    const [user, setUser] = useState([])	
	useEffect(()=>{
		let endPoint = `http://localhost:3000/api/users/`
		fetch(endPoint)
		.then(res=>res.json())
		.then((data) => {
				setUser(data.count);
			})
		.catch(err => console.log(err))
	}, [])
    


    let productsInDb = {
        title: 'Products in Data Base',
        color: 'primary', 
        cuantity: product,
        icon: 'fa-truck-loading'
    }
    
    let usersInDb = {
        title:'Users in Data Base', 
        color:'success', 
        cuantity: user,
        icon:'fa-user'
    }
    
    
    let cartProps = [productsInDb, usersInDb];
    return (
    
        <div className="row">
            
            {cartProps.map( (card, i) => {

                return <SmallCard {...card} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowProducts;