<template>
    <div class="breadcrumb-component">

        <div class="breadcrumb-wrapper">
            <template v-for="(item, index) in categories">
                <span :key="`bc${index}`" class="category">{{ item }}</span>
                <span :key="`bci${index}`" class="mdi mdi-chevron-right"/>
            </template>
        </div>

    </div>
</template>

<script>
export default {
    name: 'breadcrumb-component',

    props: {
        categories: Array,
    },
};
</script>

<style lang="scss">
body {

    .breadcrumb-component {
        position: relative;
        width: 100%;
        padding: 15px 0;

        > .breadcrumb-wrapper {
            position: relative;
            display: inline-flex;
            justify-content: flex-start;
            align-items: center;

            > .category {
                font-size: 13px;
                letter-spacing: .35px;
                color: #777;
            }

            > .mdi {
                font-size: 20px;
                color: #888;

                &:last-child {
                    display: none;
                }
            }

        }

    }
}
</style>
