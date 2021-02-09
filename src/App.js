import React from 'react';
import PageHeader from './PageHeader.js';
import SweetSweetCake from './ImgSection.js';
import IngredientCard from './IngredientCard.js';
import SweetSweetRecipe from './RecipeSection.js'
import PageFooter from './PageFooter.js'
class App extends React.Component {
  render() {
    return (
      <body className="page-body">
        <PageHeader />
        <SweetSweetCake />
        <SweetSweetRecipe />
        <IngredientCard className="ingredient-page-list" />
        <PageFooter />
      </body>
    )
  }
}
export default App;