import { useEffect, useState } from "react"


function Hello() {
    const [hello, setHello] = useState('loading...')

    useEffect (() => {
        fetch('https://cyjxnplrzom5kifvhsswvta6jm0peevn.lambda-url.us-east-1.on.aws/', {
        
        }) 
        .then(res => res.json())
        .then( json => {
            setHello(o => json.message)
        })
        
        
    },[])


    return (
      <div id='Hello'>
        <h1 style={{paddingTop: '0.5rem'}}className="Section-Header">Welcome!</h1>
        <p>I've created this website myself to act as my portfolio website, but I also wanted to use it as a valuable
            learning experience and thus also built and deployed a simple api that it calls to say:
        </p>
        <p style={{fontWeight:'bold'}}>{hello}</p>
      </div>
      
    )
  }
  
  export default Hello