// javascript
const js = new Vue({
  el: '#app',
  data:{

    listCd: [],

    actualGen: "all",
  },
  created(){

    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( response => {
        // handle success
        console.log(response.data.response);
        this.listCd = response.data.response;
      })
      .catch( error => {
        console.log(error);
      })

  },
  methods:{
      changeType(){

        axios.get('https://flynn.boolean.careers/exercises/api/array/music')
          .then( response => {
             let cdsList = response.data.response;

             if (this.actualGen !== "all") {

               cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === this.actualGen);

             }

             this.listCd = cdsList;

          })
          .catch( error => {
            console.log(error);
          })

      }

  },


});
// axios.get('https://flynn.boolean.careers/exercises/api/array/music')
//   .then( response => {
  //     let cdsList = response.data.response;
  //
  //     if (this.actualGen !== "all") {
    //
    //        cdsList = cdsList.filter( cd => cd.genre.toLowerCase() === this.actualGen);
    //
    //     }
    //
    //     this.listCd = cdsList;
    //   })
    //   .catch( error => {
      //     console.log(error);
      //   })
