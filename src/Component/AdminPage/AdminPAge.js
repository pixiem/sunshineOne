import { React, useState } from 'react';
import Navbars from '../Navbar/Navbar';
import "./AdminPage.css"
import axios from 'axios';

const AdminPAge = () => {
    //PAGE SELECT
    const [addFood, setAddfood] = useState(true)
    const [deleteFood, setDeletefood] = useState(false)
    const [bestSeller, setBestSeller] = useState(false)
    //-------POST FOOD START ------->
    const [foodName, setFoodName] = useState('')
    const [foodCost, setFoodCost] = useState('')
    const [foodItem, setFoodItem] = useState('')
    const [foodCountry, setFoodCountry] = useState('')
    const [foodImage, setFoodImage] = useState(null)


    const foodNameInput = (e) => {
        setFoodName(e.target.value)
    }
    const foodPriceInput = (e) => {
        setFoodCost(e.target.value)
    }
    const foodItemInput = (e) => {
        setFoodItem(e.target.value)
    }
 
    const foodSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('foodName',foodName); 
        formData.append('foodPrice',foodCost); 
        formData.append('foodItem',foodItem); 
        formData.append('foodCountry',foodCountry); 
        formData.append('foodImage',foodImage); 
        // axios.post('http://localhost:5000/addfood', formData)
        fetch('http://localhost:5000/addfood',{
            method:'POST',
            body: formData
        })
        
        .then(res => console.log(res));
       
    e.target.reset();


    }
    //------POST FOOD END--------->
    return (<>
        <Navbars></Navbars>
        {/* -----Button Group Start------  */}
        <div style={{ display: "flex", justifyContent: "center" }} className='d-flex flex-wrap m-5'>
            <button onClick={() => {
                setAddfood(true);
                setDeletefood(false);
                setBestSeller(false)
            }} className='shadow-lg' style={{ width: "130px", backgroundColor: "#11a0f5", margin: "10px", color: "white", borderRadius: "10px" }}>
                <div><img width="30%" src="/add.png" alt="" /></div> <span style={{ fontWeight: "600", marginTop: "8px" }}> Add Food</span> </button>
            <button onClick={() => {
                setAddfood(false);
                setDeletefood(true);
                setBestSeller(false)
            }} className='shadow-lg' style={{ width: "130px", backgroundColor: "#ffbd32", margin: "10px", color: "white", borderRadius: "15px" }}>
                <div><img width="30%" src="/delete.png" alt="" /></div> <span style={{ fontWeight: "600", marginTop: "8px" }}> Delete Food</span> </button>
            <button onClick={() => {
                setAddfood(false);
                setDeletefood(false);
                setBestSeller(true)
            }} className='shadow-lg' style={{ width: "130px", backgroundColor: " rgb(47 50 47)", margin: "10px", borderRadius: "15px", color: "white" }}>
                <div><img width="30%" src="/trendingLogo.png" alt="" /></div> <span style={{ fontWeight: "600", marginTop: "8px" }}> Best Seller</span> </button>
            <button className='shadow-lg' style={{ width: "130px", backgroundColor: "#11a0f5", margin: "10px", borderRadius: "15px" }}>
                <div><img width="20%" src="/add.png" alt="" /></div> <span style={{ fontWeight: "600", marginTop: "8px" }}> Add Products</span> </button>

        </div>
        {/* -----Button Group End------  */}
        {/* -----Admin Access ADD FOOD Start------  */}
        {addFood && <div className='d-flex justify-content-center'>

            <form onSubmit={foodSubmit} action="">
                <h1>Add Food</h1>
                <span>Food Name</span> <br />
                <input onChange={foodNameInput} type="text" /> <br />
                <span>Food Price</span> <br />
                <input onChange={foodPriceInput} type="text" /> <br />
                <span>This Food Made With?</span>
                 <br />
                 <input onChange={foodItemInput} type="text" /> <br />
                <span>Country</span> <br />
                <select onChange={(e)=>{setFoodCountry(e.target.value)}} name="cars" id="cars">
                <option value="volvo">Home</option>
                <option value="saab">Indian</option>
                <option value="mercedes">Bangladeshi</option>
                <option value="audi">Chinese</option>
                </select> <br />
                <span>Food Image</span> <br />
                <input accept='image/*'type='file'  onChange={e=> setFoodImage(e.target.files[0])} />
<br />
                <button type='submit'>Add Food</button>
            </form>
        </div>}
        {/* -----Admin Access DELETE FOOD Start------  */}
        {deleteFood && <div>
            <h1>DELETE FOOD</h1>

        </div>}
        {/* -----Admin Access Best Selller Start------  */}
        {bestSeller && <div>
            <h1>Best Seller</h1>

        </div>}





    </>
    );
};
export default AdminPAge;