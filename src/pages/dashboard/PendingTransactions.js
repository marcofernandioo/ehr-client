/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import react from 'react';

import OrderTable from './OrdersTable';
import MainCard from 'components/MainCard';

import { getBlockchain, mineTransactions } from 'api/index';


// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

const PendingTransactions = () => {
    const [pendingTransactions, setPendingTransactions] = react.useState([]);
    react.useEffect(() => {
        getBlockchain()
            .then((res) => {
                setPendingTransactions(res.data.pendingTransactions);
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const onClickMineBlock = () => {
        if (pendingTransactions.length === 0) {
            alert("Can't mine; no pending transactions");
            return
        }
        mineTransactions()
            .then((res) => {
                alert("Block is Mined!")
                console.log(res.data);
                setPendingTransactions(res.data.pendingTransactions)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} md={7} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Pending Transactions</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    {
                        pendingTransactions.length > 0 ? (
                            <OrderTable pendingTransactions={pendingTransactions} />
                        ) : <p>No Pending Transactions</p>
                    }
                </MainCard>
                <Button variant="contained" onClick={() => { onClickMineBlock() }}>
                    Mine Transactions
                </Button>
            </Grid>
        </Grid >
    )
}

export default PendingTransactions;