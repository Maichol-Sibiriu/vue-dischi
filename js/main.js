// javascript
const js = new Vue({
  el: '#app',
  data:{



  },
  created(){

    axios.get('')
      .then( response => {
        // handle success
        console.log(response);
      })
      .catch( error => {
        // handle error
        console.log(error);
      })

  },
  methods:{


  },


});
