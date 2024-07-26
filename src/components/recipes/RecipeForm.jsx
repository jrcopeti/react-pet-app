import {
  sortedCuisines,
  sortedDietaryOptions,
  sortedTypesOfMeal,
} from "../../assets/data";

function RecipeForm({
  handleGenerateRecipe,
  handleIngredient1Input,
  handleIngredient2Input,
  handleIngredient3Input,
  handleIngredient4Input,
  handleGuestsInput,
  handleTimeInput,
  handleDifficultyInput,
  handleDietaryOptionsInput,
  handleCuisineInput,
  handleTypeOfMealInput,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  guests,
  time,
  difficulty,
  dietaryOption,
  cuisine,
  typeOfMeal,
}) {
  return (
    <>
      <form
        onSubmit={handleGenerateRecipe}
        className="flex flex-col items-center p-4"
      >
        <div className="flex w-full max-w-4xl flex-col items-center space-y-6 md:space-y-8 lg:space-y-10">
          <label className="form-control w-full">
            <div className="text-cyan-950text-xl label text-center">
              What have you got left in your fridge and pantry? Choose up to
              five ingredients for your recipe.
            </div>
          </label>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-2xl text-cyan-950">
                  Ingredient 1: <span className="text-cyan-950">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient1}
                onChange={handleIngredient1Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
                required
              />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl text-cyan-950">
                  Ingredient 2: <span className="text-cyan-950">*</span>
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient2}
                onChange={handleIngredient2Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
                required
              />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl text-cyan-950">
                  Ingredient 3:
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient3}
                onChange={handleIngredient3Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
              />
            </label>

            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text text-2xl text-cyan-950">
                  Vegetarian, lactose intolerant? Choose an option
                </span>
              </div>
              <select
                className="select select-bordered border-2 border-pallette-50 text-xl"
                name="options"
                onChange={handleDietaryOptionsInput}
                value={dietaryOption}
              >
                {sortedDietaryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl text-cyan-950">
                  Ingredient 4:
                </span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                value={ingredient4}
                onChange={handleIngredient4Input}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl"
              />
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-cyan-950">
                Do you have a preferred cuisine?
              </span>
            </div>
            <select
              className="select select-bordered text-cyan-950"
              name="difficulty"
              onChange={handleCuisineInput}
              value={cuisine}
            >
              <option>Pick one</option>
              {sortedCuisines.map((cuisine) => (
                <option key={cuisine.value} value={cuisine.value}>
                  {cuisine.label}
                </option>
              ))}
            </select>
          </label>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl text-cyan-950">
                  How much time do you have for cooking?
                  <span className="text-cyan-950">*</span>
                </span>
              </div>
              <div className="w-full text-cyan-950">
                <input
                  type="range"
                  required
                  min={15}
                  max="90"
                  value={time}
                  step="15"
                  onChange={handleTimeInput}
                  className="range text-xl"
                />
                <div className="flex w-full justify-between px-2 text-xs text-cyan-950">
                  <span>15</span>
                  <span>30</span>
                  <span>45</span>
                  <span>60</span>
                  <span>75</span>
                  <span>90</span>
                </div>
                <div className="mt-2 text-center text-cyan-950">
                  {time} Minutes
                </div>
                <div className="label">
                  <span className="label-text-alt"></span>
                </div>
              </div>
            </label>

            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl text-cyan-950">
                  For how many people do you like to cook?
                  <span className="text-cyan-950">*</span>
                </span>
              </div>
              <input
                required
                type="number"
                placeholder="2"
                value={guests}
                onChange={handleGuestsInput}
                className="input input-bordered w-full border-2 border-pallette-50 text-xl text-cyan-950"
              />
              <div className="label">
                <span className="label-text-alt"></span>
              </div>
            </label>
          </div>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl text-cyan-950">
                What type of meal?
              </span>
            </div>
            <select
              className="select select-bordered border-2 border-pallette-50 text-xl text-cyan-950"
              name="difficulty"
              onChange={handleTypeOfMealInput}
              value={typeOfMeal}
            >
              <option>Pick one</option>
              {sortedTypesOfMeal.map((meal) => (
                <option key={meal.value} value={meal.value}>
                  {meal.label}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-2xl">
                For how many people do you like to cook?
                <span className="text-red-500">*</span>
              </span>
            </div>
            <input
              type="number"
              required
              placeholder="2"
              value={guests}
              onChange={handleGuestsInput}
              className="input input-bordered w-full max-w-xs border-2 border-pallette-50 text-xl"
            />
            <div className="label"></div>
          </label>
          <label className="form-control w-full max-w-xs text-xl">
            <label className="form-control mx-auto w-full max-w-xs">
              <div className="label">
                <span className="label-text text-xl">
                  Vegetarian? Any intolerances?
                </span>
              </div>
              <select
                className="select select-bordered w-full border-2 border-pallette-50 text-xl"
                name="options"
                onChange={handleDietaryOptionsInput}
                value={dietaryOption}
              >
                <option value="none"> None </option>
                <option value="pescetarian">Pescetarian</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="lactoseFree">Lactose Free</option>
                <option value="gluten">Gluten Free</option>
              </select>
            </label>
          </label>

          <label className="form-control mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl">
                How advanced are your cooking skills?
              </span>
            </div>
            <select
              className="select select-bordered w-full border-2 border-pallette-50 text-xl"
              name="difficulty"
              onChange={handleDifficultyInput}
              value={difficulty}
            >
              <option value="easy">Bloody Beginner</option>
              <option value="medium">Hobby Cook</option>
              <option value="hard">Chef</option>
            </select>
          </label>

          <label className="form-control mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl">
                Do you have a preferred cuisine?
              </span>
            </div>
            <select
              className="select select-bordered w-full border-2 border-pallette-50 text-xl"
              name="cuisine"
              onChange={handleCuisineInput}
              value={cuisine}
            >
              <option>Pick one</option>
              <option value="asian">Asian</option>
              <option value="mediterranean">Mediterranean</option>
              <option value="fusion">Fusion</option>
              <option value="spicy">Spicy</option>
              <option value="sweet">Sweet</option>
            </select>
          </label>

          <label className="form-control mx-auto w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xl">What type of meal?</span>
            </div>
            <select
              className="select select-bordered w-full border-2 border-pallette-50 text-xl"
              name="mealType"
              onChange={handleTypeOfMealInput}
              value={typeOfMeal}
            >
              <option>Pick one</option>
              <option value="starter">Starter</option>
              <option value="main-course">Main Course</option>
              <option value="dessert">Dessert</option>
              <option value="snack">Snack</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
            </select>
          </label>
        </div>

        <div className="form-control mx-auto flex w-full max-w-xs">
          <button
            className="rounded-lg border-2 border-pallette-50 bg-pallette-300 px-9 py-3 text-3xl font-normal text-pallette-500 shadow-md shadow-slate-500 transition duration-200 hover:bg-pallette-50 hover:text-pallette-500"
            type="submit"
          >
            Generate Recipe
          </button>
        </div>
      </form>
    </>
  );
}

export default RecipeForm;
