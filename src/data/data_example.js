var path = require('path');

// Get the name of all the files in the defined folder.
var img_folder_path = path.resolve("/img_art/img"); 

// Define the number of img in the folder to be read.
const n_img = 34;

// A function that creates a string from an integer with always 3 digits.
function get_int_str(this_int) {
    var this_str = "00" + this_int;
    return this_str.substr(this_str.length - 3);
}

// Create an array with the names path to the images.
var path_to_img = [];
for (var i=0; i<n_img; i++) {
    var this_img_name = "img" + get_int_str(i+1) + ".jpg";
    var this_img_path = path.resolve(img_folder_path, this_img_name);
    path_to_img.push(this_img_path);
}

// Create the product JSON for each image.
var all_products = [];
for (var i_prod=0; i_prod<n_img; i_prod++) {
    var this_product = {
        id : i_prod,
        name : get_int_str(i_prod),
        src : path_to_img[i_prod],
        price : 500,
        available : true,
        inCart : false
    }
    all_products.push(this_product);
}


const dataExample = {

    currency: "€",

    products : all_products

    /*
    products : [
        {
            id : 1,
            name : "150x300",
            // src : "../src/data/img_prev/id_001_150x300.png", 
            src : "https://via.placeholder.com/150x300/FFFF00/000000",
            price : 1500.00,
            available: true,
            inCart: false
        },
        {
            id : 2,
            name : "250x250",
            // src : "../src/data/img_prev/id_002_250x250.png", 
            src : "https://via.placeholder.com/250/0000FF/FFFFFF",
            price : 1500.00,
            available: true,
            inCart: false
        },
        {
            id : 3,
            name : "200x150",
            // src : "../src/data/img_prev/id_003_200x150.png", 
            src : "https://via.placeholder.com/200x150/FF0000/111111",
            price : 1500.00,
            available: true,
            inCart: false
        }
    ] */
};

export default dataExample;


/*
Error when trying to import images from local.

img= {require("../src/data/img_prev/id_001_150x300.png")} causes

Error: Cannot find module '../src/data/img_prev/id_001_150x300.png'


*/