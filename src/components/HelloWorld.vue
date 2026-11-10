<template>
  <div id="app" class="container">
    <h1>Random Quote Generator</h1>

    <!-- Display the quote or a loading message -->
    <p v-if="loading">Loading...</p>
    <p v-else>{{ quote }}</p>
    <p class="author">- {{ author }}</p>
    
    <!-- Button to generate a new quote -->
    <button @click="getQuote">Get New Quote</button>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data() {
    return {
      quote: '',
      author: '',
      loading: false
    }
  },

  methods: {
    async getQuote() {
      this.loading = true;
      try {
        const response = await axios.get('https://quotes15.p.rapidapi.com/quotes/random/?language_code=en', {
          headers: {
            'x-rapidapi-host': 'quotes15.p.rapidapi.com',
            'x-rapidapi-key': 'aafa259fd4msh09df3a6ce3f8c40p1b0babjsnefae4699cce3' // Replace with your RapidAPI key
          }
        })

        this.quote = response.data.content
        this.author = response.data.originator.name
      
      } catch (error) {
        console.error('Error fetching quote:', error)
        this.quote = 'Oops! Something went wrong.'
        this.author = ''
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getQuote();
  }
}
</script>

<style>
.container {
  text-align: center;
  font-family: Arial, sans-serif;
  margin-top: 50px;
}

button {
  margin-top: 20px;
  padding: 10px 20px;
  font-size: 16px;
}

.author {
  font-style: italic;
  color: #555;
  margin-top: 5px;
}
</style>
