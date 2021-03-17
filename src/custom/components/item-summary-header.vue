<template>
    <div class="item-summary-header-component">

        <div class="condition-and-quantity-sold">
            {{ condition === 'new' ? 'Nuevo' : 'Usado' }}{{ soldQuantity | soldQuantityParsed }}
        </div>
        <h1 class="title">{{ title }}</h1>

    </div>
</template>

<script>
export default {
    name: 'item-summary-header-component',

    props: {
        condition: String,
        soldQuantity: Number,
        title: String,
    },

    filters: {

        soldQuantityParsed(val) {
            if (val === 0) {
                return '';
            }
            if (val === 1) {
                return ' | 1 vendido';
            }
            return ` | ${val} vendidos`;
        },

    },

};
</script>

<style lang="scss">
body {

    .item-summary-header-component {
        position: relative;

        > .condition-and-quantity-sold {
            font-size: 13px;
            font-weight: 300;
            letter-spacing: .5px;
            color: #888;
        }

        > h1.title {
            font-size: 21px;
            font-weight: 400;
            margin: 15px 0;
            letter-spacing: .3px;
            color: #111;
        }
    }
}
</style>
