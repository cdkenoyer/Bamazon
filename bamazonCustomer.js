var mysql = require("mysql");
var inquirer = require("inquirer");
const cTable = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",
    // Your password
    password: "Noyzcdk419!",
    database: "bamazon_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    formatResArray();
  });
  
  function formatResArray() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
    //use npm console.table to format response array
      var table = console.table(res);
    // console.log(table);
    //   console.log(res);
      connection.end();
    });
  }

// need inquirer input and logic here
// ask user what item to purchase by providing item id and take in user input


// ask for quantity of items/units to purchase


// check user's quantity to purchase against available stock_quantity =<


// if quantity available continue - message confirmation and UPDATE products item stock_quantity


// else message quantity unavailable and begin inquirer prompt again.


// after purchase message confirmation and display updated and console.table formatted array again
formatResArray();
// console.log("Thanks for your purchase. Continue shopping")

// not sure at this point where to end connection
