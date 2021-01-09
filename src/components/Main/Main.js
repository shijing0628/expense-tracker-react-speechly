import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import Form from './Form/Form'
import useStyles from './styles'
import List from './List/List'
import { ExpenseTrackerContext } from '../../Context/Context'

const Main = () => {
 const classes = useStyles()
 const { balance } = useContext(ExpenseTrackerContext)


 return (
  <div>
   <Card className={classes.root}>
    <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
    <CardContent>
     <Typography align="center" variant="h5">
      Total Balance ${balance}
     </Typography>
     <Typography variant="subtitle1" style={{ lineHeight: "1.5em", marginTop: "20px" }}>
      {/* info from speechly */}
      <strong style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>Hold bottom button and Saying:
       <br>
       </br>"Add income/expense for $100 in category salary/bills for Next Monday."
       </strong>
      <br></br>
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
