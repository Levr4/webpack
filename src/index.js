import _ from 'lodash'
import Lion from './utilities.js'

console.log(Lion.say());

function component() {
	const	element = document.createElement('div');
	const array = ['World', 'webpack', '!!']
	element.innerHTML = _.join(array, ' ')
	return element;
}

document.body.appendChild(component());