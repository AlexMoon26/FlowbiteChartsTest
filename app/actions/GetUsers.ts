import { NumberOfUsers, TopUsers } from "../data/users";

export async function getNumberOfUsers() {
    "use server";
    if (NumberOfUsers.length < 2) {
        const response = await fetch("http://numbersapi.com/random?json");
        const { number } = await response.json()
        NumberOfUsers.push(number)
    }


    return NumberOfUsers;

}

export async function getTopUsers() {
    "use server";
    const response = await fetch("https://reqres.in/api/users?page=1");
    const {data} = await response.json();
    TopUsers.length = 0;
    TopUsers.push(...data);
    return TopUsers;
}