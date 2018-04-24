
<template>
  <div class="Search">
  <br>
    <h4>
      Filter
    </h4>
    <h6>
      Search
    </h6>
    <div id="ap6">
      <input id="input_for_search" v-model="search" placeholder="Search text..." type="text"  autofocus>
    </div>
    <h6>
      Category
    </h6>
      <div>
        <select class="form-control" v-model="location" >
          <option v-for="location in locations" :value="location.value">{{location.label}}</option>
       </select>
       
      </div>
      <br>
    <h6>
      Location
    </h6>
      <div>
        <select class="form-control" v-model="category">
          <option v-for="category in categories" :value="category.value">{{category.label}}</option>
        </select>
      </div>
    <br>

    <br>
    <br>
    <div id="style_block" v-for="(item, index) in filteredItems"> 
      <h2>{{ item.number }} {{ item.date }}  {{ item.category}}</h2>
      <h5>{{ item.title }}</h5>
      <h5>{{ item.description }}</h5>
      <h5>{{ item.location }}</h5>
      <button @click="sub"  
      class="btn btn-warning">Contact</button>
      <hr>
    </div>
    
      <!-- <btn-modal id="modal1" title="Please enter your name and E-mail" @ok="sub()">

       <form @submit.stop.prevent="submit">
         <btn-form-input type="text" placeholder="Enter your name" v-model="name"></btn-form-input>
         <br>
         <btn-form-input type="email" placeholder="Enter your E-mail" v-model="email"></btn-form-input>
       </form>
      </btn-modal> -->
  </div>
</template>
<script>
export default {
  fetchList:() =>{
    return ListResource.get()
  },
  name: 'search',
  data(){
    return{
      filter: '',
      category: '', 
      location: '',
      categories: [
	      {
      		label: '-select-',
          value: ''
        },
      	{
      		label: 'Search',
          value: 'Search'
        },
        {
        	label: 'Gift',
          value: 'Gift'
        }
      ],
      locations: [
      	{ label: '-select-', value: '' },
      	{ label: 'Point A', value: 'Point A' },
      	{ label: 'Point B', value: 'Point B' },
      	{ label: 'Point C', value: 'Point C' },
      	{ label: 'Point D', value: 'Point D' },
      	{ label: 'Point E', value: 'Point E' },
      ],
      search: "",
      email: "",
      name: "",
      emails: [],
      items: []
      }
    },
    methods:{
      sub: function(){
          this.$http.post('http://localhost/contact', 
          {name:name, email:email}).then(function(response){
            this.name = response.data;
            this.email = response.data;
          },
          function(response){
            //error
          });
        }
    },
    created: function(){
      this.$http.get('http://localhost:3000/data').then(function(response){
        this.items = response.data.slice(0,5);
      });
    },
    computed: {
      filteredItems: function(){
        let results = this.items.filter((item) => {
          return item.title.toLowerCase().match(this.search.toLowerCase()) &&
          	item.location.match(this.location) && 
            item.category.match(this.category);
        });
        return results
      }
    }
    
}

</script>