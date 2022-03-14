import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const RecipeGridPageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  marginLeft: theme.spacing(-4),
  gridTemplateColumns: '5px',
  gap: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(1)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(1)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(2, 505px)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(2, 505px)',
  },
}));

export default RecipeGridPageGrid;