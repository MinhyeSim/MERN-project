import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BedtimeIcon from '@mui/icons-material/Bedtime';import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

export function Learned({onChange, onSubmit}){
    return (
        <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <BedtimeIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Learned
            </Typography>
            <Box component="form"  noValidate sx={{ mt: 1 }} onSubmit={onSubmit}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="title"
                label="제목"
                name="title"
                autoFocus
                onChange={onChange}
  
              />
              <TextField
                margin="normal"
                required
                fullWidth 
                name="subject"
                label="내용"
                type="subject"
                id="subject"
                onChange={onChange}
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                
              >
                등록
              </Button>             
                
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    );
}
