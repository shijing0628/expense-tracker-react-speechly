import React from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import Form from './Form/Form'
import useStyles from './styles'
import List from './List/List'

const Main = () => {
 const classes = useStyles()
 return (
  <div>
   <Card className={classes.root}>
    <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
    <CardContent>
     <Typography align="center" variant="h5">
      Total Balance $100
      </Typography>
     <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
      {/* info from speechly */}
       Saying: Add income for $100 in category salary for monday....
      </Typography>
     <Divider />
     <Form />
    </CardContent>
    <CardContent className={classes.cartContent}>
     <Grid container spacing={2}>
      <Grid item xs={12}>
       <List />
      </Grid>
     </Grid>
    </CardContent>
   </Card>
  </div>
 )
}

export default Main
