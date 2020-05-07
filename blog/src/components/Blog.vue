<template>
<v-app>
    <v-container>
      <v-card
        max-width= '400'
        class= 'mx-auto'
      >
      <v-list-item>
      <v-list-item-content>
      <div class="overline">SEACH BLOG</div>
        <v-card-title>
           <v-text-field
            v-model= 'seach'
            label = 'Seach Hashtag'
          />
        </v-card-title>
       </v-list-item-content>  
    </v-list-item>


<!-- Menu -->
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
          @click= 'show = !show'
          >
          Show Menu
        </v-btn>

      <p/><p/>
          <v-row dense>
            <v-col
              v-for= '(blogs, index) in $store.getters.blog'
              :key= 'index'
              :items= 'blog'
              :search= 'search'
              cols= '12'
            >
              <v-card
                width= '400'
                class= 'mx-auto'
              >

              <v-card-title class='headline'>{{blogs.name}}</v-card-title>
              <v-card-subtitle>{{blogs.description}}</v-card-subtitle>

<!-- Option Blog -->
                <v-expand-transition >
                    <div v-show='show'>
                      <v-divider/>
                      
                      <v-text-field
                        v-model = 'description'
                        :err-messages = 'descriptionErrors'
                        :rules='descriptionRules'
                        :search='search'
                        label = 'New Description'
                        requirad
                      />

<div class="text-center" cols="12" sm="4">
<!-- Edit -->
                     <v-btn
                      class= 'mr-4'
                      text
                      >
                      SAVE
                      </v-btn>
<!-- Delete -->
                      <v-btn
                      class= 'error mr-4'
                      text
                      small
                      @click='deleteBlog(index,blogs._id)'
                      >
                      DELETE
                      </v-btn>

                      </div>
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
      search: '',
      show: false
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
       _id: _id
       };
      this.$store.dispatch('editBlog', payload).then(this.closeEdit());
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