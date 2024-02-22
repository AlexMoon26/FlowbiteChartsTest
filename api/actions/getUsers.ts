"use server";

interface NumberApiResponse {
  number: number;
  text: string;
}

export async function GetNumberOfUsersUp(): Promise<number[]> {
  const responseFirst = await fetch("http://numbersapi.com/1?json", {
    next: { revalidate: 10 },
  });
  const responseSecond = await fetch("http://numbersapi.com/random?json", {
    next: { revalidate: 10 },
  });

  return Promise.all([responseFirst, responseSecond])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((dataArray) =>
      dataArray.map((data: NumberApiResponse) => data.number)
    );
}

export async function GetNumberOfUsersDown(): Promise<number[]> {
  const responseFirst = await fetch("http://numbersapi.com/10000?json", {
    next: { revalidate: 10 },
  });
  const responseSecond = await fetch("http://numbersapi.com/random?json", {
    next: { revalidate: 10 },
  });

  return Promise.all([responseFirst, responseSecond])
    .then((responses) =>
      Promise.all(responses.map((response) => response.json()))
    )
    .then((dataArray) =>
      dataArray.map((data: NumberApiResponse) => data.number)
    );
}
