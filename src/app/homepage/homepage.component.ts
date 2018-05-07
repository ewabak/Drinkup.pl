import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  fetchDrinks() {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita');
    HTTPRequest.onload = function() {
      var drinksArray = JSON.parse(HTTPRequest.responseText);
      scope.printDrinksToView(drinksArray);
    };
    HTTPRequest.send();
  }

  printDrinksToView(drinksArray) {
    var outputDrinks = document.getElementById('drinks_list');

    drinksArray['drinks'].forEach((drink) => {
      var outputHTML = '<div class="drink">' +
                          '<img src="' + drink['strDrinkThumb'] + '">' +
                          '<div>' +
                            '<h1>' +
                            drink['strDrink']  +
                            '</h1>' +
                            '<h2>' +
                            drink['strCategory'] +
                            '</h2>' +
                          '</div>' +
                        '</div>';
      outputDrinks.innerHTML += outputHTML;
      console.log(drink);
    });
  }
}
