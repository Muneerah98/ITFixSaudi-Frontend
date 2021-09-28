import React , { useState, useEffect }from 'react'
import axios from 'axios'
export default function CustomerOrderView({user}) {

    const [flag, setFlag] = useState(false)

    useEffect(() =>{
        const user1 = user._id&&user._id
        axios.get('http://localhost:4000/api/v1/order/allOrders')
        .then(data =>{
            setAllOrders(data.data.allOrders)
            console.log(data.data)
        }).catch(error => {
            console.log(error)
        })
    },[flag])

    return (
    <>
        <div>   
        </div> 
        </>
    )
        
}



