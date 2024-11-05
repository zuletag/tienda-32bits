export default {
    MODIFICAR_STOCK(state, { codigo, cantidad }) {
        const juego = state.juegos.find(j => j.codigo === codigo);
        if (juego && juego.stock + cantidad >= 0) {
          juego.stock += cantidad;
        }
      }
}