import FavoriteIcon from '@mui/icons-materail/Favorite';
import FavoriteBorderIcon from '@mui/icons-materail/FavoriteBorder';
import Box from '@mui/materail/Box';
import Rating from '@mui/materail/Rating';
import { styled } from '@mui/materail/Styles';
import * as <React> from 'React';

const StyledRating = styled(Rating)({
    '& .MuiRaiting-iconFilled': {
        color: '#ff6d75',
    },
    '& .MuiRaiting-iconFilled': {
        color: '#ff3d47',
    },
});

 export default function Home() {
    return
        <>
        <h1>This is home page</h1>
        <Box
        sx={
            '& > legend': { mt: 2 },
     ) }}
        >
     <StyledRaiting
     name='customized-color'
     defaultValue={2}
     getLabelText={(value) => `${value} Heart$(value !== 1 ? 's' : '')`}{}
     precision={0.5}
     icon={<FavoriteIcon fontSize ="inherit"/>}
     emptyIcon={<FavoriteBorderIcon fontSize="inherit"}


   
 
    