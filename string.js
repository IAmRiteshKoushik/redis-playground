const client = require("./client");

async function init() {

    // Getting and setting values
    let result = await client.get("name:3");
    console.log("Result ->", result);
    result = await client.get("name:1");
    console.log("Result ->", result);
    await client.set("msg:6", "Hey from NodeJS");
    result = await client.get("msg:6")
    console.log();


    // Create expiry of values after t-seconds
}

init();

