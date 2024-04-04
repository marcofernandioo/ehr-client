/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import react from 'react';

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
    Typography
} from '@mui/material';

import MedicalRecordTable from './MedicalRecordTable';
import MainCard from 'components/MainCard';

const APIgetMedicalRecords = async () => {
    try {
        const response = await fetch(`http://localhost:8000/get/medical-record`);
        if (!response.ok) {
            alert("Please Try Again.")
            console.log(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    } catch (e) {
        alert("Please Try Again.")
        console.error('Error User Login:', e.message);
        throw e;
    }
}

const ViewMedicalRecord = () => {
    const [medicalRecords, setMedicalRecords] = react.useState([]);

    react.useEffect(() => {
        APIgetMedicalRecords()
        .then((res) => {
            console.log(res);
            setMedicalRecords(res.medicalRecordList);
        })
        .catch((err) => {
            console.log(err);
        });
    }, [])
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} md={7} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">All Medical Records</Typography>
                    </Grid>
                    <Grid item />
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    {
                        medicalRecords.length > 0 ? (
                            <MedicalRecordTable medicalRecords={medicalRecords} />
                        ) : <p>No Medical Records</p>
                    }
                </MainCard>
            </Grid>
        </ Grid>
    )
}

export default ViewMedicalRecord;