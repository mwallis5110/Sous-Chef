console.log("JS FILE LOADED!!!!!!!!!!!");
document.querySelectorAll(".saveButton").forEach((item) => {
    item.addEventListener("click", (event) => {
        console.log("WE CLICKED THE BUTTON!");
        let data = event.target.dataset;
        console.log('Data we r gonna save', data)
        let recipe = {
            title: data.title,
            filename: data.image,
            directions: data.directions,
            ingredients: data.ingredients,
            id: data.id,
        };
        console.log("About to save this thing", recipe);
        fetch("/api/savedrecipes", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(recipe),
        });
    });
});