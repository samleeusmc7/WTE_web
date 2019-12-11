//import { format } from "path";
Sugar.extend();

let categories = [
    {
        title: "American",
        picture: "American.jpg",
        id: "american"
    },

    {
        title: "Chinese",
        picture: "Chinese.jpg",
        id: "chinese"
    },

    {
        title: "Japanese",
        picture: "Japanese.jpg",
        id: "japanese"
    },
    
    {
        title: "Korean",
        picture: "Korean.jpg",
        id: "korean"
    },
    
    {
        title: "Jamaican",
        picture: "Jamaican.jpg",
        id: "jamaican"
    },

    {
        title: "Indian",
        picture: "Indian.jpg",
        id: "indian"
    },
    
    {
        title: "Columbian",
        picture: "Columbian.jpg",
        id: "columbian"
    },
    
    {
        title: "Mexican",
        picture: "Mexican.jpg",
        id: "mexican"
    },

    {
        title: "Italian",
        picture: "Italian.jpg",
        id: "italian"
    },
];

let foods = [
    {
        name: "Burger",
        category: "american",
        id: "burger",
        picture: "burger.jpeg"
    },

    {
        name: "Hotdog",
        category: "american",
        id: "hotdog",
        picture: "hotdog.jpeg"
    },

    {
        name: "Orange Chicken",
        category: "chinese",
        id: "orange_chicken",
        picture: "orange_chicken.jpeg"
    },

    {
        name: "General Tso Chicken",
        category: "chinese",
        id: "general_tso_chicken",
        picture: "general_tso_chicken.jpeg"
    },

    {
        name: "Sushi",
        category: "japanese",
        id: "sushi",
        picture: "sushi.jpeg"
    },

    {
        name: "Udon Noodles",
        category: "japanese",
        id: "udon",
        picture: "udon.jpeg"
    },

    {
        name: "Korean BBQ",
        category: "korean",
        id: "kbbq",
        picture: "kbbq.jpeg"
    },

    {
        name: "Bibimbap",
        category: "korean",
        id: "bibimbap",
        picture: "bibimbap.jpeg"
    },

    {
        name: "Spicy Rice Cake",
        category: "korean",
        id: "spicy_rice_cake",
        picture: "spicy_rice_cake.jpeg"
    },

    {
        name: "Jerk Chicken",
        category: "jamaican",
        id: "jerk_chicken",
        picture: "jerk_chicken.jpeg"
    },

    {
        name: "Oxtail",
        category: "jamaican",
        id: "oxtail",
        picture: "oxtail.jpeg"
    },

    {
        name: "Aloo Gobi",
        category: "indian",
        id: "aloo_gobi",
        picture: "aloo_gobi.jpeg"
    },

    {
        name: "Butter Chicken",
        category: "indian",
        id: "butter_chicken",
        picture: "butter_chicken.jpeg"
    },

    {
        name: "Bandeja Paisa",
        category: "columbian",
        id: "bandeja_paisa",
        picture: "bandeja_paisa.jpeg"
    },

    {
        name: "Empanadas",
        category: "columbian",
        id: "empanadas",
        picture: "empanadas.jpeg"
    },    

    {
        name: "Lechona",
        category: "columbian",
        id: "lechona",
        picture: "lechona.jpeg"
    }, 

    {
        name: "Burrito",
        category: "mexican",
        id: "burrito",
        picture: "burrito.jpeg"
    },    

    {
        name: "Enchiladas",
        category: "mexican",
        id: "enchiladas",
        picture: "enchiladas.jpeg"
    }, 

    {
        name: "Quesadillas",
        category: "mexican",
        id: "quesadillas",
        picture: "quesadillas.jpeg"
    }, 

    {
        name: "Pizza",
        category: "italian",
        id: "pizza",
        picture: "pizza.jpeg"
    }, 

    {
        name: "Pasta",
        category: "italian",
        id: "pasta",
        picture: "pasta.jpeg"
    }, 

    {
        name: "Spaghetti and Meatball",
        category: "italian",
        id: "spaghetti_meatball",
        picture: "spaghetti_meatball.jpeg"
    }, 
]

let restaurants = [
    {
        name: "American Classic's",
        foods: ["burger", "hotdog"],
        picture: "american_restaurant.jpeg"
    },





    {
        name: "The Dragon's Alive",
        foods: ["orange_chicken", "general_tso_chicken"],
        picture: "chinese_restaurant.jpeg"
    },






    {
        name: "The Dragon's Dead",
        foods: ["orange_chicken", "general_tso_chicken"],
        picture: "chinese_restaurant.jpeg"
    },





    {
        name: "The Dragon's Egg",
        foods: ["orange_chicken", "general_tso_chicken"],
        picture: "chinese_restaurant.jpeg"
    },

    {
        name: "Taste of Kyoto",
        foods: ["sushi", "udon"],
        picture: "japanese_restaurant.jpeg"
    },

    {
        name: "Seoul Food",
        foods: ["kbbq", "bibimbap", "spicy_rice_cake"],
        picture: "korean_restaurant.jpeg"
    },

    {
        name: "Come in mon",
        foods: ["jerk_chicken", "oxtail"],
        picture: "jamaican_restaurant.jpeg"
    },

    {
        name: "Hurry for Curry",
        foods: ["aloo_gobi", "butter_chicken"],
        picture: "indian_restaurant.jpeg"
    },

    {
        name: "Come In Bian",
        foods: ["bandeja_paisa", "empanadas", "lechona"],
        picture: "columbian_restaurant.jpeg"
    },

    {
        name: "Me casa Su casa",
        foods: ["burrito", "enchiladas", "quesadillas"],
        picture: "mexican_restaurant.jpeg"
    },

    {
        name: "Milanian",
        foods: ["pizza", "pasta", "spaghetti_meatball"],
        picture: "italian_restaurant.jpeg"
    },
]


let foods_in_selected_category = []

let restaurants_with_selected_food = []


let choose_view = document.querySelector("#choose_view")

let title = document.querySelector("#title")

let photo = document.querySelector("#photo")

let yes_button = document.querySelector("#yes_button")

let no_button  = document.querySelector("#no_button")

let start_button = document.querySelector("#start_button")

let add_restaurant_button = document.querySelector("#add_restaurant")

let new_restaurant_form = document.querySelector("#new_restaurant")

let Upload_Restaurant_button = document.querySelector("#Upload_Restaurant_button")



new_restaurant_form.addEventListener("submit", function(event)
{
    event.preventDefault()
    let name_field = new_restaurant_form.querySelector("[name='restaurant_name']")

    let new_restaurant =
    {
        name: name_field.value,
        foods: ["orange_chicken", "general_tso_chicken"],
        picture: "chinese_restaurant.jpeg"
    }

    restaurants.push(new_restaurant)


    start_button.style.display = ""
    add_restaurant.style.display = ""
    Upload_Restaurant_button.display = ""
    new_restaurant_form.style.display = "none"


})




start_button.addEventListener("click", function()
{
    start_button.style.display = "none"
    add_restaurant.style.display = "none"
    choose_view.style.display = ""
    Upload_Restaurant_button.display = "none"


})

add_restaurant_button.addEventListener("click", function()
{
    add_restaurant.style.display = "none"
    start_button.style.display = "none"
    new_restaurant.style.display = ""
    Upload_Restaurant_button.display = "none"

})


let index = 0;

let selected_category = null;

let selected_food = null;

let selection_stage = "category";


no_button.addEventListener("click", function()
{ 
    if(selection_stage === "category")
    {
        index = index + 1;
        
        if(index === categories.length)
        {
            index = 0;
        }
        title.innerText = categories[index].title
        photo.src = "foods/" + categories[index].picture
    }

    if(selection_stage === "food")
    {
        index = index + 1;
        
        if(index === foods_in_selected_category.length)
        {
            index = 0;
        }
        title.innerText = foods_in_selected_category[index].name
        photo.src = "foods/" + foods_in_selected_category[index].picture
    }

    if(selection_stage === "restaurant")
    {
        index = index + 1;
        
        if(index === restaurants_with_selected_food.length)
        {
            index = 0;
        }
        title.innerText = restaurants_with_selected_food[index].name
        photo.src = "foods/" + restaurants_with_selected_food[index].picture
    }

})

//USER STORIES!!.. stories
//determine selected category    
//determine foods in selected category
//display A food
//clicking no displays ANOTHER food
//clicking yes shows restaurants

yes_button.addEventListener("click", function()
{
    if(selection_stage === "category")
    {
        selection_stage = "food";

        selected_category = categories[index]

        foods_in_selected_category = foods.filter((food) => {return food.category === selected_category.id});

        index = 0;

        title.innerText = foods_in_selected_category[index].name
        photo.src = "foods/" + foods_in_selected_category[index].picture
    }


    else if(selection_stage === "food")
    {

        selection_stage = "restaurant";

        selected_food = foods_in_selected_category[index]

        restaurants_with_selected_food = restaurants.filter((restaurant) => {return restaurant.foods.includes(selected_food.id)});

        index = 0;

        if(index === restaurants.length)
        {
            index = 0;
        }
        title.innerText = restaurants_with_selected_food[index].name
        photo.src = "foods/" + restaurants_with_selected_food[index].picture
    }






//ERROR ERROR ERROR
// if i leave as else for selection_state === restaurant it goes to "taste of kyoto"
// if i change it to else if it goes to "the dragons egg"
// if i change it to if then it goes to "the dragons egg"


    else if(selection_stage === "restaurant")
    {

        //selection_stage = "restaurant";

        //index = index + 1;
        //index = 0;

        /*if(index === restaurants_with_selected_food.length)
        {
            index = 0;
        }*/
        title.innerText = restaurants_with_selected_food[index].name
        photo.src = "foods/" + restaurants_with_selected_food[index].picture
    }

//ERROR ERROR ERROR





})


//initializing the start page

let start_page = function(){
    categories = categories.shuffle();
    index = 0;
    title.innerText = categories[index].title
    photo.src = "foods/" + categories[index].picture
};

start_page();

