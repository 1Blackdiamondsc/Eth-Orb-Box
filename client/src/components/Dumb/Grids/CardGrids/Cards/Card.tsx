import React, {FunctionComponent} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme: Theme) => 
createStyles ({
  root: {
    maxWidth: '100%',
    backgroundColor: theme.palette.primary.main
  },
  media: {
    height: 250 ,
    backgroundSize: 'contain',
    padding: 0 
  },
  buttons: {
    color: theme.palette.secondary.main
  },
}));

//content props
type Content = {
    img: string,
    header: string,
    text: string,
    link: string,

}
export const MediaCard: FunctionComponent<Content> = ({ img, header, text , link}) => {

    const classes = useStyles();

    return (

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={img}
            title="blockchain"
            
          />
          <CardContent>
            <Typography gutterBottom variant="h2">
              {header}
            </Typography>
            <Typography variant="body2" color="secondary" >
             {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={link}> 
          <Button size="small"  className={classes.buttons}>
            Learn More
          </Button>
          </Link>
        </CardActions>
      </Card>

    );

}
