import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { fetchAllQueue } from '../Api/server';

export default function QueueManagement() {
  const {
    data: queue,
    isLoading,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["fetchQueue"],
    queryFn: fetchAllQueue,
    gcTime: 10000,
  });

  return (
    <>
      <div className="h-16 px-10 py-5 bg-slate-400 ">
          <h1 className="text-2xl font-medium">Queue Management</h1>
        </div>
      <div className="mt-8">
        <h1 className="text-2xl font-medium">shopid</h1>
        {
          queue?.map((queue : any) => {
            return (
              <div
                className='pb-10' 
                key={queue?.shopid}>
                <p className='text-xl'>{queue?.shopid}</p>
                <div className='flex justify-between pr-20'>
                  <div className=''>
                    <h1>Pickup</h1>
                    <div>
                      {
                        queue?.pickup?.map((pick : any, index : number) => {
                          return (
                            <h1 key={pick}>{index}: {pick}</h1>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div>
                    <h1>Priority</h1>
                    <div>
                      {
                        queue?.queuePriority?.map((prio : any, index : number) => {
                          return (
                            <h1 key={prio}>{index}: {prio}</h1>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div>
                    <h1>normal Queue</h1>
                    <div>
                      {
                        queue?.queueClassic?.map((clas : any, index : number) => {
                          return (
                            <h1 key={clas}>{index}: {clas}</h1>
                          )
                        })
                      }
                    </div>
                  </div>
                  <div>
                    <h1>all queue</h1>
                    <div>
                      {
                        queue?.allQueue?.map((queue : any, index : number) => {
                          return (
                            <h1 key={queue}>{index}: {queue}</h1>
                          )
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        
        <h1 className='opacity-0'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil dolores error architecto repellat perferendis corrupti! Aliquid, animi aut ullam corporis suscipit voluptates magni amet officia harum laboriosam ratione porro?</h1>        
      </div>
    </>
  )
}
