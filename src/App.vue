
<template>
  <Nav></Nav>
      <router-view></router-view>
  <Footer></Footer>
</template>

<script setup>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Homepage from './pages/Homepage.vue';

// import axios from 'axios';

// const user = Object

// const userdetails = () => {
//   axios.get('http://127.0.0.1:8000/api/customer/info')
//     .then(response => {
//       console.log(response);
//     })
//     .error(error => {
//       console.log(error);
//     })
// }

</script>
