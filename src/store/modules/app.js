const stateData = {
    mobile: false, // Indica si está en modo mobile
};

const mutations = {
    mobile(state, val) {
        state.mobile = val;
    },
};

const actions = {
    mobile({ commit }, bool) {
        commit('mobile', bool);
    },
};

const getters = {
    mobile: state => state.mobile,
};

export default {
    namespaced: true,
    state: stateData,
    mutations,
    actions,
    getters,
};
