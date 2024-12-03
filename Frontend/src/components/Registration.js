import React, { useState } from 'react';
import { Container, Paper, TextField, Button } from '@mui/material';
import Box from '@mui/material/Box';


export default function Registration() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const handleClick = (e) => {
        e.preventDefault();
        const User = { nickname, email, password };
        console.log(User);
        console.log(JSON.stringify(User));
        fetch("http://localhost:8080/registration1/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(User)
        }).then(() => {
            console.log("New user added");
        });
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <h1 style ={{color:"Black"}}> Sign up! </h1>

            <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1},
            }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="nickname" variant="outlined" fullWidth 
            value={nickname}
            onChange={(e)=>setNickname(e.target.value)}
            />
            <TextField id="outlined-basic" label="e-mail" variant="outlined" fullWidth
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <TextField id="outlined-basic" label="password" variant="outlined" fullWidth
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <TextField id="outlined-basic" label="retype password" variant="outlined" fullWidth />


            <Button variant="contained" onClick={handleClick}>
                Register
                
            </Button>


            </Box>
            </Paper>
        </Container>
    );
}


// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     nickname: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form Data:', formData); // Dodaj to logowanie
//     try {
//       await axios.post('http://localhost:8080/registration/add', formData);
//       alert('Registration successful!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h2>Registration Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Nickname:</label>
//           <input
//             type="text"
//             name="nickname"
//             value={formData.nickname}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrationForm;


// import React, { useState } from 'react';
// import axios from 'axios';

// const RegistrationForm = () => {
//   const [formData, setFormData] = useState({
//     nickname: '',
//     email: '',
//     password: ''
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     console.log('Form Data:', formData); // Dodaj to logowanie
//     try {
//       await axios.post('http://localhost:8080/registration/add', formData);
//       alert('Registration successful!');
//     } catch (error) {
//       console.error('Registration failed:', error);
//       alert('Registration failed. Please try again.');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-md-6 col-md-offset-3">
//           <h1>Registration</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group">
//               <label htmlFor="nickname">Nickname</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="nickname"
//                 name="nickname"
//                 value={formData.nickname}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="email">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="form-group">
//               <label htmlFor="password">Password</label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-success">Register</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegistrationForm;
