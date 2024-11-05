<template>
  <div class="container my-4">
    <h1 class="text-center mb-4">Tienda de Juegos 32 Bits</h1>
    <h2 class="text-center mb-4">Listado de Juegos</h2>
    <table class="table table-striped table-bordered">
      <thead class="table-dark">
        <tr>
          <th>Código</th>
          <th>Nombre</th>
          <th>Stock</th>
          <th>Precio</th>
          <th>Color</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="juego in juegos" :key="juego.codigo" :style="{ color: juego.color }">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>${{ juego.precio }}</td>
          <td>{{ juego.color }}</td>
          <td>
            <button 
              @click="modificarStock({ codigo: juego.codigo, cantidad: -1 })" 
              :disabled="juego.stock <= 0"
              class="btn btn-danger btn-sm me-2">
              -
            </button>
            <button 
              @click="modificarStock({ codigo: juego.codigo, cantidad: 1 })" 
              class="btn btn-success btn-sm">
              +
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState(['juegos']) // Mapeamos el estado global de los juegos
  },
  methods: {
    ...mapActions(['modificarStock']), // Mapeamos la acción para modificar el stock
  }
};
</script>

<style scoped>
.table {
  width: 100%;
  margin-top: 20px;
}
</style>
