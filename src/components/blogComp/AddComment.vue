<template>
  <div class="pt-5 mb-5">
    <h3>Comments</h3>
    <div class="pt-5" v-for="comment in comments" :key="comment.id">
      <img class="pt-2" :src="comment.userImg" :alt="comment.userName" />
      <span class="name mx-2">{{ comment.userName }}</span>
      <span class="date text-muted mx-5">{{ comment.date }}</span>
      <p class="pt-3">{{ comment.comment }}</p>
    </div>
    <form action="" class="pt-5">
      <img class="pt-2" src="../../assets/bloginfo/user1.svg" alt="userImg" />
      <textarea
        class="mx-2"
        type="text"
        placeholder="Write your comment"
        v-model="userComment"
      />
      <div>
        <button type="button" class="btn btn-outline-dark" @click="publish">
          Publish
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      userComment: '',
      comments: [
        {
          id: 1,
          userImg: require('../../assets/bloginfo/user1.svg'),
          userName: 'Malak Krayem',
          comment:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nobis suscipit dolorum maiores perspiciatis illo sed doloribus ab mollitiadignissimos dolorem neque repellat cor',
          date: 'Feb 12, 2017 8:24 PM',
        },
        {
          id: 1,
          userImg: require('../../assets/bloginfo/user2.svg'),
          userName: 'Malak Krayem',
          comment:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nobis suscipit dolorum maiores perspiciatis illo sed doloribus ab mollitiadignissimos dolorem neque repellat cor',
          date: 'Feb 12, 2017 8:24 PM',
        },
        {
          id: 1,
          userImg: require('../../assets/bloginfo/user3.svg'),
          userName: 'Malak Krayem',
          comment:
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi nobis suscipit dolorum maiores perspiciatis illo sed doloribus ab mollitiadignissimos dolorem neque repellat cor',
          date: 'Feb 12, 2017 8:24 PM',
        },
      ],
    }
  },
  methods: {
    publish() {
      var newComment = {
        id: 3,
        userImg: require('../../assets/bloginfo/user3.svg'),
        userName: 'Malak Krayem',
        comment: this.userComment,
        date: 'Feb 12, 2017 8:24 PM',
      }
      this.comments.push(newComment)
      this.userComment = ''
    },
  },
}
</script>

<style lang="scss" scoped>
div {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
div form {
  margin-left: auto;
  margin-right: auto;
  width: 60%;
}
div h3 {
  text-align: center;
}
div img,
form img {
  float: left;
}
div .date {
  font-size: 12px;
}
div p {
  padding-left: 50px;
  font-weight: bold;
  font-size: 13px;
}
form textarea {
  border: 1px solid black;
  width: 87%;
  height: 85px;
  border-radius: 5px;
}
form div {
  display: flex;
  justify-content: flex-end;
  margin-right: 10px;
}
form div button {
  padding: 5px 50px;
  text-align: right;
}
button:hover {
  background-color: #f5f5f5;
  color: black;
}
</style>
