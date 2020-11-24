// javascript
const js = new Vue({
  el: '#app',
  data:{

    listCd: [],

  },
  created(){

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( response => {
        // handle success
        console.log(response.data.response);
        this.listCd = response.data.response;
      })
      .catch( error => {
        // handle error
        console.log(error);
      })

  },
  methods:{


  },


});
