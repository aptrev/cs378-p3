import React from "react";

const MenuFooter = ({ cost, handleOrder, handleClearAll }) => {
  return (
    <div className="row mt-5 mb-3">
        {/* Total Section */}
        <div className="d-flex justify-content-center align-items-center gap-3">
            <p className="mb-0 fw-bold">Subtotal: ${cost.toFixed(2)}</p>
            {/* Order and Clear All Section */}
            <button className="btn btn-outline-dark rounded-pill border-2" onClick={handleOrder}>
            Order
            </button>
            <button className="btn btn-outline-dark rounded-pill border-2" onClick={handleClearAll}>
            Clear All
            </button>
        </div>
    </div>
  );
};

export default MenuFooter;
