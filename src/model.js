import image from './assets/image.png';
import {Block} from "./classes/block";
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from "./classes/block";

const text = `
Конструктор сайтов на JavaScript!
`

export const model = [
  new TitleBlock('Кнструктор сайтов на чистом JS', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240)',
      color: 'white',
      padding: '1.5rem',
      'text-align': 'center'
    }
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center'
    },
    imageStyles: {
      width: '500px',
      height: 'auto'
    },
    alt: 'Это картинка'
  }),
  new ColumnsBlock([
    'Приложение на чистом JavaScript, без использования библиотек',
    'использование принципа SOLID и ООП в JavaScript',
    'JavaScript - это интересно.'
  ], {
  styles: {
    background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
      padding: '2rem',
      color: '#fff',
      'font-weight': 'bold'
  }}),
  new TextBlock(text, {
    tag: 'p',
    styles: {
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
      padding: '1rem',
      'text-align': 'justify',
      'font-style': 'italic'
    }
  }),
]
