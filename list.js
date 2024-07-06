const client = require("./client");

async function init(){
    await client.lpush("messages", 1);
    await client.lpush("messages", 2);
    await client.lpush("messages", 3);
    let result = await client.rpop("messages");
    console.log(result);
     result = await client.rpop("messages");
    console.log(result);
    result = await client.rpop("messages");
    console.log(result);

    // lrange to read particular records
}

init();
