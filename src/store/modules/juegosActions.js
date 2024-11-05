export default {
        async modificarStock({ commit }, payload) {
          try {
            commit('MODIFICAR_STOCK', payload);
          } catch (error) {
            console.error('Error al modificar el stock:', error);
          }
        }
}