console.log("Js OK!");

const app = new Vue({
  el: "#app",
  data: {
    randomEmails: [],
  },
  mounted() {
    // Aggiunta Axios
    //ciclo per generare 10 email
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const result = response.data;
          //console.log(result);
          //il valore di response viene assegnato a randomEmail
          this.randomEmail = result.response;
          this.randomEmails.push(this.randomEmail);
        });
    }
    console.log(this.randomEmails);
  },
});
