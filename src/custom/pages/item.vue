<template>
    <div class="item-page">

        <section class="item-wrapper">

            <div v-if="loading" class="loading">
                <img src="/img/loading.svg" alt="loading">
                <div class="message">Cargando listado...</div>
            </div>

            <template v-else>
                <div class="item">

                    <item-summary-header
                        v-show="$mobile"
                        :condition="apiData.item.condition"
                        :sold-quantity="apiData.item.sold_quantity"
                        :title="apiData.item.title"
                        />

                    <div class="item-image__wrapper">
                        <img :src="apiData.item.picture" :alt="apiData.item.title">
                    </div>

                    <div class="item-summary__wrapper">

                        <item-summary-header
                            v-show="!$mobile"
                            :condition="apiData.item.condition"
                            :sold-quantity="apiData.item.sold_quantity"
                            :title="apiData.item.title"
                            />

                        <div class="price">
                            {{ apiData.item.price.currency === 'ARS' ? '$' : apiData.item.price.currency }} {{ apiData.item.price.amount | parsePrice }}
                            <span class="decimal">{{ apiData.item.price.decimals | parseDecimal }}</span>
                        </div>

                        <div v-if="apiData.item.free_shipping" class="free-shipping">Envío gratis</div>

                        <div class="call-to-action">
                            <button class="buy">Comprar ahora</button>
                            <button class="add-to-cart">Agregar al carrito</button>
                        </div>

                        <div class="characteristics-wrapper">
                            <div v-for="(item, index) in characteristics" :key="`c${index}`" class="c-item">
                                <span class="mdi" :class="item.icon"/>
                                <div class="c-description">
                                    <span class="c-title">{{ item.title }}</span>
                                    {{ item.description }}
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class="item-description__wrapper">
                        <div class="divider"></div>
                        <div class="description-wrapper">
                            <div class="title">Descripción</div>
                            <div class="description" v-html="apiData.item.description"></div>
                        </div>
                    </div>

                </div>
            </template>

        </section>

    </div>
</template>

<script>
import axios from 'axios';
import itemSummaryHeader from '../components/item-summary-header.vue';
import { mixinHelpers } from '../../common/mixins';

export default {
    name: 'item-page',

    metaInfo: {
        titleTemplate: '%s | Item',
    },

    components: {
        itemSummaryHeader,
    },

    mixins: [
        mixinHelpers,
    ],

    data() {
        return {

            loading: true,
            apiData: null,

            characteristics: [
                {
                    icon: 'mdi-keyboard-return',
                    title: 'Devolución gratis.',
                    description: 'Tenés 30 días desde que lo recibís.',
                },
                {
                    icon: 'mdi-shield-check-outline',
                    title: 'Compra Protegida.',
                    description: 'recibí el producto que esperabas o te devolvemos tu dinero.',
                },
            ],

        };
    },

    async mounted() {
        const { id } = this.$route.params;

        this.loading = true;
        const apiData = await axios(`${import.meta.env.VITE_BACKEND_API_URL}/api/items/${id}`);
        this.apiData = apiData.data;
        this.loading = false;
    },

};
</script>

<style lang="scss">
body {

    .item-page {
        position: relative;
        width: 100%;
        padding: 30px 0;

        > section.item-wrapper {
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

            > .item {
                display: grid;
                grid-template-areas: 'imageArea summaryArea'
                                    'descriptionArea summaryArea';
                grid-template-columns: 1fr 320px;
                grid-template-rows: 550px;
                padding: 16px;

                > .item-image__wrapper {
                    padding: 30px;

                    > img {
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                    }
                }

                > .item-summary__wrapper {
                    padding: 24px 16px;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;

                    > .price {
                        position: relative;
                        display: inline-block;
                        margin-bottom: 12px;
                        font-size: 36px;
                        font-weight: 300;
                        letter-spacing: .7px;
                        color: #222;

                        > .decimal {
                            position: absolute;
                            top: 1px;
                            right: -20px;
                            font-size: 18px;
                            font-weight: 300;
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

                    > .call-to-action {
                        position: relative;
                        margin: 24px 0;

                        > button {
                            width: 100%;
                            height: 48px;
                            margin-bottom: 10px;
                            border-radius: 6px;
                            border: none;
                            outline: none;
                            font-size: 16px;
                            font-weight: 500;
                            letter-spacing: 0.5px;
                            transition: box-shadow .25s ease-out, background-color .2s ease-out;
                            cursor: pointer;
                        }

                        > button.buy {
                            background-color: #3483fa;
                            color: #fff;

                            &:hover {
                                background-color: #2968c8;
                            }
                            &:active {
                                background-color: #1f4e96;
                            }
                            &:focus {
                                box-shadow: 0 0 0 0.1875em rgba(30, 109, 255, 0.302);
                            }
                        }

                        > button.add-to-cart {
                            background-color: rgba(65, 137, 230, .15);
                            color: #3483fa;

                            &:hover {
                                background-color: rgba(65,137,230,.2);
                            }
                            &:active {
                                background-color: rgba(65,137,230,.3);
                            }
                            &:focus {
                                box-shadow: 0 0 0 0.1875em rgba(30, 109, 255, 0.302);
                            }
                        }
                    }

                    > .characteristics-wrapper {
                        position: relative;
                        width: 100%;
                        margin: 20px 0;
                        display: flex;
                        flex-direction: column;

                        > .c-item {
                            position: relative;
                            display: grid;
                            grid-template-columns: 24px 1fr;
                            grid-template-rows: auto;
                            gap: 4px;
                            margin-bottom: 20px;

                            &:last-child {
                                margin-bottom: 0;
                            }

                            > span.mdi {
                                font-size: 20px;
                                color: #aaa;
                            }
                            > .c-description {
                                font-size: 13px;
                                line-height: 18px;
                                letter-spacing: .3px;
                                color: #b5b5b5;
                                > .c-title {
                                    color: #3483fa;
                                }
                            }
                        }
                    }

                }

                > .item-description__wrapper {
                    position: relative;
                    padding: 30px;

                    > .divider {
                        width: 100%;
                        height: 1px;
                        margin: 2rem 0;
                        background-color: #ddd;
                    }
                    > .description-wrapper {
                        > .title {
                            margin-bottom: 2rem;
                            font-size: 24px;
                            font-weight: 400;
                            letter-spacing: .4px;
                            color: #444;
                        }
                        > .description {
                            font-size: 19px;
                            font-weight: 300;
                            letter-spacing: 1px;
                            line-height: 25px;
                            word-break: break-word;
                            color: #222;
                        }
                    }
                }

            }
        }
    }

    &.mobile {

        .item-page {
            padding: 15px 0;

            > section.item-wrapper {
                > .item {
                    grid-template-areas: none;
                    grid-template-columns: 1fr;
                    grid-template-rows: auto;

                    > .item-summary-header-component {
                        > .condition-and-quantity-sold {
                            font-size: 12px;
                        }
                        > .title {
                            font-size: 16px;
                            font-weight: 300;
                        }
                    }

                    > .item-image__wrapper {
                        max-height: 400px;
                    }

                    > .item-summary__wrapper {
                        padding-left: 0;
                        padding-right: 0;
                        border: none;
                    }

                    > .item-description__wrapper {
                        padding: 0;

                        > .divider {
                            display: none;
                        }
                    }
                }
            }
        }

    }

}
</style>
