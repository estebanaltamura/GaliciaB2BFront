import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import StarRateIcon from '@mui/icons-material/StarRate';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { Box, Button } from '@mui/material';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const OpportunityCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component='img'
        height='194'
        image='https://www.infobae.com/new-resizer/EVPnwDhyz9P87-xKOc5LMaMsGx0=/992x558/filters:format(webp):quality(85)/cloudfront-us-east-1.images.arcpublishing.com/infobae/EJOOGNIV5NDIBHFJJIVHXUV5ME.jpg'
        alt='Paella dish'
        sx={{ borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
      />
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
            Logo
          </Avatar>
        }
        title={
          <Box display='flex' alignItems='center'>
            <Typography sx={{ fontSize: '16px' }}>
              Nombre de la empresa
            </Typography>
            <CheckCircleIcon sx={{ color: red[500] }} />

            {/* Suponiendo que 4.5 es la puntuación */}
          </Box>
        }
        subheader={
          <Box display='flex' alignItems='center'>
            <StarRateIcon color='action' />
            <Typography variant='subtitle1'>4.5</Typography>{' '}
            <LocationOnIcon color='action' />
            <Typography variant='body2' color='textSecondary'>
              Ciudad, País
            </Typography>
          </Box>
        }
      />

      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>

      <Button variant='contained'>ssd</Button>

      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label='share'>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
