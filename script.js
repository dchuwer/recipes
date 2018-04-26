var RecipeApp = function () {

    
    var recipes = [
         { 
             name: 'Best Chicken Soup!', 
             image: 'https://static01.nyt.com/images/2016/11/29/dining/recipelab-chick-noodle-still/recipelab-chick-noodle-still-master675.jpg',
             ingredients: [
                 { name: 'whole chicken' },
                 { name: 'medium carrots'},
                 { name: 'onions' },
             ] 
         }
    ];

    var $recipes = $('.recipes');

    //id's for recipes
    var recId = 0;

    //id's for ingredients
    var ingId = 0;

    var createRecipe = function(name, image){
        var recipe = {
            name: name,
            image: image, 
            ingredients: [],
            id: recId
        };

        //keeps recipe ids unique 
        recId ++; 

        recipes.push(recipe);
    };

    var createIngredients = function(nIingredient,rID){
        
        
        var ingredient = {
            name : nIingredient,
            id: rId

        }
        for (let i = 0; i < recipes.legth; i++){
            if(recipes[i].recId == rID)
               var recipe = recipes[i]
        }
        


        recipe.ingredients.push(ingredient);
    };

    var _getIngredients = function(rIngredient){
        
        var listIngredients = [];
        for (let i=0; i < rIngredient.length; i++){
            listIngredients.push(rIngredient[i].name)
          }
        return listIngredients
    };

    var renderRecipes = function () {
        //empty recipes div
        $recipes.empty();

        for(var i = 0; i < recipes.length; i ++){
            //current recipe in iteration
            var recipe = recipes[i];

            //return HTML for all ingredients
            var ingredients = _getIngredients(recipe.ingredients); //add code
            

            $recipes.append(
                '<div class="recipe col-md-6  offset-md-3 img-fluid shadow" data-id="' + recipe.id + '">' + 
                    '<h4 class="text-capitalize font-italic text-center">' + recipe.name + '</h4>' +
                    '<img class="recipe-img" src="' + recipe.image + '"/>' +
                    '<hr>' +
                    '<h5 class="font-italic font-bold text-center">ingredients</h5>' +
                    '<div class="input-group mb-3">' +
                        '<div class="input-group-prepend">' +
                            
                    /* call to add ingredient */   
                        
                        '<input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3">' +
                        '<button class="btn btn-primary add-ingredient" type="button"">Add Ingredients</button>' +
                    '</div>' +
                    '<ul class="ingredients">' + ingredients + '</ul>'+
                '</div>'
            );
        }
    };

    return {
        createRecipe: createRecipe,
        renderRecipes: renderRecipes,
        createIngredients: createIngredients
    }
};

var app = RecipeApp();



//--------EVENTS

//add a recipe
$('.add-recipe').on('click', function(){
    //collect input text
    var name = $('#basic-url').val();
    var image = $('#recipe-image').val();

    //add recipe to array and render
   // app.createRecipe(name, image);
    app.renderRecipes();
});



$('.add-ingredient').on('click', function(){
    //collect input text
    var nameIngredient = $('basic-url').val();
    var rId = $(this).closest('.recipe').data().id;

    //add Ingredient to array and render
    app.createIngredients(nameIngredient,rId);
    //app.renderRecipes();
});
