"use strict";
import Figure from './Figure.js';
//import Circle from './Circle.js';
import Rectangle from './Rectangle.js';
//import Square from './Square.js';

const form = {
    changeSelect(e) {
        console.log('option picked by user');
        const inputElement = `<label>
        YOUR LABEL NAME
        <input id="YOUR INPUT ID" type="number">
      </label>
      `
        document.querySelector('#otherInputs').insertAdjacentHTML = ('beforeend', inputElement);
    },
    init() {
        console.log('Form init!');

        document.querySelector('#form').addEventListener("submit", this.submitForm);
        document.querySelector('#select').addEventListener("select", this.changeSelect());
    },
    inputElementsWithLabel(label, id) {

    },
    submitForm(e) {
        e.preventDefault();
        console.log('form submitted');

        document.querySelector('#radius')
        const rectangle = new Rectangle("Rectangle", 20, 20);
        console.log(rectangle.innerHtml);
        document.querySelector('#results').innerHTML = rectangle.innerHtml;

    }
};




form.init();