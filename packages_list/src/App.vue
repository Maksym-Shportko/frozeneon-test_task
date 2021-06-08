<template>
  <div id="app">
    <div id="nav">
      <Header />
      <ListOfPackages />
      <Pagination />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ListOfPackages from "@/components/ListOfPackages";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: { Footer, Header, ListOfPackages, Pagination },
};
</script>

<style lang="scss"></style>
