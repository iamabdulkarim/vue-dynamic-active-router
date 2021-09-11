<template>
  <div>
      <nav>
          <ul>
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/about">About</router-link></li>
              <li><router-link to="/contract">Contract</router-link></li>
              <!-- <li><router-link to="">Profile</router-link></li> -->
              <div>
                  <ul>
                      <li class="enter" v-for="id in userIds" :key="id">
                          <router-link :to="{name:'Profile',params:{user_id:id}}">Profile{{id}}</router-link>
                      </li>
                  </ul>
                  <button @click="Contract">Contract</button>
                  <button @click="About">About</button>
              </div>
              
              
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
    data() {
        return {
            userIds:['1','2','3','4','5','6']
        }
    },
    methods: {
        Contract(){
            this.$router.push( {name:'Contract'})
            
        },
        About(){
            this.$router.push( {name:'About'})
            
        }
    },

}
</script>

<style scoped>
    nav{
        text-align: center;
    }
    nav ul{
        padding: 0;
    }
  
    nav li{
        display: inline-block;
        list-style-type: none;
        margin: 0;
        padding: 8px;
    }
    a.router-link-exact-active{
        color: red;
    }

</style>>

</style>