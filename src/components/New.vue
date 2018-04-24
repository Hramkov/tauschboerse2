
<template>
<div>
  <br>
  <h6>
    Title
  </h6>
  <input class="form-control" type="text" v-model="user.title" placeholder="Title...">
  <h6>
    Discription
  </h6>
  <textarea class="form-control" v-model="user.discription" placeholder="Discription..."></textarea>
  <h6>
    Phone
  </h6>
  <input class="form-control" type="text" v-model="user.phone" placeholder="Phone...">
  <h6>
    Category
  </h6>
    <div>
      <select class="form-control" v-model="user.location" >
        <option v-for="location in locations" :value="location.value">{{location.label}}</option>
      </select>
    </div>
  <h6>
    Location
  </h6>
    <div>
      <select class="form-control" v-model="user.category">
        <option v-for="category in categories" :value="category.value">{{category.label}}</option>
      </select>
    </div>
  <h6>
    Firstname
  </h6>
  <input class="form-control" type="text" v-model="user.firstname" placeholder="Firstname...">
  <h6>
    Lastname
  </h6>
  <input class="form-control" type="text" v-model="user.lastname" placeholder="Lastname...">
  <h6>
    E-mail
  </h6>
  <input class="form-control" type="email" v-model="user.e_mail" placeholder="E-mail...">
  <h6>
    Password
  </h6>
  <input class="form-control" type="password" v-model="user.password" placeholder="Password...">
  <br>
  <br>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" v-model="user.agree">
    <label class="form-check-label" for="exampleCheck1">Agree</label>
  </div>
  <br>  
  <button class="btn btn-warning" @click="submit">Send</button>
</div>
</template>
<script>
  export default {
    data(){
      return{
        user:{
          title: '',
          discription: '',
          phone: '',
          firstname: '',
          lastname: '',
          e_mail: '',
          password: '',
          agree: '',
          category: '', 
          location: ''
        },
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
          ]
      }
    },
    methods:{
    submit(){
       this.$http.post('http://localhost:3000/data', this.user)
         .then(response => {
             console.log(response);
         }, error => {
           console.log(error);
         });
    }
    }
  }
</script>