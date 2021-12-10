import axios from 'axios';
// import config from 'config.js'

const store =  {
    state: {
        dataPages: null,
        orderBy : 'title',
        currentPage : 1

    },
    mutations: {

        /**
         * Sets the data from the paginator to dataPages property
         * @param state
         * @param payload
         */
        addPages(state, payload) {
            state.dataPages = payload
        },

        orderBy(state, payload) {
            if (payload) {
                this.state.orderBy = payload;
            }
        },

        changeCurrentPage(state, payload) {
            if(payload){
                this.state.currentPage = payload
            }
        }


    },

    actions: {
        prepareRequest({commit, state}, payload) {
           commit('orderBy', payload.query );

           commit('changeCurrentPage', payload.index );

           let url =  `http://127.0.0.1:8000/api/books?page=${state.currentPage}&by=${state.orderBy}`;

            axios.get(url).then(response=>{
                commit('addPages', response.data)
            })
        },

        storeRequest({dispatch},payload) {
            let storeUrl =  `http://127.0.0.1:8000/api/books`;
            axios.post(storeUrl, payload).then(()=>{
               dispatch('prepareRequest', payload);
            });
        } ,

        updateRequest({dispatch},payload) {
            let updateUrl =  `http://127.0.0.1:8000/api/books/${payload.id}`;
            axios.post(updateUrl, payload).then(()=>{
               dispatch('prepareRequest', payload);
            });
        },
        deleteRequest({dispatch},payload) {
            let updateUrl =  `http://127.0.0.1:8000/api/books/${payload.id}/delete`;
            axios.post(updateUrl, payload).then(()=>{
               dispatch('prepareRequest', payload);
            });
        }
    }



}
export default store;