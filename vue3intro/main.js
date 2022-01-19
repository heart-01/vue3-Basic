// สร้าง vue Instance เป็นตัวแทนในการเข้าถึง class ใน vue หรือ เป็นตัว Object ในการเข้าถึง class
// data เป็น method ในการประกาศตัวแปร

const app = Vue.createApp({ //สร้าง vue Instance
    data() {
        return {
            brand: 'Apple',
            product: 'Iphone 12',
            image: './assets/images/iphone-12-red.png',
            description: 'New Apple A4 Bionic hight performance',
            url: 'https://www.itgenius.co.th',
            inStock: true,
            inventory: 9,
            details: ['64GB', '128GB', '256GB'], //Array or collection
            variants: [
                { id: 239, color: 'Red', image: './assets/images/iphone-12-red.png' },
                { id: 240, color: 'Purple', image: './assets/images/iphone-12-purple.png' },
                { id: 239, color: 'White', image: './assets/images/iphone-12-white.png' },
            ],
            cart: 0,
        }
    },
    methods: {
        addToCart(){
            this.cart += 1
            this.inventory -= 1
            this.inStock = (this.inventory == 0) ? false : true
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    },
    // method computed จะเป็น method ที่ vue เหมือนเป็นตัวแปรตัวหนึ่ง เหมาะ สำหรับการที่เราจะคำนวณตัวแปรนั้นตลอดเวลาเปลี่ยน
    computed: {
        title() {
            return this.brand + ' ' + this.product
        }
    }
})