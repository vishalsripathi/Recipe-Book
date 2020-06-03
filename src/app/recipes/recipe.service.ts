import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shoppingList/shoppingList.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Fish Recipe',
  //     'How to make Fish',
  //     'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Spices', 12)]
  //   ),
  //   new Recipe(
  //     'Burger Recipe',
  //     'How to make Burger',
  //     'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962996_960_720.jpg',
  //     [
  //       new Ingredient('Buns', 2),
  //       new Ingredient('Meat', 1),
  //       new Ingredient('French Fries', 15),
  //     ]
  //   ),
  //   new Recipe(
  //     'Chicken Recipe',
  //     'How to make fried chicken',
  //     'https://cdn.pixabay.com/photo/2020/03/28/14/53/fried-chicken-4977369_960_720.jpg',
  //     [
  //       new Ingredient('chicken pieces', 4),
  //       new Ingredient('Oil', 1),
  //       new Ingredient('Salt', 1),
  //     ]
  //   ),
  // ];

  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }
}
