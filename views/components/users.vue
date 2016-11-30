<template lang="html">
  <div class="">
      <h1>{{title}}</h1>
      <ul>
          <li v-for="user in users">
              <a v-bind:href="'/users/' + user.name">{{ user.name }}</a>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props: ['title', 'users']
}
</script>

<style lang="css">
</style>
