<template>
  <div>
    <h1 class="wrapper">{{ pageTitle }}</h1>
    <ul class="wrapper item-grid">
        <li v-for="product in productsByGender" :key="product.id" class="item-grid__item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" :src="makeImagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>KES {{ product.price }}</em></p>
          </router-link>
        </li>
      </ul>
      
      <div class="wrapper random-items-wrapper">
        <h2>Our Recommendations</h2>
        <p>Try these on for size!</p>
        <section class="random-items">
            <ul>
                <li>
                    <router-link :to="{name: 'product', params: {id: randomTopId}}">
                        <img :src="makeImagePath(randomTop)" alt="">
                        <P class="product-title">{{ randomTop.name }}</P>
                        <p class="price">KES {{ randomTop.price }}</p>
                    </router-link>
                    <router-link :to="{name: 'product', params: {id: randomBottomId}}">
                        <img :src="makeImagePath(randomBottom)" alt="">
                        <p class="product-title">{{ randomBottom.name }}</p>
                        <p class="price">KES {{ randomBottom.price }}</p>
                    </router-link>
                    <router-link :to="{name: 'product', params: {id: randomFootwearID}}">
                        <img :src="makeImagePath(randomFootwear)" alt="">
                        <p class="product-title">{{randomFootwear.name }}</p>
                        <p class="price">KES {{ randomFootwear.price }}</p>
                    </router-link>
                </li>
            </ul>
            <button class="au-btn au-btn--dark m-l-25" @click="recommendRandomOutfit">Shuffle Outfits</button>
        </section>
      </div>
  </div>
</template>

<script>
import { imagePath } from '@/mixins/imagePath.js'

export default {
  name: "genderOverview",
  mixins: [imagePath],
  created() {
      this.recommendRandomOutfit()
  },
    data() {
        return{
            randomTopId: null,
            randomBottomId: null,
            randomFootwearID: null
        }
    },
  computed: {
    gender() {
      return this.$route.params.gender
    },
    pageTitle() {
      return `${this.gender[0].toUpperCase()}${this.gender.slice(1)}`
    },
    productsByGender() {
      return this.$store.getters.productsByGender(this.gender)
    },
    randomTop() {
        return this.$store.getters.product(this.randomTopId)
    },
    randomBottom() {
        return this.$store.getters.product(this.randomBottomId)
    },
    randomFootwear() {
        return this.$store.getters.product(this.randomFootwearID)
    }
  },
  methods: {
      randomProductIdByCategory(category) {
            let allProductsInCategory = this.productsByGender.filter(p => p.category === category);
            let randomIndex = Math.floor(Math.random() * allProductsInCategory.length);
            return allProductsInCategory[randomIndex].id;
      },
      recommendRandomOutfit() {
            this.randomTopId = this.randomProductIdByCategory('Shirts');
            this.randomBottomId = this.randomProductIdByCategory('Pants');
            this.randomFootwearID = this.randomProductIdByCategory('Shoes');
      }
  }
}
</script>

<style lang="scss">
.item-grid {
  list-style: none;
  padding-left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
}
.item-grid__item {
  box-sizing: border-box;
  text-align: center;
  padding: 1rem;
  flex: 0 0 33.3%;
  @media only screen and (max-width: 832px) {
    flex: 0 0 50%;
  }
  @media only screen and (max-width: 475px) {
    flex: 0 0 100%;
  }
}
</style>