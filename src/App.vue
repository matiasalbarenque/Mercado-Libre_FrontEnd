<template>
    <div id="app-wrapper">

        <header>
            <div class="root-wrapper">
                <header-custom/>
            </div>
        </header>

        <main>
            <div class="root-wrapper">
                <router-view></router-view>
            </div>
        </main>

        <footer>
            <div class="root-wrapper">
                <footer-custom/>
            </div>
        </footer>

    </div>
</template>

<script>
import { throttle } from 'lodash';
import headerCustom from './common/components/layout/header.vue';
import footerCustom from './common/components/layout/footer.vue';

const body = document.querySelector('body');

export default {
    name: 'app',

    metaInfo: {
        title: import.meta.env.VITE_PROJECT_NAME,
    },

    components: {
        headerCustom,
        footerCustom,
    },

    mounted() {

        this.checkMobile();

        // Definimos si está en modo mobile
        const windowEventCheckMobile = throttle(() => { this.checkMobile(); }, 100);

        this.$nextTick(() => {
            window.addEventListener('resize', windowEventCheckMobile);
        });

    },

    methods: {

        checkMobile() {
            const mobile = window.innerWidth < 1024;
            this.$mobile = mobile;
            if (mobile) {
                body.classList.add('mobile');
            } else {
                body.classList.remove('mobile');
            }

        },

    },

};
</script>

<style lang="scss">
html {
    background-color: #fff;
    font-size: 100% !important;

    > body {
        position: relative;
        margin: 0;
        font-family: Roboto, Arial, sans-serif;

        .root-wrapper {
            position: relative;
            max-width: 1184px;
            width: 100%;
            margin: 0 auto;
        }

        header {
            position: relative;
            padding: 0 15px;
        }

        main {
            position: relative;
            padding: 0 15px;
            height: auto;
            min-height: calc(100vh - #{$header-height} - #{$footer-height});
            background-color: #ededed;
        }

        footer {
            position: relative;
            padding: 0 15px;
            border-top: 1px solid #eee;
        }

        input {
            font-family: Roboto, Arial, sans-serif;
        }

        &.mobile {

            main {
                min-height: auto;
            }

        }

        a {
            text-decoration: none;
            color: #007dd6;
        }

    }
}
</style>
