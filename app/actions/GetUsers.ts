"use server";

export async function getNumberOfUsersUp() {
    const responseFirst = await fetch("http://numbersapi.com/1?json", { next: { revalidate: 10 } });
    const responseSecond = await fetch("http://numbersapi.com/random?json", { next: { revalidate: 10 } });



    return Promise.all([responseFirst, responseSecond])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => dataArray.map(data => data.number));
}

export async function getNumberOfUsersDown() {
    const responseFirst = await fetch("http://numbersapi.com/100000?json", { next: { revalidate: 10 } });
    const responseSecond = await fetch("http://numbersapi.com/random?json", { next: { revalidate: 10 } });



    return Promise.all([responseFirst, responseSecond])
        .then(responses => Promise.all(responses.map(response => response.json())))
        .then(dataArray => dataArray.map(data => data.number));
}


export async function getTopUsers() {
    const response = await fetch("https://dummyjson.com/products");
    const { products } = await response.json();

    return products;
}