// // import React from 'react';
// // import { Link } from 'react-router-dom';
// // import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
// // import StreetviewIcon from '@mui/icons-material/Streetview';

// // const Navbar = () => {
// //   return (
// //     <AppBar position="sticky" sx={{ backgroundColor: '#1e3a8a', boxShadow: 'none' }}>
// //       <Container maxWidth="lg">
// //         <Toolbar>
// //           <StreetviewIcon sx={{ fontSize: '2rem', mr: 1 }} />
// //           <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
// //             SafeStreet
// //           </Typography>
// //           <Button color="inherit" component={Link} to="/" sx={{ textTransform: 'none', fontSize: '1rem' }}>
// //             Dashboard
// //           </Button>
// //           <Button color="inherit" component={Link} to="/reports" sx={{ textTransform: 'none', fontSize: '1rem' }}>
// //             Damage Reports
// //           </Button>
// //           <Button color="inherit" component={Link} to="/visualizations" sx={{ textTransform: 'none', fontSize: '1rem' }}>
// //             Visualizations
// //           </Button>
// //         </Toolbar>
// //       </Container>
// //     </AppBar>
// //   );
// // };

// // export default Navbar;



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
// import StreetviewIcon from '@mui/icons-material/Streetview';

// const Navbar = () => {
//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: '#1e3a8a', boxShadow: 'none' }}>
//       <Container maxWidth="lg" sx={{ padding: '0 !important' }}>
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 !important' }}>
//           {/* Left Side: Logo and Title */}
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             <StreetviewIcon sx={{ fontSize: '2rem', mr: 1, color: 'white' }} />
//             <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
//               SafeStreet
//             </Typography>
//           </Box>

//           {/* Right Side: Navigation Links */}
//           <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/"
//               sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
//             >
//               Dashboard
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/reports"
//               sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
//             >
//               Damage Reports
//             </Button>
//             <Button
//               color="inherit"
//               component={Link}
//               to="/visualizations"
//               sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
//             >
//               Visualizations
//             </Button>
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import StreetviewIcon from '@mui/icons-material/Streetview';

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#1e3a8a', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px' }}>
        {/* Left Side: Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <StreetviewIcon sx={{ fontSize: '2rem', mr: 1, color: 'white' }} />
          <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
            SafeStreet
          </Typography>
        </Box>

        {/* Right Side: Navigation Links */}
        <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            Dashboard
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/reports"
            sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            Damage Reports
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/visualizations"
            sx={{ textTransform: 'none', fontSize: '1rem', color: 'white', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' } }}
          >
            Visualizations
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;