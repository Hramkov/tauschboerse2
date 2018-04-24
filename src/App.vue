<template>
  <div id="app">
    <div class="container">
      <div class="col-xs-12">
        <app-header></app-header>
        <router-view/>
      </div>
      
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
export default {
      components:{
          appHeader: Header,
      }
    }
</script>

<style>

</style>
