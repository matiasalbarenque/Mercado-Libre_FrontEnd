<template functional>
    <div class="footer-component">

        <div class="footer-wrapper">
            <span>Sitio Web de test de Mercado Libre</span>
            <span>Creado por <a href="https://www.linkedin.com/in/matias-albarenque/" target="_blank" rel="noopener noreferrer">Matías Albarenque</a></span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'footer-component',
};
</script>

<style lang="scss">
body {

    footer {
        .footer-component {
            position: relative;
            height: $footer-height;
            padding-top: 10px;

            > .footer-wrapper {
                display: inline-flex;
                flex-direction: column;
                align-items: flex-start;

                > span {
                    margin-bottom: 5px;
                    font-size: 12px;
                    letter-spacing: .25px;
                    color: #999;

                    > a {
                        text-decoration: none;
                        color: #007dd6;
                    }
                }
            }
        }
    }
}
</style>
