import React from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from '@mui/material';
import potholeImage from '../assets/pothole.jpg';
import crackImage from '../assets/crack.jpg';
import surfaceDamageImage from '../assets/surface-damage.jpg';

const DamageReports = () => {
  const reports = [
    { id: 1, type: 'Pothole', severity: 'High', priority: 'Moderate', location: 'Koti Main Street', image: potholeImage },
    { id: 2, type: 'Crack', severity: 'Medium', priority: 'Urgent', location: 'NH-56', image: crackImage },
    { id: 3, type: 'Surface Damage', severity: 'Low', priority: 'Low', location: 'Padma colony', image: surfaceDamageImage },
  ];

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4 }}>
        Damage Reports
      </Typography>
      <TableContainer component={Paper} sx={{ boxShadow: 3 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 'bold' }}>Image</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Type</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Severity</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Priority</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reports.map((report) => (
              <TableRow key={report.id}>
                <TableCell>
                  <Avatar src={report.image} alt={report.type} variant="square" sx={{ width: 56, height: 56 }} />
                </TableCell>
                <TableCell>{report.type}</TableCell>
                <TableCell>{report.severity}</TableCell>
                <TableCell>{report.priority}</TableCell>
                <TableCell>{report.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DamageReports;