export const imagePath = {
    methods: {
        makeImagePath(product){
            return require(`../assets/img/${product.images[0]}`);
        }
    }
}