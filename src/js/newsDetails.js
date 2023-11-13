import axios from "axios";
import { mapGetters } from "vuex";
  export default {
  name: 'NewsDetails',
  data () {
    return {
      postId: 0,
      lists: {},
      count : 0,
    }
  }, 
  computed: {
    ...mapGetters(["getToken","getUserData"])
  },
  methods: {
    loadPage(postId) {
      let search = {
        key : postId
      }
      axios.post('http://127.0.0.1:8000/api/post/detail',search)
        .then((response) => {
          if (response.data.post.image != null) {
            response.data.post.image = "http://127.0.0.1:8000/postImage/"+response.data.post.image
          } else {
            response.data.post.image = "http://127.0.0.1:8000/defaultImage/default.png"
          }
          this.lists = response.data.post;
        })
        .catch((error) => {
          console.log(error)
        });
    },
    back() {
      history.back();
    },
    viewCount() {
      let data = {
        user_id: this.getUserData.id,
        post_id : this.$route.query.plan
      };
      axios.post('http://127.0.0.1:8000/api/post/actionLog', data).then((response) => {
        this.count = response.data.action.length
      })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.viewCount();
    this.postId = this.$route.query.plan;
    this.loadPage(this.postId);
  },  
  }
