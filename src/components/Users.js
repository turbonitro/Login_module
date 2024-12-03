import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button } from '@mui/material';

export default function User() {
    const paperStyle={padding: '50px 20px', width:600, margin:"20px auto"}
    const [nickname, setNickname]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [retypePassword, setRetypePassword]=useState('')
    const [users, setUsers]=useState([]);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [validEmail, setValidEmail] = useState(true);
    const [validPassword, setValidPassword] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    
    const handleClick=(e)=>{
        e.preventDefault()

        // Walidacja adresu email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setValidEmail(false);
            return;
        }

        // Walidacja hasła
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            setValidPassword(false);
            return;
        }

        if (password === retypePassword) {
            const User={nickname, email, password}
            console.log(User)
            fetch("http://localhost:8080/user/add",{
                method:"POST",
                mode: "cors",
                headers:{"Content-Type":"application/json"},
                body:JSON.stringify(User)
            })
            .then(response => {
                if (response.ok) {
                    console.log("New user added");
                } else {
                    // Wystąpił błąd zwrócony z serwera
                    return response.json();
                }
            })
            .then(data => {
                if (data && data.error) {
                  setErrorMessage("A user with that nickname or email address already exists");
                }
            })
            .catch(error => {
                console.error("Failed to add user:", error);
            });
        } else {
            setPasswordsMatch(false);
        }
    }



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
                    <TextField
                        id="outlined-basic"
                        label="nickname"
                        variant="outlined"
                        fullWidth 
                        value={nickname}
                        onChange={(e)=>setNickname(e.target.value)}
                    />
                    <TextField
                        id="outlined-basic"
                        label="e-mail"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        error={!validEmail}
                        helperText={!validEmail && "Invalid email address"}
                    />
                    <TextField
                        id="outlined-basic"
                        label="password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        error={!validPassword}
                        helperText={!validPassword && "Password must be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one digit, and one special character"}
                    />
                    <TextField
                        id="outlined-basic"
                        label="retype password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={retypePassword}
                        error={!passwordsMatch}
                        onChange={(e)=>setRetypePassword(e.target.value)}
                        helperText={!passwordsMatch && "Passwords do not match"}
                    />

                    <Button variant="contained" onClick={handleClick}>
                        Register
                    </Button>

                    {errorMessage && (
                        <div style={{ color: 'red', marginTop: '10px' }}>
                            {errorMessage}
                        </div>
                    )}
                </Box>
            </Paper>

            <h1>Users</h1>

            

        </Container>
    );
}
