import React, {useState} from 'react';
import api from '../../services/api';



export default function Login({history}){
    const[email,setEmail] = useState('');

async function handleSubmit(event){
  event.preventDefault();
  const response =await api.post('/sessions',{email});
  const {_id} =response.data;
  console.log(_id);
  localStorage.setItem('user',_id);

  history.push('/dashboard');
}

    return ( 
    <>
    <p>
        Apache <strong>NiFi </strong>
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Email">Email *</label>
        <input 
         type="email" 
         id="email" 
         placeholder="seu email"
         value ={email}
         onChange = {event=> setEmail(event.target.value)}
         />
         <button className="btn" type="submit">
           entrar
         </button>
      </form>
      </>
)
}