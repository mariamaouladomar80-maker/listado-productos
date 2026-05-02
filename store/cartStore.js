import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      
      addToCart: (product) => set((state) => {
        const exists = state.cart.find(item => item.id === product.id);
        if (exists) {
          return {
            cart: state.cart.map(item =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          };
        }
        return { cart: [...state.cart, { ...product, quantity: 1 }] };
      }),
      
      removeFromCart: (productId) => set((state) => ({
        cart: state.cart.filter(item => item.id !== productId)
      })),
      
      getTotalItems: () => {
        return get().cart.reduce((total, item) => total + item.quantity, 0);
      }
    }),
    {
      name: 'cart-storage', // nombre en localStorage
    }
  )
)