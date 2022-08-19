<template>
    <div class="items-page">

        <breadcrumb :categories="apiData.categories"/>

        <section class="item-list__wrapper">

            <div v-if="loading" class="loading">
                <img src="/img/loading.svg" alt="loading">
                <div class="message">Cargando listado...</div>
            </div>

            <template v-else>
                <ol>
                    <li v-for="item in apiData.items" :key="item.id" class="item" :class="item.id">
                        <div class="image">
                            <router-link :to="`/items/${item.id}`">
                                <img :src="item.picture" :alt="item.title">
                            </router-link>
                        </div>
                        <div :id="item.id" class="description">

                            <h2 class="title">
                                <router-link :to="`/items/${item.id}`">{{ item.title }}</router-link>
                            </h2>

                            <div class="price">
                                {{ item.price.currency === 'ARS' ? '$' : item.price.currency }} {{ item.price.amount | parsePrice }}
                                <span class="decimal">{{ item.price.decimals | parseDecimal }}</span>
                            </div>

                            <div v-if="item.free_shipping" class="free-shipping">Envío gratis</div>
                            <div v-if="item.condition !== 'new'" class="condition">Usado</div>

                        </div>
                    </li>
                </ol>
            </template>

        </section>

    </div>
</template>

<script>
import axios from 'axios';
import breadcrumb from '../components/breadcrumb.vue';
import { mixinHelpers } from '../../common/mixins';

export default {
    name: 'items-page',

    metaInfo: {
        titleTemplate: '%s | Items',
    },

    components: {
        breadcrumb,
    },

    mixins: [
        mixinHelpers,
    ],

    data() {
        return {

            loading: true,
            apiData: [],

        };
    },

    mounted() {
        const { search } = this.$route.query;
        this.getItems(search);
    },

    methods: {

        async getItems(search) {
            this.loading = true;
            const apiData = await axios(`${import.meta.env.VITE_BACKEND_API_URL}/api/items?q=${search}`);
            this.apiData = apiData.data;
            this.loading = false;
        },

    },

    watch: {

        search(val) {
            this.getItems(val);
        },

    },

    computed: {

        search() {
            return this.$route.query.search;
        },

    },

};
</script>

<style lang="scss">
body {

    .items-page {
        position: relative;
        width: 100%;
        padding-bottom: 40px;

        > .categories {
            height: 50px;
        }

        > section.item-list__wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            background-color: #fff;
            border-radius: 4px;

            > .loading {
                position: relative;
                display: flex;
                align-items: center;
                padding: 40px;

                > .message {
                    margin-left: 15px;
                    font-size: 16px;
                    color: #777;
                }
            }

            > ol {
                margin: 0;
                padding: 0;

                > li.item {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    grid-template-rows: 150px;
                    gap: 20px;
                    padding: 25px 20px;
                    border-bottom: 1px solid #eee;

                    &:last-child {
                        border-bottom: none;
                    }

                    > .image {
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        > a {
                            display: inline-flex;
                            height: 100%;
                            overflow: hidden;

                            > img {
                                width: 160px;
                                height: auto;
                                object-fit: contain;
                            }
                        }
                    }

                    > .description {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;

                        > h2.title {
                            margin: 0;
                            margin-bottom: 12px;
                            font-size: 20px;
                            font-weight: 300;
                            letter-spacing: .3px;
                            text-decoration: none;
                            color: #222;

                            > a {
                                color: #222;
                            }
                        }

                        > .price {
                            position: relative;
                            margin-bottom: 12px;
                            font-size: 24px;
                            letter-spacing: .7px;
                            color: #222;

                            > .decimal {
                                position: absolute;
                                top: 1px;
                                right: -15px;
                                font-size: 12px;
                                font-weight: 500;
                                letter-spacing: .4px;
                            }
                        }

                        > .free-shipping {
                            margin-bottom: 12px;
                            font-size: 14px;
                            font-weight: 400;
                            letter-spacing: .2px;
                            color: #00a650;
                        }

                        > .condition {
                            font-size: 14px;
                            font-weight: 400;
                            letter-spacing: .2px;
                            color: #777;
                        }

                    }
                }
            }
        }
    }

    &.mobile {

        .items-page {
            > section.item-list__wrapper {
                > ol {
                    > li.item {
                        grid-template-columns: minmax(150px, 250px) minmax(260px, 1fr);

                        @media screen and (max-width: 600px) {
                            grid-template-columns: 1fr;

                            > .image {
                                > a {
                                    width: 100%;
                                    img {
                                        width: 100%;
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }

    }

}
</style>
