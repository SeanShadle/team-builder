import React, {useEffect, useState} from 'react';
import './App.css';
import Form from "./Form"
import axios from './axios'
import Member from './Member'

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}


export default function App() {
  const [members, setMembers] = useState([])
  const [formValues, setFormValues] = useState(initialFormValues)

  const updateForm = (inputName, inputValue) => {
    setFormValues({...formValues, [inputName]: inputValue })
  }

  const submitForm = () => {
    const newMember = {
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role,
    }
    if (!newMember.username || !newMember.email || !newMember.role){
      return
    }

    axios.post('fakeapi.com', newMember)
    .then(res => {
      setMembers([res.data, ...members])
      setFormValues(initialFormValues)
    })
    .catch(err => {
      debugger
    })
  }

  useEffect(() => {
    axios.get('fakeapi.com')
    .then(res => setMembers(res.data))
  },[])

  return (
    <div className="App">
      <h1>Team Form</h1>
      <Form 
      values={formValues}
      update={updateForm}
      submit={submitForm}
      />
      {
      members.map(member => {
        return <Member details = {member} key = {member.id}/>
      })
      }
    </div>
  );
}
