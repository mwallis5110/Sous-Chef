document.querySelectorAll(".deleteButton").forEach((item) => {
    item.addEventListener("click", async(event) => {
        console.log("WE CLICKED THE BUTTON!");
        let data = event.target.dataset;

        let recipe = {
            title: data.title,
            filename: data.image,
            directions: data.directions,
            ingredients: data.ingredients,
            id: data.id,
        };

        await fetch(`/api/savedrecipes/${data.id}`, {
            method: "DELETE",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        event.target.parentElement.remove()
    });
});