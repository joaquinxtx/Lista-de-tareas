import React from 'react'
import { Loading } from '../Examples-3/Loading';
import { Quote } from '../Examples-3/Quote';
import { useCounter,useFetch } from '../hooks';




export const Layout= () => {
  const {counter , increment,decremente}=useCounter()  
  const {data,isLoading,error}=useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const {author,quote}= !! data && data[0]
    console.log(data,isLoading,error)
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />
        {
          (isLoading)
          ?
          (
            <Loading/>

          )
          :
          (

            <Quote
            author={author}
            quote={quote} />
          )
        }
        <button 
        className='btn '
        disabled={isLoading} 
        onClick={()=>decremente()}>
         previous quote
        </button>
        <button 
        className='btn btn-primary'
        disabled={isLoading} 
        onClick={()=>increment()}>
          next quote
        </button>
    </>
  )
}
