import React from 'react'
import "./Home.css"
import Product from './Product'
function Home() {
    return (
        <div className="home">
            
            <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
            alt="Main Advertisment page of amazon" />

            {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/Xiaomi/Mi_days/August/D14588853_IN_WLME_Xiaomi_Landing_Page_DesktopTallHero_1500x600_2._CB407335601_.jpg" 
            alt="Main Advertisment page of amazon" /> */}
        
            {/* <img className="home_image" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/New_Family/R_CitiBank/V236162080_SamsungM_NewFamily_M-series_1500x600._CB407321270_.jpg" 
            alt="Main Advertisment page of amazon" /> */}
        {/* Product id, title, price, rating, image */}
        <div className="home_row">
            <Product
                id="1"
                title="Harry Potter Box Set: The Complete Collection (Children’s Paperback) (Set of 7 Volumes)"
                price={2422}
                rating={5}
                image={"https://images-na.ssl-images-amazon.com/images/I/51grtVWQzIL._SY407_BO1,204,203,200_.jpg"}
            
            />
             <Product
                id="2"
                title="A Game of Thrones (A Song of Ice and Fire) Paperback – 1 January 2012 "
                price={499}
                rating={4}
                image={"https://images-na.ssl-images-amazon.com/images/I/51HoTTx2ZhL._SX327_BO1,204,203,200_.jpg"}

            />
        </div>
        <div className="home_row">
            <Product
                id="3"
                title="Apple iPhone 11 (128GB) - White"
                price={72600}
                rating={3}
                image={"https://images-na.ssl-images-amazon.com/images/I/51o5RmQtroL._SL1024_.jpg"}
            
            />
             <Product
                id="4"
                title="Samsung Galaxy S10 Plus (Blue, 8GB RAM, 128GB Storage)"
                price={55999}
                rating={4}
                image={"https://images-na.ssl-images-amazon.com/images/I/61fv4VZRQ7L._SY679_.jpg"}
            
            />
            <Product
                id="5"
                title="Vivo Z1x 6GB 64GB (Fusion Blue)"
                price={17400}
                rating={5}
                image={"https://images-na.ssl-images-amazon.com/images/I/4163N5X5v7L.jpg"}
            
            />
        </div>
        <div className="home_row">
            <Product
                id="6"
                title="Samsung 190.5 cm (75 Inches) Series 8 4K UHD LED Smart TV UA75NU8000K (Black) (2018 model)"
                price={352900}
                rating={4}
                image={"https://m.media-amazon.com/images/I/91IttqgqY9L._AC_UY218_.jpg"}
            
            />
        </div>
        {/* Product */}
        </div>
    )
}

export default Home
