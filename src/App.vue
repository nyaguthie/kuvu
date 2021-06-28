<template>
  <div id="app">



    <div class="container">

        <header class="header-desktop header-1 d-none d-lg-block">
            <div class="container-fluid">
                <div class="section__content section__content--w1760">
                    <div class="row no-gutters header__content">
                        <div class="col-md-5">
                            <div class="mini-cart-btn">
                              <router-link to="/cart">
                                <span class="icon">
                                  <i class="fa fa-shopping-bag"></i>
                                    <span class="number-wrap">
                                        <counter-badge :count="cartCount" class="number"></counter-badge>
                                    </span>
                                </span>
                              </router-link>
                            </div>
                        </div>
                        <div class="col-md-2 logo-wrap">
                            <router-link to="/">
                                KUVU
                            </router-link>
                        </div>
                        <div class="col-md-5 navheader-wrap">
                            <nav class="nav-header">
                                <ul class="list-unstyled list-inline">
                                    <li class="list-inline-item has-mega">
                                        <router-link to="/">Home</router-link> 
                                    </li>
                                    <li class="list-inline-item has-mega">
                                         <router-link :to="{name: 'gender-overview', params: {gender: 'women'}}">Women</router-link> 
                                    </li>
                                    <li class="list-inline-item has-mega">
                                         <router-link :to="{name: 'gender-overview', params: {gender: 'men'}}">Men</router-link> 
                                    </li>
                                </ul>
                            </nav>
                            <div class="search-btn-wrap">
                                <button class="search-btn" data-toggle="modal" data-target="#searchModal">
                                    <i class="fa fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>

    <router-view />
    
        <!-- FOOTER-->
        <footer class="footer footer--dark">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4">
                        <div class="footer__logo">
                            <a href="index.html">
                                KUVU
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer__social">
                            <a href="#">
                                <i class="zmdi zmdi-facebook"></i>
                            </a>
                            <a href="#">
                                <i class="zmdi zmdi-instagram"></i>
                            </a>
                            <a href="#">
                                <i class="zmdi zmdi-twitter"></i>
                            </a>
                            <a class="mr-0" href="#">
                                <i class="zmdi zmdi-dribbble"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="footer__copyright">© 2021 KUVU all rights reserved</div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- END FOOTER-->
  </div>
</template>
<script>
import CounterBadge from '@/components/CounterBadge';

export default {
  name: 'app',
  components: {CounterBadge},
  computed: {
    cartCount() {
      return this.$store.state.cart.length
    }
  }
}
</script>

<style lang="scss">

@import "./assets/css/bootstrap.min.css";
@import "./assets/css/theme.css";
@import "./assets/css/font-face.css";
@import "./assets/font-awesome-4.7/css/font-awesome.min.css";
@import "./assets/mdi-font/css/material-design-iconic-font.min.css";

body{
  overflow-x: hidden;
}


#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    position: relative;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
