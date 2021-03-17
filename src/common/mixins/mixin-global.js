export default {

    computed: {

        $mobile: {
            get() {
                return this.$store.getters['app/mobile'];
            },
            set(val) {
                this.$store.dispatch('app/mobile', val);
            },
        },

    },

};
