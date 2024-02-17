import { NumberOfUsers } from "../data/users";

export async function getNumberOfUsers() {
    "use server";
    if (NumberOfUsers.length < 2) {
        const response = await fetch("http://numbersapi.com/random?json");
        const { number } = await response.json()
        NumberOfUsers.push(number)
    }


    return NumberOfUsers;

}