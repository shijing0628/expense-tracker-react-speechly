import React, { useContext } from 'react'
import useStyles from './styles'
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from '../../../Context/Context'

const List = () => {
 const classes = useStyles()

 const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)


 // const transactions = [
 //  {
 //   id: 1,
 //   type: "Income",
 //   category: "Salary",
 //   amount: 50,
 //   date: "Wed Dec 16"
 //  },
 //  {
 //   id: 2,
 //   type: "Expense",
 //   category: "pets",
 //   amount: 50,
 //   date: "Wed Dec 17"
 //  },
 //  {
 //   id: 3,
 //   type: "Income",
 //   category: "business",
 //   amount: 50,
 //   date: "Wed Dec 18"
 //  },
 // ]

 return (
  <div>
   <MUIList className={classes.list} dense={false}>
    {
     transactions.map(transaction => (
      <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
       <ListItem>
        <ListItemAvatar>
         <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
          <MoneyOff />
         </Avatar>
        </ListItemAvatar>
        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
        <ListItemSecondaryAction>
         <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
          <Delete />
         </IconButton>
        </ListItemSecondaryAction>

       </ListItem>

      </Slide>
     ))
    }
   </MUIList>
  </div>
 )
}

export default List
