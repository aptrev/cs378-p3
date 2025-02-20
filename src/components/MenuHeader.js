import React from "react";

// Header component
const MenuHeader = () => {
    return (
        <div>
            {/* Title Section */}
            <div className="title">
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-2 col-sm-5 col-md-5 text-end">
                        <img src="images/food_logo.jpg" alt="Logo" style={{ width: "60px" }} />
                    </div>
                    <div className="col-10 col-sm-7 col-md-7 text-start">
                        <h1 className="name">CAMPUS CAFE</h1>
                    </div>
                    </div>
                </div>
            </div>
            {/* Motto Section */}
            <div className="motto text-center mt-3">
                <h4 className="description">Delicious, From-Scratch Recipes Close at Hand</h4>
                <h2 className="slogan">The Fresh Choice of UT!</h2>
            </div>
        </div>
    );
};

export default MenuHeader;