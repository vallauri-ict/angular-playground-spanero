import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('A Test Recipe','This is simply a test','https://cdn.pixabay.com/user/2013/11/05/02-10-23-764_250x250.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
