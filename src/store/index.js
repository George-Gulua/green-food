import {createStore} from 'vuex'

export default createStore({
    state: {
        products: [
            {
                id: 0,
                href: 'card-1.jpg',
                title: 'This Is Your First Item',
                description:
                    'Our famous French baguette, with olive oil & balsamic vinegar',
                price: 3
            },
            {
                id: 1,
                href: '@/assets/images/card-2.png',
                title: 'This Is Your Second Item',
                description:
                    'Organic spinach salad, sprinkled with parmesan & pine nuts',
                price: 6
            },
            {
                id: 2,
                href: '@/assets/images/card-3.png',
                title: 'This Is Your Third Item',
                description: 'Oven roasted sweet potato, zucchini & carrot fries',
                price: 8
            },
            {
                id: 3,
                href: '@/assets/images/card-4.png',
                title: 'This Is Your Fourth Item',
                description:
                    'Fresh tuna tataki, sun gold cherry tomatoes & organic greens',
                price: 12
            },
            {
                id: 4,
                href: '@/assets/images/card-5.png',
                title: 'This Is Your Fifth Item',
                description:
                    'Aubergine rolls (4 pieces) stuffed with ricotta, tomatoes, scallions & nutmeg',
                price: 9
            },
            {
                id: 5,
                href: '@/assets/images/card-6.png',
                title: 'This Is Your First Item',
                description:
                    'Penne aglio e olio, with fresh garlic, herbs & cheese, topped with basil',
                price: 12
            },
            {
                id: 6,
                href: '@/assets/images/card-7.png',
                title: 'This Is Your Second item',
                description:
                    'Handmade pumpkin ravioli, tossed in sage brown butter sauce with parmesans',
                price: 12
            },
            {
                id: 7,
                href: '@/assets/images/card-8.png',
                title: 'This Is Your Third Item',
                description:
                    'Potato filled gnocchi with mozzarella, fresh tomatoes & basil leaves',
                price: 13
            }
        ],
        isAuth: localStorage.getItem('token'),
    },
    mutations: {
        isAuth(state, isAuth) {
            state.isAuth = isAuth
        },
    },
    actions: {
        isAuth(context, isAuth) {
            context.commit('isAuth', isAuth)
        },
    },
    getters: {
        getProducts: state => {
            return state.products
        },
        isAuth: state => {
            return state.isAuth
        },
    }
})
