import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import { AppBar, Toolbar, Typography } from '@mui/material';
import './App.css';

const Navbar = () => {
  return (
    <AppBar position="static" sx={{ background: '#110D25', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontFamily: 'Montserrat', fontWeight: 'bold', color: '#FFF' }}>
          UniConnect
        </Typography>
        <Button color="inherit">LOREM IPSUM</Button>
        <Button color="inherit">LOREM IPSUM</Button>
        <Button color="inherit">LOREM IPSUM</Button>
        <Button color="inherit">LOREM IPSUM</Button>
      </Toolbar>
    </AppBar>
  );
};

const Header = () => {
  const backgroundSpring = useSpring({
    from: { opacity: 0, transform: 'scale(1.1)' },
    to: { opacity: 1, transform: 'scale(1)' },
  });

  const headerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    zIndex: -1,
    ...backgroundSpring,
    display: 'flex',
    background: 'linear-gradient(to right, #0A0518, #201D6C)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    userSelect: 'none',
    overflow: 'hidden',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    bottom: '9em',
  };

  const titleStyle = {
    fontSize: '4em',
    fontWeight: 'bold',
    color: '#AFA1F3',
    marginBottom: '0.5em',
    textAlign: 'center',
  };

  const subTitleStyle = {
    fontFamily: 'Montserrat',
    fontSize: '1.65em',
    color: '#BFBFBF',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: 1.2,
    textAlign: 'center',
  };

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: 'auto',
    top: '50%',
    left: '0',
    transform: 'translateY(25%)',
    zIndex: -2,
  };

  return (
    <animated.div style={headerStyle}>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>
          Inspírate. Inspíranos.
        </h1>
        <p style={subTitleStyle}>
          Conéctate con otros estudiantes, aprende y descubre en aulas virtuales.
        </p>
      </div>
      <img
        src="https://www.sas.com/es_mx/software/how-to-buy/_jcr_content/par/styledcontainer/image.img.png/1644595979385.png"
        alt="Imagen Flotante"
        style={imageStyle}
      />
    </animated.div>
  );
};

const AboutSection = () => {
  const aboutStyle = {
    background: '#6A094D',
    padding: '40px',
    fontFamily: 'Montserrat',
    fontSize: '1.5em',
    color: '#FFF',
    maxWidth: '600px',
    margin: '20px auto',
    textAlign: 'center',
    marginBottom: '20px',
  };

  return (
    <div style={aboutStyle}>
      <p>
        información adicional
      </p>
    </div>
  );
};

const App = () => {
  const [open, setOpen] = useState(false);

  const handleAccept = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setOpen(true);
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, []);

  const buttonContainerStyle = {
    position: 'absolute',
    bottom: '12em',
    left: '50%',
    transform: 'translateX(-50%)',
  };

  const buttonStyle = {
    borderRadius: '10px',
    background: 'linear-gradient(to right, #1F2450, #481A5B)',
    color: '#D59DF7',
    padding: '15px 30px',
    fontFamily: 'Montserrat',
    fontSize: '1.20em',
    marginTop: '20px',
    transition: 'box-shadow 0.3s ease',
    '&:hover': {
      boxShadow: '0 3px 15px rgb(86, 83, 153)',
    },
  };

  const snackbarStyle = {
    position: 'fixed',
    top: '34em',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '680px',
    maxWidth: '100%',
  };

  const alertStyle = {
    background: '#120D1E',
    color: '#FFF',
    borderRadius: '15px',
    fontFamily: 'Montserrat',
    width: '680px',
    maxWidth: '90%',
  };

  const buttonAcceptStyle = {
    borderRadius: '10px',
    backgroundColor: '#900367',
    padding: '8px',
    right: '15px',
    top: '5px',
    fontFamily: 'Montserrat',
    '&:hover': {
      backgroundColor: '#6A094D',
    },
  };

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'auto' }}>
      <Navbar />

      <Header />

      <AboutSection />

      <div style={buttonContainerStyle}>
        <a href="#" style={{ textDecoration: 'none' }}>
          <Button color="inherit" size="large" onClick={handleAccept} sx={buttonStyle}>
            Comenzar
          </Button>
        </a>
      </div>

      <div style={{ bottom: '0', left: '0', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Snackbar open={open} autoHideDuration={null} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} style={snackbarStyle}>
          <Alert onClose={() => { }} severity="info" variant="filled" sx={alertStyle} action={
            <Button color="inherit" size="small" onClick={handleAccept} sx={buttonAcceptStyle}>
              Aceptar
            </Button>
          }>
            <div style={{ textAlign: 'left' }}>
              <p style={{ margin: '0', fontSize: '1em', marginBottom: '10px' }}>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web.
              </p>
              <p style={{ margin: '0', fontSize: '0.8em' }}>
                Puedes obtener más información en nuestra{' '}
                <a href="#" style={{ textDecoration: 'underline', color: '#FFF' }}>
                  política de cookies
                </a>.
              </p>
            </div>
          </Alert>
        </Snackbar>
      </div>
    </div>
  );
};

export default App;
