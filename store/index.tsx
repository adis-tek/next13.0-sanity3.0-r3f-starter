import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60,
      staleTime: 1000 * 60,
    },
  },
});

export const FetchPosts = async () => {
  const data = await fetch("http://localhost:3000/api/").then((res) => {
    return res.json();
  });

  return JSON.stringify(data);
};

export default getQueryClient;
