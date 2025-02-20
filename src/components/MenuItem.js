import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const MenuItem = ({ title, description, imageName, price, handleItemChange, resetItems }) => {
    // State to track the count of the item in the cart (initially 0)
    const [itemCount, setItemCount] = useState(0);

    // Effect hook to reset the item count when resetItems changes to true
    useEffect(() => {
        if (resetItems) setItemCount(0); 
    }, [resetItems]);

    // Handles adding an item to the cart by increasing item count by 1
    const handleAdd = () => {
        setItemCount(prevCount => {
            const newCount = prevCount + 1;
            handleItemChange(title, newCount, price); // Update the cart
            return newCount;
        });
    };

    // Handles removing an item from the cart by decreasing item count by 1
    const handleRemove = () => {
        if (itemCount > 0) { // Ensure count doesn't go below 0
            setItemCount(prevCount => {
                const newCount = prevCount - 1; 
                handleItemChange(title, newCount, price); // Update the cart
                return newCount;
            });
        }
    };

    return (
        <div>
        <div className="row mb-3">
            {/* Image Column */}
            <div className="col-5 text-center">
                <div className="img-container">
                    <img src={`images/${imageName}`} alt={title} className="img-fluid" style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
                </div>
            </div>

            {/* Details Column */}
            <div className="col-7">
                <div className="row">
                    {/* Name & Description Col */}
                    <div className='col-4'>
                        <p className="item-name">{title}</p>
                        <p className="item-description">{description}</p>
                    </div>
                    {/* Price & Button Col */}
                    <div className="col-8 d-flex flex-column align-items-center">
                        <p className="fw-bold mb-2">${price.toFixed(2)}</p>
                        <div className="d-flex align-items-center">
                            <button className="btn btn-outline-primary" onClick={handleRemove} disabled={itemCount === 0}>-</button>
                            <span className="mx-3">{itemCount}</span>
                            <button className="btn btn-outline-primary" onClick={handleAdd}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
    );
};

export default MenuItem;
