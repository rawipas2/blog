<template>
<v-app>
    <v-container>
      <v-card
        max-width= '400'
        class= 'mx-auto'
      >
      <div class="overline">SEACH BLOG</div>
        <v-card-title>
 
           <v-text-field
            class="overline mb-4"
            v-model= 'seach'
            label = 'Seach'
            single-line
            hide-details
          />
        </v-card-title>
       
      </v-card>
      <p/>
        <v-btn
          text
          >
          LIST BLOG
        </v-btn>
        ||
       <v-btn
          text
          @click= "show = !show"
          >
          Show Menu
        </v-btn>

      <p/><p/>
          <v-row dense>
            <v-col
              v-for= '(blogs, index) in $store.getters.blog'
              :key= 'index'
              :items="blog"
              :search="search"
              cols= '12'
            >
              <v-card
                width= '400'
                class= 'mx-auto'
              >

              <v-card-title class="headline">{{blogs.name}}</v-card-title>
              <v-card-subtitle>{{blogs.description}}</v-card-subtitle>

<!-- Option Blog -->
                <v-expand-transition >
                    <div v-show='show'>
                      <v-divider/>
                      
                      <v-text-field
                        v-model = "description"
                        :err-messages = "descriptionErrors"
                        :rules="descriptionRules"
                        label = "New description"
                        requirad
                      />

<!-- Edit -->
                     <v-btn
                      class= 'mr-4'
                      text
                      >
                      SAVE
                      </v-btn>
<!-- Delete -->
                      <v-btn
                      class= 'mr-4'
                      text
                      @click='deleteBlog(index,blogs._id)'
                      >
                      DELETE
                      </v-btn>
                    </div>
                </v-expand-transition>
              </v-card>
            </v-col>
          </v-row>
      
    </v-container>
</v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'blog',
  data: () => ({
      show: false,
      edit: [],
  }),

  methods: {
// Delete
    deleteBlog(index, _id) {
      let payload = { index: index, _id: _id };
      this.$store.dispatch('deleteBlog', payload)
      console.log('deleteBlog')
    }
  },

// Edit
   editBlog(index, _id) {
     let payload = { 
       index: index, 
       _id: _id, 
      //  description: blogs.description,
      //  hashtag: blogs.hashtag
       };
      this.$store.dispatch("editBlog", payload).then(this.closeEdit());
    },

// Reload data 
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