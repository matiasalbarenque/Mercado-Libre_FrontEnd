<template>
    <div class="header-component">

        <div class="header-logo__wrapper">
            <router-link to="/">
                <img v-if="!$mobile" src="/img/logo.png" alt="Logo">
                <img v-else src="/img/logo-min.png" alt="Logo">
            </router-link>
        </div>

        <div class="header-form__wrapper">

            <ValidationObserver tag="form" ref="form" @submit.prevent="validate()">

                <div class="form-wrapper">

                    <div class="form-search">
                        <ValidationProvider name="search" rules="required|min:3" v-slot="{ errors }" slim>
                            <input
                                type="text"
                                name="search"
                                v-model="form.input.search.value"
                                placeholder="Buscar productos, marcas y más..."
                                :class="{ error: errors[0] }"
                                >
                        </ValidationProvider>
                    </div>

                    <div class="divider"></div>

                    <div class="form-sumbit">
                        <button type="submit">
                            <span class="mdi mdi-magnify"></span>
                        </button>
                    </div>

                </div>

            </ValidationObserver>

        </div>

    </div>
</template>

<script>
export default {
    name: 'header-component',

    data() {
        return {

            form: {
                input: {
                    search: { value: null },
                },
            },

        };
    },

    methods: {

        async validate() {

            const isValid = await this.$refs.form.validate();
            if (isValid) {
                this.$router.push(`/items?search=${this.form.input.search.value}`).catch(() => {});
            }

        },

    },

};
</script>

<style lang="scss">
body {

    header {
        background-color: $primary-color;

        .header-component {
            position: relative;
            display: grid;
            grid-template-columns: 134px 1fr;
            grid-template-rows: auto;
            gap: 30px;
            height: $header-height;

            > .header-logo__wrapper {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;

                > img {
                    width: 100%;
                    height: auto;
                }
            }

            > .header-form__wrapper {
                position: relative;
                display: flex;
                justify-content: flex-start;
                align-items: center;

                > form {
                    width: 100%;

                    .form-wrapper {
                        position: relative;
                        display: grid;
                        grid-template-columns: 1fr 1px 46px;
                        grid-template-rows: auto;
                        align-items: center;
                        background-color: #fff;
                        border-radius: 2px;
                        box-shadow: 0 1px 2px 0 rgba(#000,.2);
                        overflow: hidden;

                        > .form-search {
                            input {
                                padding: 0 16px;
                                width: calc(100% - 32px);
                                height: 38px;
                                border: none;
                                outline: none;
                                font-size: 15px;
                                color: #666;

                                &::placeholder {
                                    font-size: 14px;
                                    font-weight: 300;
                                    letter-spacing: .5px;
                                    color: #d0d0d0;
                                }
                            }

                            input:-webkit-autofill {
                                -webkit-box-shadow: 0 0 0 30px #fff inset !important;
                            }
                        }

                        > .divider {
                            width: 1px;
                            height: 80%;
                            background-color: #ddd;
                        }

                        > .form-sumbit {
                            position: relative;
                            width: 100%;
                            height: 100%;

                            button {
                                width: 100%;
                                height: 100%;
                                padding: 0;
                                background: none;
                                border: none;
                                outline: none;
                                cursor: pointer;

                                > span.mdi {
                                    margin-top: 1px;
                                    font-size: 22px;
                                    color: #888;
                                }
                            }

                        }

                    }
                }
            }

        }
    }

    &.mobile {

        header {
            .header-component {
                grid-template-columns: 48px 1fr;
                gap: 15px;
            }
        }

    }

}
</style>
