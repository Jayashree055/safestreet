import React from 'react';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const Visualizations = () => {
  const barData = {
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

  const pieData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        label: 'Severity',
        data: [12, 19, 8],
        backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
        borderColor: ['#ef4444', '#f59e0b', '#10b981'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        Visualizations
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Damage Types
              </Typography>
              <Box sx={{ height: '300px' }}>
                <Bar data={barData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Severity Distribution
              </Typography>
              <Box sx={{ height: '300px' }}>
                <Pie data={pieData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Visualizations;