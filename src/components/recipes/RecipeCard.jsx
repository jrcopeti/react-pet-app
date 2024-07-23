function RecipeCard({ recipe, handleFavoriteRecipe, handleDiscardRecipe }) {
  if (!recipe) return;
  return (
    <div className="rounded-lg border border-pallette-200 bg-pallette-400 p-6 shadow-lg">
      <h2 className="mb-2 text-3xl font-bold">{recipe.title}</h2>
      <p className="mb-4 text-cyan-950">{recipe.description}</p>
      <p>
        <strong>Preparation Time:</strong> {recipe.preparationTime}
      </p>
      <p>
        <strong>Difficulty Level:</strong> {recipe.difficultyLevel}
      </p>
      <p>
        <strong>Dietary Compliance:</strong> {recipe.dietaryOptions}
      </p>
      <h3 className="mb-2 mt-4 font-semibold">Ingredients:</h3>
      <ul className="mb-4 list-inside list-disc">
        {recipe.ingredients.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <h3 className="mb-2 mt-4 font-semibold">Instructions:</h3>
      <ol className="mb-4 list-inside list-decimal">
        {recipe.instructions.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
      <p>
        <strong>Serving Size:</strong> {recipe.servingSize}
      </p>
      <p>
        <strong>Notes and Tips:</strong> {recipe.tips}
      </p>
      <button
        className="btn btn-secondary mt-4 bg-pallette-100 text-black"
        onClick={() => handleFavoriteRecipe(recipe)}
      >
        Save to Favorites
      </button>
      <button
        className="btn btn-secondary mt-4 bg-pallette-100 text-black"
        onClick={() => handleDiscardRecipe()}
      >
        Get Another Recipe
      </button>
    </div>
  );
}

export default RecipeCard;
