const dataExample = {

    currency: "€",

    products : [
        {
            id : 1,
            name : "150x300",
            /* src : "../src/data/img_prev/id_001_150x300.png", */
            src : "https://via.placeholder.com/150x300/FFFF00/000000",
            price : 1500.00,
            available: true,
            inCart: false
        },
        {
            id : 2,
            name : "250x250",
            /* src : "../src/data/img_prev/id_002_250x250.png", */
            src : "https://via.placeholder.com/250/0000FF/FFFFFF",
            price : 1500.00,
            available: true,
            inCart: false
        },
        {
            id : 3,
            name : "200x150",
            /* src : "../src/data/img_prev/id_003_200x150.png", */
            src : "https://via.placeholder.com/200x150/FF0000/111111",
            price : 1500.00,
            available: true,
            inCart: false
        }
    ]
};

export default dataExample;


/*
Error when trying to import images from local.

img= {require("../src/data/img_prev/id_001_150x300.png")} causes

Error: Cannot find module '../src/data/img_prev/id_001_150x300.png'


*/