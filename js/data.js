// Declaracion de Clase, creacion de objetos y array de Zapatillas

class Calzado {
    constructor(marca, modelo, precio, image, id) {
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.image = image
        this.id = id
    }
}

const calzado1 = new Calzado('Nike', 'Jordan 1 Retro High OG "Rebellionaire"', 45000, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-retro-high-og-rebellionaire-air-jordan-kikikickz-563016_800x.jpg?v=1647007535', '001')
const calzado2 = new Calzado('Nike', 'Jordan 1 Mid "Diamond Shorts"', 35200, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-mid-diamond-shorts-air-jordan-kikikickz-663663_800x.progressive.jpg?v=1644151019', '002')
const calzado3 = new Calzado('Nike', 'Jordan 1 Retro High OG "Hyper Royal"', 37500, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-retro-high-og-hyper-royal-air-jordan-kikikickz-741519_800x.progressive.jpg?v=1617108157', '003')
const calzado4 = new Calzado('Nike', 'Air Jordan 1 Low "Cardinal Red"', 42500, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-low-cardinal-red-air-jordan-kikikickz-319063_800x.jpg?v=1651667250', '004')
const calzado5 = new Calzado('Nike', 'Jordan 1 Retro High "Tie Dye"', 56500, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-jordan-1-retro-high-tie-dye-air-jordan-kikikickz-144831_800x.progressive.jpg?v=1617107621', '005')
const calzado6 = new Calzado('Nike', 'Jordan 1 Mid "Barely Orange"', 72000, 'https://cdn.shopify.com/s/files/1/0496/4325/8009/products/baskets-air-jordan-1-mid-barely-orange-air-jordan-kikikickz-481549_800x.progressive.jpg?v=1617106994', '006')