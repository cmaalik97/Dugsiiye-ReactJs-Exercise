import { createBrowserRouter } from 'react-router-dom';
import App3 from '../../App3';
import NotFound from './NotFound';
import Home from './Home';
import RecipeList from './RecipeList';
import RecipeDetail from './RecipeDetail';
import Categories from './Categories';
import CategoryRecipes from './CategoryRecipes';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <App3/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'recipes',
        element: <RecipeList/>
      },
      {
        path: 'recipes/:id',
        element: <RecipeDetail/>
      },
      {
        path: 'categories',
        element: <Categories/>,
        children: [
          {
            path: ':categoryId',
            element: <CategoryRecipes/>
          },
        ],
      },
    ],
  },
]);