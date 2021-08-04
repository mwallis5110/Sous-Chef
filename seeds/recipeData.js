const { Recipe } = require('../models');

const recipeData = [{
        title: 'Thai-Inspired Watermelon Salad ',
        ingredients: '1 large shallot roughly chopped, 1 large jalapeño cut into 4 pieces (with seeds for more spice!), 2small limes, 1 tablespoon palm sugar or light brown sugar, 10yellow cherry tomatoes halved, 3 tablespoons fish sauce, 6 cups cubed watermelon (from a 2-pound piece with rind), 1 ½cups packed cilantro leaves, ½cup lightly packed basil coarsely chopped, ¼cup salted peanuts, chopped',
        directions: '1 Using a large mortar and pestle (or a bowl with a cocktail muddler to smash) mash the shallot jalapeño halved lime and palm sugar in a bowl ,2 Transfer to a large bowl and add the tomatoes lime juice from the second lime and fish sauce and lightly mash about 10 times ,3 Add the watermelon cilantro and basil and gently toss then correct seasoning with more lime juice and fish sauce to taste. Garnish with peanuts.',
        filename: 'watermelon_salad.jpg'
    },
    {
        title: 'Cheese-Stuffed Bacon-Wrapped Dates',
        ingredients: '12 pitted Medjool dates ,2 ounces creamy goat cheese, blue cheese or Boursin cheese ,6 slices bacon, halved lengthwise ,3 tablespoons dark brown sugar ,kosher salt and freshly ground black pepper for seasoning',
        directions: '1 Preheat the oven to 400°F. Stuff each date with 2 tablespoons cheese wrap half a bacon slice around the stuffed date, and skewer with a toothpick to secure. ,2 Rub each wrapped date with a teaspoon of sugar, arrange on a baking sheet, and bake, turning once, until bacon is crisped and the date is caramelized 10–12 minutes total.',
        filename: 'dates.jpg'
    },
    {
        title: 'Pepper\'s Papaya Salad',
        ingredients: '4 garlic cloves ,3 dried Thai bird chiles (or dried chiles de arbol) ,5 cherry tomatoes halved ,5 lime wedges ,½ firm tomato cut into wedges ,4 tablespoons fish sauce (or to taste) ,½ green (unripe) papaya peeled and shredded (2–3 cups',
        directions: '1 Mash garlic cloves and chiles. Add more chiles for more spice! ,2 Add halved cherry tomatoes and lime palm sugar and fish oil. Continue to mash.,3 Mix in chopped papaya and give it a final mashing. (I love eating this with a side of pork rinds!)',
        filename: 'papaya_salad.jpg'
    },
    {
        title: 'Grilled Asparagus with Egg',
        ingredients: '2 tablespoons olive oil 6 asparagus spears trimmed ,1 egg ,kosher salt and freshly ground black pepper to taste ,Hot sauce of your choice for serving',
        directions: '1 In a bowl toss asparagus in 1 tablespoon olive oil kosher salt and pepper. Preheat a grill pan (such as the Cravings nonstick enamel grill pan) over medium-high heat add asparagus and immediately cover (with any lid you have that will cover the asparagus fully) to steam-grill. Keep covered for 3 minutes then uncover flip the asparagus and grill for 2 more minutes. If you like your asparagus a little softer grill for an additional minute. Transfer to a plate and cover to keep warm. ,2 Heat a nonstick skillet over medium-high heat for a few minutes and add the remaining oil to the skillet. Crack the egg into the skillet and cook 1 ½ minutes until the yolk just sets then swirl the pan gently so the egg slides around and some of the oil pools around the edges of the whites. Cook until the whites are set golden around the edges and slightly lacy but the yolks are still runny 2–3 minutes. ,3 Lift the egg out of the pan leaving behind as much oil as you like and place it on top of the asparagus. Season with more salt and pepper and serve right away—ideally with plenty of hot sauce.',
        filename: 'asparagus_egg.jpg'
    },
    {
        title: 'Garlic Roasted Bacon',
        ingredients: '12 slices thick-cut bacon ,3 cloves garlic chopped',
        directions: '1 Preheat the oven to 375°F. ,2 Lay the bacon out on a parchment- or foil-lined rimmed baking sheet so the slices don’t overlap. Sprinkle the garlic all over the bacon. Roast until crisp 12 to 15 minutes.',
        filename: 'bacon.jpg'
    },
    {
        title: 'John\'s Macaroni & Cheese',
        ingredients: 'tablespoons (½ stick) unsalted butter, plus more for buttering the baking dish ,3 cups (3\4 pound) dry elbow macaroni ,2 (12-ounce) cans evaporated milk ,⅓ cup whole milk ,2 eggs ,2 teaspoons seasoning salt ,1 teaspoon garlic powder ,½ teaspoon freshly ground black pepper ,4 cups (1 pound) extra-sharp cheddar cheese grated ,2 cups (1\2 pound) Monterey Jack cheese grated ,Paprika for sprinkling',
        directions: '1 Preheat the oven to 375°F. Generously butter a 9-x-13-inch glass baking dish. Set aside. Bring a large pot of salted water to a boil. Add the macaroni and according to package directions until al dente. Drain well and return the pasta to pot. Add the 4 tablespoons butter and toss until pasta is coated and butter has melted; set aside. ,2 In a medium bowl whisk together the  evaporated milk\, whole milk\, and eggs. Stir in the seasoning salt\, garlic powder\, 1 teaspoon salt\, and ½ teaspoon pepper\; set aside. In another medium bowl\, combine cheddar and Jack cheeses\; set aside. ,Spread one third of the macaroni in an even layer in the bottom of the buttered baking dish or tagine\; cover evenly with one third of the cheese. Repeat with the remaining macaroni and shredded cheeses. Pour the milk mixture evenly over the contents of the baking dish\, sprinkle with paprika\, and bake until the top layer is lightly browned\, 40 to 45 minutes. Let stand 10 to 15 minutes before serving.',
        filename: 'maccheese.jpg'
    },
    {
        title: 'Broccoli & Cheese Calzone',
        ingredients: '1 (10-ounce) package frozen broccoli florets\, fully thawed ,1 pound store-bought pizza dough\, thawed and ready for action if frozen ,1 cup shredded mozzarella cheese ,½ cup finely grated Parm ,1 cup store-bought marinara sauce ,½ teaspoon chili flakes ,¼ cup chopped fresh basil ,+ extra virgin olive oil\, for brushing ,+ kosher salt and freshly ground black pepper ,+ all-purpose flour\, for rolling ,+ prepared pesto\, for serving',
        directions: '1 Place a heavy baking sheet in the oven and preheat to 500°F. Cut two 6 x 10-inch pieces of parchment and reserve. Squeeze the broccoli of any excess moisture and season with salt and pepper. 2 Lightly flour a work surface and divide the dough into two equal-sized balls. Roll each ball into a 9-inch circle. Sprinkle each with ½ cup of the mozz\, centered about 3 inches from the border of the dough. Sprinkle the Parm on top of the mozz\, the broccoli on top of the Parm, and finally the sauce on top of the broccoli. Sprinkle with chili flakes and basil. Fold one half of the calzone over to form a half moon. Starting at one end\, fold the dough over itself into a rope\, and keep folding and twisting\, sealing as you go\, until the calzone is sealed. ,3 Gently lift each calzone onto a piece of parchment\, brush with olive oil\, and season with salt and pepper. Use a paring knife to pierce three half-inch slits into the top of each calzone. Transfer the calzones to the baking sheet and bake until the calzones are golden\, 17 to 18 minutes. Remove from the oven\, cool slightly\, and serve with pesto.',
        filename: 'calzone.jpg'
    },
    {
        title: 'New Orleans Style Dirty Fried Rice',
        ingredients: '6 tablespoons vegetable oil ,6 ounces smoked spicy kielbasa sausage\, diced ,8 ounces peeled, cleaned shrimp, diced ,1 jumbo green bell pepper\, seeded and diced ,1 jumbo onion\, diced ,2 tablespoons minced garlic ,1 tablespoon paprika ,1 tablespoon kosher salt ,2 teaspoons dried oregano ,1 teaspoon cayenn pepper (or more to taste) ,½ teaspoon freshly ground black pepper ,3 cups cooked rice (type of your choice, just not risotto rice) ,1 cup chopped green onions ,½ cup finely chopped fresh parsley',
        directions: '1 Heat 2 tablespoons of the vegetable oil in a 12-inch cast-iron skillet over medium-high heat. Add the kielbasa and cook\, stirring occasionally\, until charred and caramelized\, 5 to 6 minutes. Season the shrimp with salt\, add it to the sausage and cook\, stirring\, until the shrimp is just cooked through\, 1 to 2 minutes. ,2 Remove the sausage and shrimp to a plate\, then add the remaining 4 tablespoons oil to the skillet and add the onions and peppers\, crank the heat up to medium-high and cook\, stirring\, until the onions are slightly caramelized around the edges and the peppers are softened\, 10 to 11 minutes. Add the garlic and cook, stirring\, 2 more minutes. Add the paprika\, salt\, oregano\, cayenne\, and blackpepper and cook\, stirring\, until fragrant\, 2 minutes. ,3 Add the rice and cook\, stirring\, until the rice takes on the color of the spices\, 3 to 4 minutes. Stir in the shrimp and sausage along with the green onions and parsley\, then season with more salt and cayenne to taste and serve hot.',
        filename: 'dirty_rice.jpg'
    }
]
const seedRecipes = () => Recipe.bulkCreate(recipeData);
module.exports = seedRecipes;