import * as React from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import sindutai from './images/sindutai.jpg'
import dropathi from './images/dropathi.jpg'
import indrabai from './images/indrabai.jpg'

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

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
    <h1 style={{textAlign:"center"}}>Notable Peoples</h1>
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap",padding:"20px",gap:"20px"}}>
    <Card sx={{ maxWidth: 345 }} id="Notable">
      <CardHeader
        title="Sindhutai sapkal"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={sindutai}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sindhutai was born in Wardha district of Maharashtra on November 14, 1948. She studied only up to class 4. She was married at the age of 10 to a man who was 30 years older to her. After her marriage, she settled in Navargaon forest area of Wardha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Sindhutai Sapkal, better known as ‘Anathanchi Maye’ or ‘Mother of orphans’, passed away following a heart attack at a private hospital in Pune on Tuesday. She was 74. She was known for her work in raising hundreds of orphans, abandoned and destitute children, as well as towards rehabilitation of women.
            Sindhutai died at 8.10 pm.
          </Typography>
          <Typography paragraph>
          She had undergone a surgery on November 24 last year for a large diaphragmatic hernia. She had recovered well, but about a week ago, she developed a lung infection. She suffered a massive cardiac arrest on Tuesday and passed away, said Dr Shailesh Puntambekar, medical director of Galaxy Care hospital.
           
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }} id="Notable">
      <CardHeader
        title="dropati murmu"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={dropathi}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sindhutai was born in Wardha district of Maharashtra on November 14, 1948. She studied only up to class 4. She was married at the age of 10 to a man who was 30 years older to her. After her marriage, she settled in Navargaon forest area of Wardha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Sindhutai Sapkal, better known as ‘Anathanchi Maye’ or ‘Mother of orphans’, passed away following a heart attack at a private hospital in Pune on Tuesday. She was 74. She was known for her work in raising hundreds of orphans, abandoned and destitute children, as well as towards rehabilitation of women.
            Sindhutai died at 8.10 pm.
          </Typography>
          <Typography paragraph>
          She had undergone a surgery on November 24 last year for a large diaphragmatic hernia. She had recovered well, but about a week ago, she developed a lung infection. She suffered a massive cardiac arrest on Tuesday and passed away, said Dr Shailesh Puntambekar, medical director of Galaxy Care hospital.
           
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    <Card sx={{ maxWidth: 345 }} id="Notable">
      <CardHeader
        title="dropati murmu"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={indrabai}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Sindhutai was born in Wardha district of Maharashtra on November 14, 1948. She studied only up to class 4. She was married at the age of 10 to a man who was 30 years older to her. After her marriage, she settled in Navargaon forest area of Wardha
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton> */}
        {/* <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Sindhutai Sapkal, better known as ‘Anathanchi Maye’ or ‘Mother of orphans’, passed away following a heart attack at a private hospital in Pune on Tuesday. She was 74. She was known for her work in raising hundreds of orphans, abandoned and destitute children, as well as towards rehabilitation of women.
            Sindhutai died at 8.10 pm.
          </Typography>
          <Typography paragraph>
          She had undergone a surgery on November 24 last year for a large diaphragmatic hernia. She had recovered well, but about a week ago, she developed a lung infection. She suffered a massive cardiac arrest on Tuesday and passed away, said Dr Shailesh Puntambekar, medical director of Galaxy Care hospital.
           
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>
    </>
  );
}
