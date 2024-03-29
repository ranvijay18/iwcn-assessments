const { useState } = React

function App() {

     const phone = {
      phonenumber: "7617679010"
    }

    const [msg, setMsg] = useState(null)

   fetch('https://chimpu.xyz/api/post.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(phone),
    }).then((res)=>{
      const data = res.json();
      return data
    }).then((data) =>{
       setMsg(data.msg)  
    })
    return (
     <h1>{msg}</h1>
    )  
}



  const root = document.getElementById('root')


ReactDOM.render(<App />, root)