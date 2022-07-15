import React from 'react'

export default function UseSignup() {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return [{
      fname,setFname,lname,setLname,email,setEmail,password,setPassword,
    }]
  }
