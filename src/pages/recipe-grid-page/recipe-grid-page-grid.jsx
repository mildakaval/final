import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const RecipeGridPageGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  margin: theme.spacing(0),
  gridTemplateColumns: '1fr',
  gap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',

  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
  [theme.breakpoints.up('xl')]: {
    gridTemplateColumns: 'repeat(1, 1fr)',
  },
}));

export default RecipeGridPageGrid;