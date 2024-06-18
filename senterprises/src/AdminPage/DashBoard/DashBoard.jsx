import { Box, Grid } from "@mui/material";
import * as React from 'react';
import OnSeriesItemClick from "./PieChart";
import TinyLineChart from "./LineGraph";
import OutlinedCard from "./AppCard";

const DashBoard = () => {
    return (
        <>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item sx={4}>
                        <Box style={{border: "solid"}}><OnSeriesItemClick /></Box>
                    </Grid>
                    <Grid item sx={8}>
                    <Box style={{border: "solid"}}><TinyLineChart /></Box>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{flexGrow: 1}}>
                <Grid container spacing={2}>
                    <Grid item sx={3}>
                        <OutlinedCard />
                    </Grid>
                    <Grid item sx={3}>
                        <OutlinedCard />
                    </Grid>
                    <Grid item sx={3}>
                        <OutlinedCard />
                    </Grid>
                    <Grid item sx={3}>
                        <OutlinedCard />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default DashBoard;