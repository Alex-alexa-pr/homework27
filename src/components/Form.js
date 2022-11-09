import { useForm, Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import Typography from '@mui/material/Typography';

const Form = () => {
    const { handleSubmit, control } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Box m={2}>
            <Typography variant="h1">
                Passenger information
            </Typography>
            <Typography>
                Enter the required information for each traveler and be sure that it exactly matches the government-issued ID presented at the airport.
            </Typography>
            <Typography variant="h2">
                Passenger 1 (Adult)
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="firstName"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    label="First name*"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="middle"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Middle"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="lastName"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    label="Last name*"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="suffix"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Suffix"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={4}>
                        <Controller
                            control={control}
                            name="dateOfBirth"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    type="date"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="email"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    label="Email address*"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="phoneNumber"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    type="tel"
                                    label="Phone number*"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="redressNumber"
                            render={({ field }) => (
                                <TextField
                                    {...field}
                                    label="Redress number"
                                    variant="outlined"
                                    size="small"
                                />
                            )}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <Controller
                            control={control}
                            name="knownTravellerNumber*"
                            rules={{ required: "The field is required" }}
                            render={({ field, fieldState: { error } }) => (
                                <TextField
                                    {...field}
                                    label="Known traveller number*"
                                    variant="outlined"
                                    size="small"
                                    error={!!error}
                                    helperText={error?.message}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Box mt={2}>
                    <Button type="submit" variant="outlined" size="medium">
                        Save and close
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default Form;