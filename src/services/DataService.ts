import Cart from '@/entities/Cart';
import axios from 'axios'
import Product from '../entities/Product';
import { useAuthStore } from '@/stores/auth';
import Order from '@/entities/Order';
import type User from '@/entities/User';
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
    async getCart(userId: number): Promise<Cart> {
        let cart = Cart.emptyInstance()
        try {
            const response = await axios.get(`carts/user/${userId}`)
            cart = new Cart(response.data.cart)
        } catch (error) {
            console.log(error);

        }
        return cart
    },
    async updateCart(cart: Cart) {
        const authStore = useAuthStore()
        try {
            axios.put(`carts/${cart.id}`, JSON.stringify({ products: cart.products, userId: authStore.user.id }))
        } catch (err) {
            console.log(err);
        }
    },
    async getOrder(userId: number): Promise<Order> {
        let order = Order.emptyInstance()
        try {
            const response = await axios.get(`orders/user/${userId}`)
            order = new Order(response.data.order)
        } catch (error) {
            console.log(error);

        }
        return order
    },
    async getOrders(): Promise<Array<Order>> {
        let arr: Order[] = []
        try {
            const response = await axios.get(`orders/`)
            response.data.orders?.forEach((el: Order) => {
                const o = new Order(el)
                o.createdAt = new Date(o.createdAt)

                arr.push(o);
            });
        } catch (error) {
            console.log(error);

        }
        return arr
    },
    async createOrder(cart: Cart) {
        const authStore = useAuthStore()
        try {
            axios.post(`orders/add`, JSON.stringify({ products: cart.products, userId: authStore.user?.id }))
        } catch (err) {
            console.log(err);

        }
    },
    async getAllUsers(): Promise<Array<User>> {
        const arr: User[] = [];
        try {
            const response = await axios.get('/users/')
            response.data.users.forEach((el: User) => {
                el.createdAt = new Date(el.createdAt)
                arr.push(el);
            });
        } catch (error) {
            console.log(error);

        }
        return arr;
    }
}