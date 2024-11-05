import juegosData from '../../data/juegos.json';

export default {
    juegos: juegosData.map(juego => ({
        ...juego,
        stock: parseInt(juego.stock, 10),
        precio: parseInt(juego.precio, 10)
      }))
}