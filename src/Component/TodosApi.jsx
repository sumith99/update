import {createApi,fetchBaseQuery}from '@reduxjs/toolkit/query/react';
export const ApiHandler=createApi({
  reducerPath: "myTodos",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  tagTypes: ["myTodos"],
  endpoints: (builder) => ({
    getTodoData: builder.query({
      query: () => ({
        url:'users',
        method:"GET"
      })
    }),
  }),
});
export const {useGetTodoDataQuery} = ApiHandler;
