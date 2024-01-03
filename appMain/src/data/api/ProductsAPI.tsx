import React from "react";

// ProductsAPI
//  fetch the products from the API and return it to the app-context.tsx
const ProductsAPI = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products");
        return response.json();
    }
    catch (error) {
        throw new Error ("Network response was not okay");
    }

}

export default ProductsAPI;