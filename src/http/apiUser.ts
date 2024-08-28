import { getRandomStrings } from "@/lib/helper";

interface IResUser {
  results: {
    name: {
      title: string;
      first: string;
      last: string;
    }[];
  }[];
}

export const getRandomUsers = async () => {
  try {
    const res = await fetch("https://randomuser.me/api/?results=10");

    if (!res.ok) {
      throw new Error("failed fetch");
    }

    const { results: users } = (await res.json()) as IResUser;

    const formattedUser = users?.map((item) =>
      Object.values(item.name).join(" ")
    );

    const randomUsers = getRandomStrings(formattedUser, 3);

    return randomUsers;
  } catch (e) {
    console.log(e);
    return [];
  }
};
