<template>
        <!-- PRODUCT DETAIL-->
        <section class="product-detail p-t-50 p-b-80">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6"><img :src="makeImagePath(product)" alt="Sing From The Heart"></div>
                    <div class="col-lg-5 ml-auto">
                        <ul>
                            <h1 class="title title--semibold js-name">{{ product.name }}</h1>
                            <li class="">Price: KES {{ product.price }}</li>
                            <li class="">Size: {{ product.size }}</li>
                            <li class="">Color: {{ product.color }}</li>
                            <li class=""> {{ product.quantity }} <em>Left in stock</em></li>
                        </ul>
                        <h3>Details</h3>
                        <ul>
                            <li>Material: {{product.details.material}} </li>
                            <li>Fit: {{product.details.fit}} </li>
                            <li>Maintenance: {{product.details.maintenance}} </li>
                        </ul>
                        <p v-if="product.details.additional">Additional Info: {{product.detail.additional}} </p>
                        
        <button @click="addToCart" class="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- END PRODUCT DETAIL-->
  
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default{
    name:'product',
    mixins: [imagePath],
    data() {
        return{
            product: this.$store.getters.product(this.$route.params.id)
        }
    },
    methods: {
        addToCart() {
            this.$store.dispatch('addToCart', this.$route.params.id)
        }
    }
};
</script>
