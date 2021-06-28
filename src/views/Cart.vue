<template>

    <!-- CART-->
        <section class="cart bg-f8 p-t-120 p-b-120">
            <div class="container">
                <div class="table-responsive">
                    <table class="table table-cart">
                        <thead class="thead-dark">
                            <tr>
                                <th></th>
                                <th>product</th>
                                <th>price</th>
                                <th>color</th>
                                <th>size</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in cartItems" :key="item.id">
                                <td class="text-center">
                                    <a @click="removeFromCart(item.id)" class="remove" href="#">
                                        <i class="zmdi zmdi-close"></i>
                                    </a>
                                </td>
                                <td>
                                    <div class="cart-product clearfix">
                                        <div class="image">
                                            <a href="product-detail.html">
                                                <img  :src="makeImagePath(item)"  alt="Pink Punk">
                                            </a>
                                        </div>
                                        <div class="name">
                                            {{ item.name }}
                                        </div>
                                    </div>
                                </td>
                                <td class="text">KES {{ item.price }}</td>
                                <td>
                                    <div class="quantity">
                                     {{ item.color }}
                                    </div>
                                </td>
                                <td class="text"> {{ item.size }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div class="form-cart clearfix">
                    <form class="float-left" method="POST">
                        <input class="au-input au-input--color-ce" type="text" placeholder="Coupon code">
                        <button class="au-btn au-btn--dark m-l-25" type="submit">Apply coupon</button>
                    </form>
                    <a class="au-btn au-btn--dark float-right au-btn--p40" href="#">update cart</a>
                </div>
                <div class="cart-total">
                    <h4 class="title title--semibold">{{ cartItemsCount }} Item(s)</h4>
                    <div class="table-responsive">
                        <table class="table table-cart-total table-bordered">
                            <tr>
                                <td class="title">subtotal</td>
                                <td class="value">{{ itemsSubTotal }}</td>
                            </tr>
                          
                            <tr>
                                <td class="title">Shipping ({{ salesTaxPercentage }})</td>
                                <td class="value--total">
                                  
                                  <div class="au-input-group">
                                      <select v-model="selectedShippingOption" class="au-form-control au-form-control--full">
                                          <option disabled value="">Select Shipping Option</option>
                                          <option v-for="option in shippingOptionsArray" :key="option.text" :value="option.rate">
                                              {{ option.text }} (${{ option.rate }})
                                          </option>
                                      </select>
                                  </div>
                                </td>
                            </tr>
                            <tr>
                                <td class="title">Sub Total</td>
                                <td class="value--total">{{ subtotal }}</td>
                            </tr>
                            <tr>
                                <td class="title">Tax ({{ salesTaxPercentage }})</td>
                                <td class="value--total">{{ salesTaxApplied }}</td>
                            </tr>
                            <tr>
                                <td class="title">Total</td>
                                <td class="value--total">{{ total }}</td>
                            </tr>
                        </table>
                    </div>
                    <button :disabled="!this.selectedShippingOption" class="au-btn au-btn--dark m-t-30">Proceed to Checkout</button>
                  
                </div>
            </div>
        </section>
        <!-- END CART-->


</template>

<script>
import { imagePath } from '@/mixins/imagePath.js';

export default {
    name: 'cart',
    mixins: [ imagePath ],
    data (){
        return {
          salesTax: 0.06,
          selectedShippingOption: '',
          shippingOptionsArray: [
              {
              text: 'One day',
              rate: 20,
              },
              {
              text: 'Two days',
              rate: 15,
              },
              {
              text: 'Three to five days',
              rate: 10,
              },
              {
              text: 'One week or more',
              rate: 5,
              },
          ],
        };
    },
    computed: {
        cartItems() {
            return this.$store.getters.cartItems;
        },
        cartItemsCount() {
            return this.cartItems.length;
        },
        itemsSubTotal() {
            return this.cartItems.reduce((total, item) => total + item.price, 0);
        },
        subtotal(){
            if (this.selectedShippingOption) {
                return Number(this.itemsSubTotal) + Number(this.selectedShippingOption);
            }
            return'---';
        },
        salesTaxPercentage() {
            return `${this.salesTax * 100}%`;
        },
        salesTaxApplied() {
            if (this.selectedShippingOption) {
                return (this.subtotal * this.salesTax).toFixed(2);
            }
            return '---';
        },
        total() {
            if (this.selectedShippingOption) {
                return Number(this.subtotal) + Number(this.salesTaxApplied);
            }
            return '---';
        },
    },
    methods: {
        removeFromCart (itemId) {
            this.$store.dispatch('removeFromCart', itemId)
        },
    },
};
</script>

<style lang="scss">
.cart-list {
  width: 70%;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.cart-item {
  width: 100%;
  border-bottom: 1px solid #b6bcc2;
}
.cart-list-details {
  flex: 2;
  justify-content: space-between;
  margin-left: 2rem;
}
.cart-list__btn-remove {
  margin-top: .5rem;
  &:hover {
    color: red;
  }
}
.item-image {
  max-width: 50px;
  margin-top: .5rem;
}
.total-section {
  background: #FAFAFA;
  padding: 0 1rem 1rem;
  min-width: 33%;
}
.total-section-list {
  margin: 0;
}
.total-section__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.totalitem-label {
  font-weight: bold;
  margin-right: 1rem;
}
</style>
