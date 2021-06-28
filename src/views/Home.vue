<template>
  <div class="home">
      
    <section class="wrapper">
    <!-- PAGE TITLE-->
    <section class="page-title js-parallax-scroll p-t-175 p-b-175" >
        <div class="bg-overlay bg-overlay--opa30"></div>
        <div class="page-title__inner">
            <div class="col-md-5 ml-auto">
                <h2>Shop for the best handmade outfits & accessories</h2>
                <p class="mt-2 text-white">Elegance isn't solely defined by what you wear. It's how you carry yourself, how you speak, what you read.</p>
                <a href="" class="btn btn-primary mt-4">Shop Now</a>
            </div>
        </div>
    </section>
    <!-- END PAGE TITLE-->

        <!-- SHOP-->
        <section class="shop p-t-70">
            <div class="container">
                <h2 class="title m-b-60">
                    Explore Popular Categories
                </h2>
                <div class="row">
                    <div v-for="product in featuredProducts" :key="product.id" class="col-lg-6">
                       <router-link :to="{ name: 'product', params: { id: product.id}}">
                        <div class="shop__item">
                            <div class="image">
                                <div class="bg-overlay bg-overlay--opa30"></div>
                                <img :src="makeImagePath(product)" alt="">
                                <div class="tool-box">
                                    <a class="js-addcart" href="#">
                                        <i class="zmdi zmdi-shopping-cart"></i>
                                    </a>
                                    <a href="product-detail.html">
                                        <i class="fas fa-expand-arrows-alt"></i>
                                    </a>
                                </div>
                            </div>
                            <div class="content">
                                <h3>
                                    <a class="js-name" href="product-detail.html">{{ product.name }}</a>
                                </h3>
                                <span class="price">Starting  From KES {{ product.price }}</span>
                            </div>
                        </div>
                       </router-link>
                    </div>
                </div>
            </div>
          </section>





     
    </section>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default {
  name: "Home",
  mixins: [imagePath],
  computed:{
    featuredProducts: function(){
      return this.$store.getters.featuredProducts.slice(0,9)
    }
  },
  methods: {
    imagePath(product){
      return require(`../assets/img/${product.images[0]}`);
    }
  }
};
</script>

<style lan="scss">
.page-title{
  background: url('../assets/img/bg-title-06.jpg') center center / contain no-repeat fixed;
}
</style>