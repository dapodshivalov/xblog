import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Box, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    padding: theme.spacing(0, 3),
  },
  paper: {
    maxWidth: 400,
    minWidth: 400,
    margin: `${theme.spacing(1)}px auto`,
    padding: theme.spacing(2),
  },
  headerText: {
    maxWidth: 400,
    minWidth: 400,
    // margin: `${theme.spacing(1)}px auto`,
    // padding: theme.spacing(2),
  }
}));

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

export default function Todo() {
  const classes = useStyles();

  return (
    // <div className={classes.root}>
    <Box height="100vh">
        <Box height="200px"/>
        <Grid container direction="column" alignItems="center">
            <Grid item>
                <Typography variant="h6" component="h2" className={classes.headerText} style={{fontWeight:'bold'}}>Планируемые проекты</Typography>
            </Grid>
            <Grid item><Typography className={classes.headerText} >Здесь размещаются проекты, которые я хочу сделать</Typography></Grid>
        </Grid>
        
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item>
                <Paper className={classes.paper} >
                    <Typography>Сделать TODO сервис </Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper className={classes.paper}>
                    <Typography>Сделать платформу для блога</Typography>
                </Paper>
            </Grid>

            <Grid item>
                <Paper className={classes.paper}>
                    <Typography>Сделать сокращатель ссылок для блога</Typography>
                </Paper>
            </Grid>

            <Grid item>
                <Paper className={classes.paper}>
                    <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                        <Avatar>W</Avatar>
                    </Grid>
                    <Grid item xs>
                        <Typography>Да будет блог!</Typography>
                    </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </Box>
    // </div>
  );
}
