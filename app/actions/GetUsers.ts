import { NumberOfUsers } from "../data/users";

export async function getNumberOfUsers() {
    "use server";
    const response = await fetch("http://numbersapi.com/random?json");
    const { number } = await response.json()
    NumberOfUsers.push(number)


    return NumberOfUsers;

}