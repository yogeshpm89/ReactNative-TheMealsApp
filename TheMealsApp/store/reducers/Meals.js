import { MEALS } from '../../data/mock-data';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/Meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const index = state.favoriteMeals.findIndex(meal => meal.id === action.mealId)
            if (index === -1) {
                const newMeal = state.meals.find(meal => meal.id === action.mealId)
                const newFavoriteMeals = state.favoriteMeals.concat(newMeal)
                console.log('newFavoriteMeals.length', newFavoriteMeals.length);
                return { ...state, favoriteMeals: newFavoriteMeals }
            } else {
                const updatedFavoriteMeals = [...state.favoriteMeals];
                updatedFavoriteMeals.splice(index, 1);
                return { ...state, favoriteMeals: updatedFavoriteMeals }
            }
        case SET_FILTERS:
            const appliedFilters = action.filters;
            const updateFilteredMeals = state.meals.filter(meal => {
                if (appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                    return false;
                }
                if (appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                    return false;
                }
                if (appliedFilters.isVegan && !meal.isVegan) {
                    return false;
                }
                if (appliedFilters.isVegetarian && !meal.isVegetarian) {
                    return false;
                }
                return true;
            });
            return { ...state, filteredMeals: updateFilteredMeals }
        default:
            return state;
    }

}

export default mealsReducer;