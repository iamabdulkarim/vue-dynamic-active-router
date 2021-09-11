<template>
  <div class="profile">
    <!-- <h1>this is {{ $route.params.user_id}}</h1> -->
    <h2>Profile Page({{UserId}}'s' page)</h2>
    
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
     UserId: this.$route.params.user_id
    }
  },
  methods: {
      updateId(){
          this.UserId = this.$route.params.user_id
      }
  },
  watch: {
      $route:'updateId'
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: green;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
