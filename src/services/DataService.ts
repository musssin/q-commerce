import Cart from '@/entities/Cart';
import axios from 'axios'
import Product from '../entities/Product';
import { useAuthStore } from '@/stores/auth';
export const DataService = {
    async getCategories(): Promise<Array<String>> {
        const arr: String[] = [];
        try {
            const response = await axios.get('/products/categories')
            response.data.forEach((el: String) => {
                arr.push(el);
            });
        } catch (error) {
            console.log(error);

        }
        return arr;
    },
    async getBrands(): Promise<Array<String>> {
        const arr: String[] = [];
        try {
            const response = await axios.get('/products/brands')
            response.data.forEach((el: String) => {
                arr.push(el);
            });
        } catch (error) {
            console.log(error);

        }
        return arr;
    },
    async getProducts(): Promise<Array<Product>> {
        const arr: Product[] = []
        try {
            const response = await axios.get('/products')
            response.data.products?.forEach((el: Product) => {
                const p = new Product(el)
                arr.push(p);
            });
        } catch (error) {
            console.log(error);

        }

        return arr
    },
    async getCart(userId: number): Promise<Cart>{
        let cart = Cart.emptyInstance()
        try {
            const response = await axios.get(`carts/user/${userId}`)
            cart = new Cart(response.data.cart)
        } catch (error) {
            console.log(error);

        }
        return cart
    },
    async updateCart(cart: Cart){
        const authStore = useAuthStore()
        try {
            axios.put(`carts/${cart.id}`, JSON.stringify({products: cart.products, userId: authStore.user.id}))
        } catch (err) {
            console.log(err);
            
        }
        
    }
}