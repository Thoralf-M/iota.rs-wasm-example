const { ClientBuilder } = require('@iota/client-wasm/node')

async function main() {
    let client = await new ClientBuilder().node("https://api.lb-0.h.chrysalis-devnet.iota.cafe/").build();
    console.log(await client.getInfo());

    let message = await client.message().index(new TextEncoder().encode("test index")).data(new TextEncoder().encode("test data")).submit()
    console.log(message);

    let fetched_message = await client.getMessage().data(message.messageId);
    const decodedData = Buffer.from(fetched_message.message.payload.data, 'hex').toString("utf8");
    console.log(decodedData);
}

main().then().catch((error) => {
    console.log("Err >", error)
})
