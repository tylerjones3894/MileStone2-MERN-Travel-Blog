import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 800,
    margin: '20px auto',
    borderRadius: '0',
    boxShadow: 'none',
    border: `1px solid ${theme.palette.grey[300]}`,
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  media: {
    width: '300px',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '200px',
    },
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  date: {
    marginBottom: '20px',
  },
  text: {
    flexGrow: 1,
    marginBottom: '20px',
  },
  button: {
    alignSelf: 'flex-end',
  },
}));

const CardComponent = () => {
  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <Grid container spacing={3}>
      {data.map((item) => (
        <Grid item xs={12} key={item.id}>
          <Card className={classes.root}>
            <CardMedia className={classes.media} image={`https://picsum.photos/seed/${item.id}/300/200`} title={item.title} />
            <CardContent className={classes.content}>
              <Typography variant="h4" component="h2" className={classes.title}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="textSecondary" className={classes.date}>
                {new Date(item.date).toDateString()}
              </Typography>
              <Typography variant="body1" color="textSecondary" className={classes.text}>
                {item.body}
              </Typography>
              <Button variant="contained" color="primary" className={classes.button}>
                Read More
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardComponent;
