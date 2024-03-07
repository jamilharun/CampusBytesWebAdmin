import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect } from "react";

export default function OverView() {
  // function Todos() {
  //   // Access the client
  //   const queryClient = useQueryClient()

  //   // Queries
  //   const query = useQuery({ queryKey: ['todos'], queryFn: getTodos })

  //   // Mutations
  //   const mutation = useMutation({
  //     mutationFn: postTodo,
  //     onSuccess: () => {
  //       // Invalidate and refetch
  //       queryClient.invalidateQueries({ queryKey: ['todos'] })
  //     },
  //   })

  return (
    <>
      <div className="h-16 px-10 py-5 bg-slate-400 ">
        <h1 className="text-2xl font-medium">Overview</h1>
      </div>
      <br />
    </>
  );
}
