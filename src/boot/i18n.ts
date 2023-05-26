import { createI18n } from 'vue-i18n';
const i18n = createI18n({
  // default locale
  locale: 'ru',
  // translations
  messages: {
    ru: {
      smartphones: 'Смартфоны',
      laptops: 'Ноутбуки',
      'home-decoration': 'Предметы декора',
      'mens-watches': 'Мужские часы',
      'womens-watches': 'Женские часы',
      tv: 'Телевизоры',
      headphones: 'Наушники',
      gaming: 'Игровые приставки',
      tablets: 'Планшеты',
      cameras: 'Камеры',
      mouse: 'Мышки',
      smartwatches: 'Умные часы',
    },
  },
});
export default i18n;
