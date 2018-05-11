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

  fetchDrinks(input) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + input);
    HTTPRequest.onload = function() {
      var drinksArray = JSON.parse(HTTPRequest.responseText);
      scope.printDrinksToView(drinksArray);
    };
    HTTPRequest.send();
  }

  fetchDrinksByFilter(filters) {
    var scope = this;

    var HTTPRequest = new XMLHttpRequest();
    HTTPRequest.open('GET', 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + filters[0]);
    HTTPRequest.onload = function() {
      var drinksArray = JSON.parse(HTTPRequest.responseText);
      scope.printDrinksToView(drinksArray);
    };
    HTTPRequest.send();
  }

  printDrinksToView(drinksArray) {
    var outputDrinks = document.getElementById('drinks_list');

    if (Array.isArray(drinksArray['drinks'])) {
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
      });
    } else {
      outputDrinks.innerHTML = '<h1>Brak drinków do wyświetlenia!';
    }
  }

  searchByName(input, event) {
    var inactiveSearch = document.getElementsByClassName('search2');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    document.getElementById('back_button').classList.remove('hidden');
    this.fetchDrinks(input);
  }

  searchByFilters() {
    var inactiveSearch = document.getElementsByClassName('search1');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    var inactiveSearch = document.getElementsByClassName('search2');
    for (var i = 0; i < inactiveSearch.length; i++) {
      inactiveSearch[i].classList.add('hidden');
    }

    var filters = []
    // var filtersCollection = document.getElementsByClassName('filter');
    var f = document.querySelectorAll('.filter');
    for (var i = 0; i < f.length; i++) {
      // if (f[i].checked) {
      //   console.log(f[i].checked);
      //   console.log(f[i].id);
      //   filters.push(f[i].id);
      // }
    }

    document.getElementById('back_button').classList.remove('hidden');
    this.fetchDrinksByFilter(filters);
  }

  backButtonClicked() {
    document.getElementById('back_button').classList.add('hidden');
    document.getElementById('drinks_list').innerHTML = '';

    var searches1 = document.getElementsByClassName('search1');
    var searches2 = document.getElementsByClassName('search2');

    for (var i = 0; i < searches1.length; i++) {
      searches1[i].classList.remove('hidden');
    }

    for (var i = 0; i < searches2.length; i++) {
      searches2[i].classList.remove('hidden');
    }
  }
}