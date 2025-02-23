import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import roadDamageImage from '../assets/road-damage.jpg';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Potholes', 'Cracks', 'Surface Damage', 'Other'],
    datasets: [
      {
        label: 'Damage Types',
        data: [12, 19, 3, 5],
        backgroundColor: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'],
        borderColor: ['#3b82f6', '#ef4444', '#f59e0b', '#10b981'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Road Damage Statistics',
      },
    },
  };

  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Hero Section with Full-Width Background Image */}
      <Box
        sx={{
          backgroundImage: `url(${roadDamageImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px', // Increased vertical height
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
          mb: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
          Welcome to SafeStreet
        </Typography>
      </Box>

      {/* Dashboard Content */}
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Total Damage Reports
                </Typography>
                <Typography variant="h3" sx={{ color: '#3b82f6' }}>
                  39
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  High Priority Repairs
                </Typography>
                <Typography variant="h3" sx={{ color: '#ef4444' }}>
                  12
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Damage Overview
                </Typography>
                <Box sx={{ height: '300px' }}>
                  <Bar data={data} options={options} />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Dashboard;