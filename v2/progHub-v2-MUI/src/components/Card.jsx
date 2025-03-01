import React from 'react';
import { 
  Card as MuiCard, 
  CardHeader, 
  CardContent, 
  CardActions, 
  Typography, 
  Button, 
  Chip, 
  Box 
} from '@mui/material';

function Card({ r }) {
  return (
      <MuiCard sx={{ maxWidth: 345, margin: 2 }}
        // variant='outlined'
        elevation={5}
      >
        {/* {console.log(r.tags)} */}
      <CardHeader 
        title={r.nome}
        variant="h5"
        // sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}
        sx={{ color: 'secondary.main', bgcolor: 'primary.contrastText' }}
        // sx={{ color: 'primary.main', bgcolor: 'primary.contrastText' }}
      />
      <CardContent>
        <Typography variant="body1" color="text.primary" gutterBottom>
          {r.descricao}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {r.categoria}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {/* {r.tags && r.tags.split(',').map((tag, index) => ( */}
          {r.tags && r.tags.map((tag, index) => (
            <Chip 
              key={index} 
              label={tag.trim()} 
              size="small" 
              // color="primary"
              color="secondary"
              variant="outlined" 
            />
          ))}
        </Box>
      </CardContent>
      <CardActions>
        <Button 
          size="medium" 
          color="primary" 
          href={r.link} 
          target="_blank" 
          rel="noreferrer"
          variant="outlined"
        >
          Acessar recurso
        </Button>
      </CardActions>
    </MuiCard>
  );
}

export default Card;


// import React, { useEffect } from 'react'
// import './Card.css'

// // function Card({ id, nome, categoria, descricao, link, tags }) {
// function Card({r}) {

//     return (
//         <div className="card-container">

//             <div className="card-header">
//                 <h2>{r.nome}</h2>
//             </div>
//             <div className="card-body">
//                 <p>{r.descricao}</p>
//                 <p>{r.categoria}</p>
//                 <p>{r.tags}</p>

//                 <a href={r.link} target="_blank" rel="noreferrer">Acessar recurso</a>
//             </div>
//         </div>
//     )
// }

// export default Card