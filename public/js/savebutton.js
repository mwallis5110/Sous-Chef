// let saveRecipe = document.getElementsByClassName("saveButton");
// saveRecipe.forEach(recipe => recipe.addEventListener("click", function (e) {
//   console.log(e.target.dataset);
//   console.log(e.target.title);
// }));
document.querySelectorAll(".saveButton").forEach((item) => {
    item.addEventListener("click", (event) => {
        let data = event.target.dataset;
        let recipe = {
            title: data.title,
            filename: data.filename,
            directions: data.directions,
            ingredients: data.ingredients,
            id: data.id,
        }
        fetch("/api/savedrecipes", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe)
        })
    });
});
