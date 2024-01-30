// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

interface Info {
  followers: number;
  avatar_url: string;
}

export default function Github() {
  const data: any = useLoaderData();
  //   const [data, setData] = useState({} as Info);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sardartaimour")
  //       .then((resp: any) => resp.json())
  //       .then((res: any) => {
  //         setData(res);
  //         console.log("final result -> ", res);
  //       })
  //       .catch((err: any) =>
  //         console.log("Error while fetching github data: ", err)
  //       );
  //   }, []);

  return (
    <div className="bg-gray-600 m-4 text-center text-white p-4 text-3xl">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Github image" width={300} />
    </div>
  );
}

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/sardartaimour");
  return response;
};
