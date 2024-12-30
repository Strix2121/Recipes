document.getElementById('toggleLanguage').addEventListener('click', function() {
    const langBtn = document.getElementById('toggleLanguage');
    const pageTitle = document.getElementById('pageTitle');
    const showRecipe = document.getElementById('showRecipe');
    const addIngredient = document.getElementById('addIngredient');
    const clearAll = document.getElementById('clearAll');
    const recipeNameInput = document.getElementById('recipeName');
    const ingredientInput = document.getElementById('ingredient');
    const recipeTableHeaders = document.querySelectorAll('#recipeTable th');
    
    if (langBtn.innerText === 'Switch to English') {
        langBtn.innerText = 'التبديل إلى العربية';
        pageTitle.innerText = 'Recipes';
        showRecipe.innerText = 'Show Recipe';
        addIngredient.innerText = 'Add Ingredient';
        clearAll.innerText = 'Clear All';
        recipeNameInput.placeholder = 'Enter Recipe Name';
        ingredientInput.placeholder = 'Enter Ingredient';
        recipeTableHeaders[0].innerText = 'Recipe Name';
        recipeTableHeaders[1].innerText = 'Ingredients';
    } else {
        langBtn.innerText = 'Switch to English';
        pageTitle.innerText = 'الوصفات';
        showRecipe.innerText = 'عرض الوصفة';
        addIngredient.innerText = 'إضافة المكونات';
        clearAll.innerText = 'مسح الكل';
        recipeNameInput.placeholder = 'ادخل اسم الوصفة';
        ingredientInput.placeholder = 'ادخل المكونات';
        recipeTableHeaders[0].innerText = 'اسم الوصفة';
        recipeTableHeaders[1].innerText = 'المكونات';
    }
});
