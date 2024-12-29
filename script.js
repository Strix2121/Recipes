document.getElementById('showRecipe').addEventListener('click', function() {
    const recipeName = document.getElementById('recipeName').value;
    if (recipeName === '') {
        alert('يرجى ملء الحقل الخاص باسم الوصفة');
    } else {
        document.getElementById('displayRecipeName').innerText = recipeName;
    }
});

document.getElementById('addIngredient').addEventListener('click', function() {
    const ingredient = document.getElementById('ingredient').value;
    if (ingredient === '') {
        alert('يرجى ملء الحقل الخاص بالمكونات');
    } else {
        const li = document.createElement('li');
        li.innerText = ingredient;
        document.getElementById('ingredientList').appendChild(li);
        document.getElementById('ingredient').value = '';
    }
});

document.getElementById('clearAll').addEventListener('click', function() {
    document.getElementById('recipeName').value = '';
    document.getElementById('ingredient').value = '';
    document.getElementById('displayRecipeName').innerText = '';
    document.getElementById('ingredientList').innerHTML = '';
});

document.getElementById('toggleLanguage').addEventListener('click', function() {
    const langBtn = document.getElementById('toggleLanguage');
    const pageTitle = document.getElementById('pageTitle');
    const showRecipe = document.getElementById('showRecipe');
    const addIngredient = document.getElementById('addIngredient');
    const clearAll = document.getElementById('clearAll');
    const recipeNameInput = document.getElementById('recipeName');
    const ingredientInput = document.getElementById('ingredient');
    
    if (langBtn.innerText === 'Switch to English') {
        langBtn.innerText = 'التبديل إلى العربية';
        pageTitle.innerText = 'Recipes';
        showRecipe.innerText = 'Show Recipe';
        addIngredient.innerText = 'Add Ingredient';
        clearAll.innerText = 'Clear All';
        recipeNameInput.placeholder = 'Enter Recipe Name';
        ingredientInput.placeholder = 'Enter Ingredient';
    } else {
        langBtn.innerText = 'Switch to English';
        pageTitle.innerText = 'منشئ الوصفات';
        showRecipe.innerText = 'عرض الوصفة';
        addIngredient.innerText = 'إضافة المكونات';
        clearAll.innerText = 'مسح الكل';
        recipeNameInput.placeholder = 'ادخل اسم الوصفة';
        ingredientInput.placeholder = 'ادخل المكونات';
    }
});
