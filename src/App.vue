
<template>
  <Nav></Nav>
      <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import store from './store';
import { onMounted } from 'vue';
import axios from 'axios';

onMounted(() => {
  const token = store.state.token;
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    store.dispatch("FetchUser");
  }
});


</script>
