<template>
  <div>
    <Navbar></Navbar>
    <Hero></Hero>
    <About></About>
    <Contact></Contact>
    <Viewcontact></Viewcontact>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from './layout/Navbar.vue';
import Footer from './layout/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact'
import Viewcontact from './components/Viewcontact'
export default {
  name: 'HelloWorld',
  components: {
    Navbar,
    Hero,
    About,
    Contact,
    // Viewcontact,
    Footer,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
