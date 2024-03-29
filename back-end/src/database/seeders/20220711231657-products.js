"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert("products", [
      {
        id: 1,
        name: "Skol Lata 350ml",
        price: 2.2,
        url_image: "https://i.ibb.co/0DjSkR2/skol-lata-350ml.jpg",
      },
      {
        id: 2,
        name: "Heineken 600ml",
        price: 7.5,
        url_image: "https://i.ibb.co/2vtQ4yf/heineken-600ml.jpg",
      },
      {
        id: 3,
        name: "Antarctica Pilsen 300ml",
        price: 2.49,
        url_image: "https://i.ibb.co/Pc6Q71r/antarctica-pilsen-300ml.jpg",
      },
      {
        id: 4,
        name: "Brahma 600ml",
        price: 7.5,
        url_image: "https://i.ibb.co/1rBsXjR/brahma-600ml.jpg",
      },
      {
        id: 5,
        name: "Skol 269ml",
        price: 2.19,
        url_image: "https://i.ibb.co/k1RNRqJ/skol-269ml.jpg",
      },
      {
        id: 6,
        name: "Skol Beats Senses 313ml",
        price: 4.49,
        url_image: "https://i.ibb.co/N62Q78M/skol-beats-senses-313ml.jpg",
      },
      {
        id: 7,
        name: "Becks 330ml",
        price: 4.99,
        url_image: "https://i.ibb.co/pXQRTSZ/becks-330ml.jpg",
      },
      {
        id: 8,
        name: "Brahma Duplo Malte 350ml",
        price: 2.79,
        url_image: "https://i.ibb.co/tZp1T4p/brahma-duplo-malte-350ml.jpg",
      },
      {
        id: 9,
        name: "Becks 600ml",
        price: 8.89,
        url_image: "https://i.ibb.co/BGhh0Jj/becks-600ml.jpg",
      },
      {
        id: 10,
        name: "Skol Beats Senses 269ml",
        price: 3.57,
        url_image: "https://i.ibb.co/n6XPXv7/skol-beats-senses-269ml.jpg",
      },
      {
        id: 11,
        name: "Stella Artois 275ml",
        price: 3.49,
        url_image: "https://i.ibb.co/56B4V4W/stella-artois-275ml.jpg",
      },
    ]),

  down: async (queryInterface) =>
    queryInterface.bulkDelete("products", null, {}),
};
