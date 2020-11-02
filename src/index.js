import {model} from './model';
import {App} from './classes/app';
import './styles/main.css';

new App(model).init()


///////---3----////////
// const site = new Site('#site')
//
// site.render(model)
//
// const updateCallback = newBlock => {
//   model.push(newBlock)
//   site.render(model)
// }
//
// new Sidebar('#panel', updateCallback)


///////---2----////////
// model.forEach(block => {
//   site.insertAdjacentHTML('beforeend', block.toHTML())
// })


///////---1----////////
//model.forEach(block => {
  //let html = ''

  // if (block.type === 'title') {
  //   html = title(block)
  // } else if (block.type === 'text') {
  //   html = text(block)
  // } else if (block.type === 'columns') {
  //   html = columns(block)
  // } else if (block.type === 'image') {
  //   html = image(block)
  // }

  //const toHTML = templates[block.type]
  // if (toHTML) {
  //   $site.insertAdjacentHTML('beforeend', toHTML(block))
  // }
//})
