"use server";

export async function getNumberOfUsers() {
    const responseFirst = await fetch("http://numbersapi.com/23?json", { next: { revalidate: 10 } });
    const responseSecond = await fetch("http://numbersapi.com/random?json", { next: { revalidate: 10 } });



    return Promise.all([responseFirst, responseSecond])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => dataArray.map(data => data.number));
}


export async function getTopUsers() {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();
    console.log(products);

    return products;
}