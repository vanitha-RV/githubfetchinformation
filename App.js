import React,{useState} from 'react'
import axios from 'axios';
import './App.css'

const App = () => {

const[username,setUsername]=useState("");
const[profileinfo,setProfileinfo]=useState("");
const[selectedNav,setSelectedNav]=useState(1);

const getInformation =async()=>
{
  const {data}=await axios.get(`https://api.github.com/users/${username}`)
  console.log(data);
  setProfileinfo(data);
}

  return (
    <>
    <div className='app'>
      <h1>GitHub User Information</h1>
      <input type='text' placeholder='Enter your Profile Name:'value={username} onChange={(e)=> setUsername(e.target.value)}/>
      <button onClick={getInformation}>Search</button>
      </div>
      <br/>
      <br/>
      <nav>
        <ul>
          <li className={selectedNav ===1 ?'navActive':undefined}
           onClick={()=>setSelectedNav(1)}>Login</li>
          <li className={selectedNav ===2 ?'navActive':undefined}
           onClick={()=>setSelectedNav(2)}>Location</li>
          <li className={selectedNav ===3 ?'navActive':undefined}
           onClick={()=>setSelectedNav(3)}>Company</li>
          <li className={selectedNav ===4 ?'navActive':undefined}
           onClick={()=>setSelectedNav(4)}>Id</li>
          <li className={selectedNav ===5?'navActive':undefined} 
          onClick={()=>setSelectedNav(5)}>Email</li>
        </ul>
      </nav>
      <div className='app-container'>
      {selectedNav ===1 ? profileinfo!==""?
    
      <div>
    <h3>{profileinfo.login}</h3>
  </div> :<h1>No data found</h1> : null}
  {selectedNav ===2 ? profileinfo!==""?
    
    <div>
  <h3>{profileinfo.location}</h3>
</div> :<h1>No data found</h1> : null}
{selectedNav ===3 ? profileinfo!==""?
    
    <div>
  <h3>{profileinfo.company}</h3>
</div> :<h1>No data found</h1> : null}
{selectedNav ===4 ? profileinfo!==""?
    
    <div>
  <h3>{profileinfo.id}</h3>
</div> :<h1>No data found</h1> : null}{}
{selectedNav ===5 ? profileinfo!==""?
    
    <div>
  <h3>{profileinfo.email}</h3>
</div> :<h1>No data found</h1> : null}

      </div>
      </>
  )
}

export default App