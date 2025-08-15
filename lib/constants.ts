export const BRAND_NAME = "luxury FashionTV cosmetics";

export const COLORS = {
    PRIMARY: "#FFC0CB", // Pink
    SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
    SITE_TITLE: ${BRAND_NAME} - Elevate Your Beauty,
    TAGLINE: "Unleash Your Inner Luxury",
    DESCRIPTION: "Discover the finest in luxury cosmetics with luxury FashionTV cosmetics. Our curated collection embodies elegance, sophistication, and the essence of fashion.",
    KEYWORDS: "luxury cosmetics, fashion beauty, high-end makeup, luxury FashionTV",
    CONTACT_EMAIL: "contact@luxuryfashiontvcosmetics.com",
    SOCIAL_MEDIA: {
        INSTAGRAM: "https://instagram.com/luxuryfashiontvcosmetics",
        FACEBOOK: "https://facebook.com/luxuryfashiontvcosmetics",
        TWITTER: "https://twitter.com/luxuryfashiontvcosmetics",
    },
};

/
 * Interface representing a product in the luxury FashionTV cosmetics line.
 */
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    category: string;
    inStock: boolean;
}

/
 * Interface representing a customer order for luxury FashionTV cosmetics.
 */
export interface Order {
    orderId: string;
    products: Product[];
    totalAmount: number;
    customerEmail: string;
    orderDate: Date;
}

/
 * Function to create a new product for luxury FashionTV cosmetics.
 * @param {Product} product - The product details to be added.
 * @returns {void}
 */
export function addProduct(product: Product): void {
    // Logic to add product to the inventory
}

/
 * Function to process a new order for luxury FashionTV cosmetics.
 * @param {Order} order - The order details to be processed.
 * @returns {void}
 */
export function processOrder(order: Order): void {
    // Logic to process the customer order
}