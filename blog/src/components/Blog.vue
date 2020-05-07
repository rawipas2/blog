<template>
    <v-container>
      <v-row dense>
        <v-col
          v-for="(blogs, index) in $store.getters.blog"
          :key="index"
          cols="12"
        >
          <v-card
            width="400"
            class="mx-auto"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                
                <v-card-title>#{{blogs.hashtag}}</v-card-title>
                <v-card-subtitle>{{blogs.description}} </v-card-subtitle>
                
                <v-card-actions>
                  <v-btn
                  class="mr-4"
                  text
                  @click="deleteBlog(index,blogs._id)"
                  >
                  DELETE
                  </v-btn>

                  
                </v-card-actions>


              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'blog',
  data(){
   return {

   }
 },

  methods: {
// Delete
    deleteBlog(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch('deleteBlog', payload)
      console.log('deleteBlog')
    }
  },

  mounted() {
     this.$store.dispatch('loadBlog')
  },
  computed: {
    ...mapState([
      'blog'
    ])
  }
}

</script>