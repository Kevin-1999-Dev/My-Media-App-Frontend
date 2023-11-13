import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: 'LoginPage',
  data () {
    return {
      userData: {
        email: '',
        password : '',
      },
      errorMessage: '',
      error : false,
    }
  },
  computed: {
    ...mapGetters(["getToken","getUserData"])
  },
  methods: {
    homePage () {
      this.$router.push({
        name : 'home'
      });
    },
    login() {
      axios.post('http://127.0.0.1:8000/api/login', this.userData)
        .then((response) => {
          if (response.data.token != null) {
            this.$store.dispatch("setToken", response.data.token);
            this.$store.dispatch("setUserData", response.data.user);
            this.homePage()
          } else {
            this.error = true;
            this.errorMessage = response.data.error;
          } 
        })
        .catch((error) => {
          console.log(error)
        });
    },
    // check() {
    //   console.log(this.getToken)
    //   console.log(this.getUserData)
    // }
  }
}
