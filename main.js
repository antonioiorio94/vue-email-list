console.log("Js OK!");

const app = new Vue({
  el: "#app",
  data: {
    randomEmail: "",
  },
  mounted() {
    // Aggiunta Axios
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const result = response.data;
        console.log(result);
        //il valore di response viene assegnato a randomEmail
        this.randomEmail = result.response;
      });
  },
});
