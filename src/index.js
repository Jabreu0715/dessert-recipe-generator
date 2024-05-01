function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 25,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-text");
  let apiKey = "23ftbd4aecd5fa6f4304ea2800dofdbf";
  let prompt = `User instructions: Generate a delicious ${instructionsInput.value} dessert recipe`;
  let context =
    "You are an expert in delicious desserts and you love simple dessert recipes. Your mission is to generate a delicious dessert recipe in basic HTML. Please follow the user instructions carefully. Please include estimated cooking time, how many servings per recipe, serving size and calories per serving. ";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating Recipe");
  console.log(`Prompt:${prompt}`);
  console.log(`Context:${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
