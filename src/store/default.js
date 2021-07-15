import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    metadataSelected: []
  },
  mutations: {
    pushMetadataSelected(state, videoId, metaDetails) {
      state.metadataSelected.push({
        id: videoId,
        meta: metaDetails
      });
    }
  }
});

export default store;
