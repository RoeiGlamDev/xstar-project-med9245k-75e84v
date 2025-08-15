import { css } from 'styled-components';

/
 * Utility functions for luxury FashionTV cosmetics application.
 * This module contains custom functions and formatters that enhance the user experience
 * on our luxury cosmetics website, ensuring a seamless and elegant design aligned with our brand.
 * 
 * @module utils
 */

/
 * Custom function to concatenate class names conditionally.
 * This function helps maintain a clean and elegant style for luxury FashionTV cosmetics.
 * 
 * @param {...(string | undefined | false)} classes - List of class names to concatenate.
 * @returns {string} - A single string of concatenated class names.
 */
export function cn(...classes: (string | undefined | false)[]): string {
    return classes.filter(Boolean).join(' ');
}

/
 * Formatter for currency to represent prices in a luxurious manner.
 * This formatter will be used to display product prices on the luxury FashionTV cosmetics website.
 * 
 * @param {number} amount - The amount to format.
 * @returns {string} - The formatted currency string.
 */
export function formatCurrency(amount: number): string {
    return $${amount.toFixed(2)}; // Example formatting, adjust as necessary for luxury context
}

/
 * Interface representing a cosmetic product in the luxury FashionTV cosmetics line.
 * This interface ensures that all product objects conform to the expected structure
 * of high-end cosmetics offerings.
 * 
 * @interface Product
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string; // e.g., "lipstick", "foundation"
    isFeatured: boolean; // Indicates if the product is a featured luxury item
}

/
 * Function to generate a featured product display style.
 * This function creates a styled component for displaying featured luxury cosmetics, 
 * aligning with the pink and white theme of luxury FashionTV cosmetics.
 * 
 * @returns {string} - The CSS styles for featured product display.
 */
export function featuredProductStyles(): string {
    return css
        background-color: white;
        border: 2px solid pink;
        border-radius: 10px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s;
        
        &:hover {
            transform: scale(1.05);
        }
    ;
}

/
 * Interface representing the state of the shopping cart in luxury FashionTV cosmetics.
 * This interface helps manage the luxury shopping experience by tracking selected products.
 *
 * @interface ShoppingCart
 */
export interface ShoppingCart {
    items: Product[];
    totalAmount: number;
    itemCount: number;
}

/
 * Function to calculate the total amount of items in the shopping cart.
 * This function ensures that the luxury FashionTV cosmetics customers have a clear
 * understanding of their total expenditure while shopping.
 * 
 * @param {ShoppingCart} cart - The current shopping cart.
 * @returns {number} - The total amount of the shopping cart.
 */
export function calculateTotal(cart: ShoppingCart): number {
    return cart.items.reduce((total, item) => total + item.price, 0);
}