<template>
  <nav class="navbar navbar-default">
    <router-link to="/" class="navbar-brand">Home</router-link>
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link to="/list" 
          activeClass="active" tag="li"><a>List</a></router-link>
        <router-link to="/new" 
          activeClass="active" tag="li"><a>New</a></router-link>
      </ul>
    </div>
  </nav>
</template>