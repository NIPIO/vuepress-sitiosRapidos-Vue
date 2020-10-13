<template>
  <div class="">
      <h3>Esto viene de un componente</h3>
      <ul>
        <li v-for="item in items">{{item.nombre}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {nombre: 'item 1'},
        {nombre: 'item 2'},
        {nombre: 'item 3'},
      ]
    }
  }  
}
</script>

