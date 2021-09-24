import React, { useMemo } from "react";
import { useGetTodoDataQuery } from "./TodosApi";
import ShowPage from "./ShowPage";
const Todo = () => {
  const { data: Lists, isLoading, error } = useGetTodoDataQuery();
  console.log("?????", Lists);

  const Columns = useMemo(
    () => [
      {
        Headers: "#",
        accessor: "id",
      },
      {
        Headers: "name",
        accessor: "name",
      },
      {
        Headers: "username",
        accessor: "username",
      },
      {
        Headers: "email",
        accessor: "email",
      },
    ],
    []
  );
  return (
    <div>
      {
        isLoading ? 'loading' :error ? 'erroe' :<ShowPage data={Lists} columns={Columns}/>
      }
    </div>
  );
};

export default Todo;
