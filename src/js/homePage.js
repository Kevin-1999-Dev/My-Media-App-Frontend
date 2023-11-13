import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: 'HomePage',
  data() {
    return {
      postList: {},
      searchKey: '',
      categoryList: {},
      userStatus: false,
      
    }
  },
  computed: {
    ...mapGetters(["getToken","getUserData"])
  },
  methods: {
    loginPage () {
      this.$router.push({
          name : 'loginPage',
        })
    },
    logout() {
      this.$store.dispatch("setToken", null);
      this.loginPage()
    },
    getAllPost() {
      axios.get('http://127.0.0.1:8000/api/allpost').then((response) => {

        for (let i = 0; i < response.data.posts.length; i++) {
          if (response.data.posts[i].image != null) {
            response.data.posts[i].image = "http://127.0.0.1:8000/postImage/" + response.data.posts[i].image;
          } else {
            response.data.posts[i].image = "http://127.0.0.1:8000/defaultImage/default.png";
          }
        }
        this.postList = response.data.posts;
      })
    },
    getCategory() {
      axios.get('http://127.0.0.1:8000/api/allcategory')
        .then((response) => {
          this.categoryList = response.data.category;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    search() {
      axios.post('http://127.0.0.1:8000/api/searchPost', {
        key: this.searchKey
      })
        .then((response) => {
          for (let i = 0; i < response.data.post.length; i++) {
            if (response.data.post[i].image != null) {
              response.data.post[i].image = "http://127.0.0.1:8000/postImage/" + response.data.post[i].image;
            } else {
              response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default.png";
            }
          }
          this.postList = response.data.post;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    newsDetails(id) {
      this.$router.push({ path: '/newsDetails', query: { plan: id } });
    },
    searchCategory(v) {
      let search = {
        key: v
      }
      axios.post('http://127.0.0.1:8000/api/searchCategory', search)
        .then((response) => {
          for (let i = 0; i < response.data.post.length; i++) {
            if (response.data.post[i].image != null) {
              response.data.post[i].image = "http://127.0.0.1:8000/postImage/" + response.data.post[i].image;
            } else {
              response.data.post[i].image = "http://127.0.0.1:8000/defaultImage/default.png";
            }
          }
          this.postList = response.data.post;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (this.getToken != null && this.getToken != undefined && this.getToken != "") {
      this.getAllPost();
      this.getCategory();
    } else {
      this.userStatus = true;
    }
  },

}