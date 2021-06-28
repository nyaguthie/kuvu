import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [ 53363 ],
    products: [

      {
        name: "Crewneck T-Shirt",
        id: 53362,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "men",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53362-1.jpg',
          '53362-2.jpg',
          '53362-3.jpg',
        ]
      },
      {
        name: "Cardigan Sweater",
        id: 53363,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Sweaters",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53363-1.jpg',
          '53363-2.jpg',
          '53363-3.jpg',
          '53363-4.jpg',
          '53363-5.jpg',
        ]
      },
      {
        name: "Slim Fit Jeans",
        id: 53364,
        featured: true,
        price: 29.5,
        color: "navy",
        size: {
          waist: 32,
          length: 32,
        },
        gender: "men",
        quantity: 5,
        dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Pants",
        details: {
          material: "denim",
          fit: "slim",
          maintenance: "machine wash cold with like colors, air dry",
          additional: ""
        },
        images: [
          '53364-1.jpg',
          '53364-2.jpg',
          '53364-3.jpg',
          '53364-4.jpg',
          '53364-5.jpg',
        ]
      },
      {
        name: "Floral Ruffle Wrap Dress",
        id: 53365,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Dresses",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53365-1.jpg',
          '53365-2.jpg',
          '53365-3.jpg',
        ]
      },
      {
        name: "SUPIMA® Cotton Polka Dot T-Shirt",
        id: 53366,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53366-1.jpg',
          '53366-2.jpg',
          '53366-3.jpg',
        ]
      },
      {
        name: "Luxury-Touch Palm Print Polo",
        id: 53367,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "Men",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shirts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53367-1.jpg',
          '53367-2.jpg',
          '53367-3.jpg',
        ]
      },
      {
        name: "9-inch Core Temp Aiden Slim Short",
        id: 53368,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "men",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shorts",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53368-1.jpg',
          '53368-2.jpg',
          '53368-3.jpg',
        ]
      },
      {
        name: "Bare High Block-Heel Sandal",
        id: 53369,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "women",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53369-1.jpg',
          '53369-2.jpg',
          '53369-3.jpg',
        ]
      },
      {
        name: "Nicklas Suede Sneaker",
        id: 53370,
        featured: true,
        price: 49.5,
        color: "red",
        size: "medium",
        gender: "men",
        quantity: 8,
        dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
        category: "Shoes",
        details: {
          material: "cotton",
          fit: "regular",
          maintenance: "machine wash cold, air dry",
          additional: ""
        },
        images: [
          '53370-1.jpg',
          '53370-2.jpg',
          '53370-3.jpg',
        ]
      },
    ]
  },
  mutations: {
    addToCart (state, payload) {
      state.cart.push( Number(payload))
    },
    removeFromCart (state, payload){
      let indexToDelete = state.cart.indexOf( Number(payload));
      state.cart.splice(indexToDelete, 1)
    },
    decrementProductInventory(state, payload){
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity--;
    },
    incrementProductInventory(state, payload) {
      let product = state.products.find(product => product.id === Number(payload))
      product.quantity++;
    }
  },
  actions: {
    addToCart({ commit }, payload) {
      commit('addToCart', payload)
      commit('decrementProductInventory', payload)
    },
    removeFromCart({commit}, payload) {
      commit('removeFromCart', payload)
      commit('incrementProductInventory', payload)
    }
  },
  modules: {},
  getters: {
    product: (state) => (id) => {
      return state.products.filter (p => p.id === Number (id)) [0]
    },
    cartItems: (state) => {
      return state.cart.map(
        itemId => state.products.find(
          product => product.id === itemId
        )
      )
    },
    featuredProducts: (state) => {
      return state.products.filter(p => p.featured)
    },
    productsByGender: (state) => (gender) => {
      return state.products.filter(p => p.gender === gender)
    },
    productsByCateory: (category) => {
      return this.state.products.filter(p => p.category === category)
    }
  }
});
