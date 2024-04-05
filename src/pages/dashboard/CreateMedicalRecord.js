/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import react from 'react';

import { submitMedicalRecord } from 'api/index';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    FormControl,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    InputLabel,
    OutlinedInput,
    Stack,
    TextField,
    Typography
} from '@mui/material';

import AnimateButton from 'components/@extended/AnimateButton';

const CreateMedicalRecord = () => {
    const [medicalRecord, setMedicalRecord] = react.useState([]);
    const [publicKey, setPublicKey] = react.useState([]);
    const [privateKey, setPrivateKey] = react.useState([]);

    const onSubmitMedicalRecord = () => {
        // console.log(medicalRecord);
        const data = {
            publicKey:  publicKey.replace(/\n/g, '\\n'),
            ...medicalRecord,
            privateKey:  privateKey.replace(/\n/g, '\\n')
        }
        console.log(data);
        submitMedicalRecord(data)
        .then((res) => {
            console.log(res);
            alert('Medical Record Submitted!')
        })
        .catch((err) => {
            alert('Please try again.')
            console.log(err);
        })
    }

    const onChangeMedicalRecord = (e) => {
        setMedicalRecord({
            ...medicalRecord,
            [e.target.name]: e.target.value
        });
    }


    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} md={7} lg={12}>
                <Grid item xs={12}>
                    <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
                        <Typography variant="h3">Create Medical Record</Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel fullWidth htmlFor="company-signup">Public Key</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="company-signup"
                                    value={publicKey}
                                    name="publicKey"
                                    // onChange={}
                                    onChange={(e) => setPublicKey(e.target.value)}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="company-signup">Hospital</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="company-signup"
                                    value={medicalRecord.hospital}
                                    name="hospital"
                                    // onChange={}
                                    onChange={onChangeMedicalRecord}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12} lg={6}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="password-signup">Doctor in Charge</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    id="password-signup"
                                    value={medicalRecord.doctor}
                                    name="doctor"
                                    onChange={onChangeMedicalRecord}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="company-signup">Diagnosis</InputLabel>
                                <OutlinedInput
                                    id="company-signup"
                                    value={medicalRecord.diagnosis}
                                    name="diagnosis"
                                    onChange={onChangeMedicalRecord}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="password-signup">Treatment</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    // multiline
                                    id="password-signup"
                                    value={medicalRecord.treatment}
                                    name="treatment"
                                    onChange={onChangeMedicalRecord}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <Stack spacing={1}>
                                <InputLabel htmlFor="password-signup">Private Key</InputLabel>
                                <OutlinedInput
                                    fullWidth
                                    // multiline
                                    id="password-signup"
                                    value={privateKey}
                                    name="privateKey"
                                    onChange={(e) => setPrivateKey(e.target.value)}
                                    inputProps={{}}
                                />
                            </Stack>
                        </Grid>
                        <Grid item xs={12}>
                            <AnimateButton>
                                <Button disableElevation fullWidth size="large" type="submit" variant="contained" color="primary" onClick={onSubmitMedicalRecord}>
                                    Create
                                </Button>
                            </AnimateButton>
                        </Grid>
                        {/* <Grid item xs={12}>
              <Divider>
                <Typography variant="caption">Sign up with</Typography>
              </Divider>
            </Grid> */}
                    </Grid>
                    {/* </Grid> */}
                </Grid>
            </Grid>
        </ Grid>
    )
}

export default CreateMedicalRecord;