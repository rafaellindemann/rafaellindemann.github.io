import React, { useContext } from 'react';
import { Box, Container, Grid } from '@mui/material';
import { GlobalContext } from '../contexts/GlobalContext';
import Card from './Card';

function Body() {
  const { categories, resources, handleFilter, filteredResources, setFilteredResources } = useContext(GlobalContext);

  return (
    <Box 
      sx={{ 
        bgcolor: 'background.default', 
        color: 'text.primary',
        minHeight: '100vh',
        py: 3
      }}
    >
      <Container maxWidth="xl">
        <Grid 
          container 
          spacing={1}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {filteredResources.map((resource) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={resource.id}>
              <Card r={resource} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Body;


