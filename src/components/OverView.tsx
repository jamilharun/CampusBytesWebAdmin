import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import React, { useEffect } from 'react'

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
    <div>
      OverView
      {/* <button onClick={()=>{test()}}> button</button> */}

    </div>
  )
}
