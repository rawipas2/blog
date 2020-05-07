<template>
<v-app>
  <v-card
      class="mx-auto"
      width="344"
    >
    <v-list-item three-line>
      <v-list-item-content>
         <div class="overline mb-4">POST BLOG</div>
            <v-form
                ref="form"
                class="overline"
            >
              
              <v-text-field
                v-model = "hashtag"
                :err-messages = "hashtagErrors"
                :rules="hashtagRules"
                label = "#Hashtag"
                requirad
              
              />

              <v-text-field
                v-model = "description"
                :err-messages = "descriptionErrors"
                :rules="descriptionRules"
                label = "Description"
                requirad
              
              />

              <v-card-actions>
                <v-btn 
                class="mr-4"
                text
                @click="addBlog"
                >
                submit
                </v-btn>
                <v-btn
                  class="mr-4"
                  text
                  @click="reset"
                >
                reset
                </v-btn>
              </v-card-actions>
            </v-form>
      </v-list-item-content>  
    </v-list-item>
  </v-card>


<p/><p/>
<!-- Show Blog -->
  
</v-app>
</template>

<script>
export default {
  data: () => ({
    description: '',
    hashtag: '',

// Required
    
    descriptionRules: [
        v => !!v || 'Description is required'
      ],
    hashtagRules: [
        v => !!v || 'Hashtag: is required'
      ],
  }),

  methods: {
    
    addBlog() {
      
      let payload = { 
          description: this.description,
          hashtag: this.hashtag
        }
        this.$store.dispatch("addBlog", payload)
        this.$refs.form.reset()
      
      console.log('addblog');
    },

    reset () {
      this.$refs.form.reset()
      console.log('reset');
    }
  }

}
</script>


