import _ from 'lodash'
import './style.css'
import './style.scss'
import logo from './lemon.png'


function component() {
  const	element = document.createElement('div');
  const array = ['World', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
document.body.classList.add('haikei')

const image = new Image()
image.src = logo
document.body.appendChild(image);