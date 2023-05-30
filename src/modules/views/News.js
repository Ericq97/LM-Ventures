import React from 'react';
import { makeStyles } from '@mui/styles';
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button
} from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

const NewsList = () => {
  const classes = useStyles();

  const newsItems = [
    {
      id: 1,
      title: 'News 1',
      image: 'https://example.com/news1.jpg',
    },
    {
      id: 2,
      title: 'News 2',
      image: 'https://example.com/news2.jpg',
    },
    // Add more news items as needed
  ];

  return (
    <List className={classes.root}>
      {newsItems.map((newsItem) => (
        <ListItem key={newsItem.id}>
          <ListItemAvatar>
            <Avatar alt={newsItem.title} src={newsItem.image} />
          </ListItemAvatar>
          <ListItemText primary={newsItem.title} />
          <Button variant="contained" color="primary">
            Read More
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

export default NewsList;
