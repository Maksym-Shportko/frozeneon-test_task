<template>
  <div id="app">
    <div id="nav">
      <Header />
      <ListOfPackages />
      <Pagination />
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import ListOfPackages from "@/components/ListOfPackages";
import Pagination from "@/components/Pagination";
export default {
  name: "App",
  components: { Header, ListOfPackages, Pagination },
};
</script>

<style lang="scss"></style>
