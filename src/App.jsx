import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';
import MyCard from './Mycard';


function App() {
  const [attractions, setAttractions] = useState([])
  useEffect(()  => {
    fetch('https://www.melivecode.com/api/attractions')
      .then(res => res.json())
      .then(result => {
        setAttractions(result)
      })
  }, [])
  return (
    <div>
      <Navbar />
      <Container maxWidth="lg">
      <Typography variant='h5'> 
      Attractions 
      </Typography>
      <Grid container spacing={2}>
      { attractions.map(attraction => (
         <Grid xs={6} md= {4}>
        <MyCard attraction = {attraction} />
        </Grid>
      ))}
        </Grid>
      </Container>
    </div>
  )
}

export default App