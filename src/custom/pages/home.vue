<template functional>
    <div class="home-page">

        <section class="welcome-page__wrapper">

            <img src="/img/logo-big.png" alt="Mercado Libre">

            <div class="instructions">
                Escribe cualquier producto en la barra de búsqueda superior y presiona Enter para poder ver el listado de resultados.<br>
                Luego haz click sobre algún producto de la lista para ver más detalles.
            </div>

            <div class="technologies-used__table">

                <table>
                    <thead>
                        <tr>
                            <th>
                                Front-End
                            </th>
                            <th>
                                Back-End
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Vue.js (VueCLI - SPA)</td>
                            <td>Node.js (Framework Nest.js with Express Built-In)</td>
                        </tr>
                        <tr>
                            <td>Vue-Router</td>
                            <td>API Rest</td>
                        </tr>
                        <tr>
                            <td>Vuex (State Management)</td>
                            <td>TypeScript</td>
                        </tr>
                        <tr>
                            <td>HTML5</td>
                            <td>ECMAScript 2020</td>
                        </tr>
                        <tr>
                            <td>CSS3 (SCSS)</td>
                            <td>OOP</td>
                        </tr>
                        <tr>
                            <td>Responsive Design</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>

            </div>

            <div class="website-description">
                Bienvenido al Sitio Web de test de Mercado Libre<br>
                Creado por <a href="https://www.linkedin.com/in/matias-albarenque/" target="_blank" rel="noopener noreferrer">Matías Albarenque</a>
            </div>

        </section>

    </div>
</template>

<script>
export default {
    name: 'home-page',
};
</script>

<style lang="scss">
body {

    .home-page {
        position: relative;
        width: 100%;
        padding: 30px 0;

        > .welcome-page__wrapper {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 600px;
            padding: 45px 25px;
            padding-top: 0;
            background-color: #fff;
            border-radius: 4px;

            > img {
                width: 400px;
                height: auto;
                max-width: 100%;
            }

            > .instructions {
                margin-bottom: 40px;
                font-size: 20px;
                font-weight: 400;
                text-align: center;
                color: #222;
            }

            > .technologies-used__table {
                position: relative;
                display: flex;
                justify-content: center;
                width: 100%;
                margin-bottom: 40px;

                > table {
                    width: 100%;
                    max-width: 500px;
                    border-collapse: collapse;

                    > thead {
                        background-color: #f8d000;
                        > tr {
                            > th {
                                font-size: 19px;
                                font-weight: 500;
                                border: 1px solid #ccc;
                                width: 50%;
                            }
                        }
                    }
                    > tbody {
                        > tr {
                            > td {
                                border: 1px solid #ccc;
                            }
                        }
                    }

                    th, td {
                        padding: 15px;
                        text-align: center;
                    }
                }
            }

            > .website-description {
                font-size: 20px;
                font-weight: 400;
                text-align: center;
                color: #222;

                > a {
                    text-decoration: none;
                    color: #007dd6;
                }
            }
        }

    }
}
</style>
