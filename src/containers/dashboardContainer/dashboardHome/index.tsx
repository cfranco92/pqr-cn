import React from "react";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { DashboardLayout } from "../../../components/layouts";
import { useAppSelector } from "../../../store";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { userAccount } from "../../../store/account";

function DashboardHome() {
  const theme = useTheme();
  const userSelector = useAppSelector(userAccount);
  const matchesScreenSize = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <DashboardLayout page="dashboard-page">
      <Box
        sx={{
          p: 8,
        }}
      >
        <Grid
          container
          spacing={8}
          sx={{
            display: "flex",
            flexDirection: matchesScreenSize ? "column" : "row",
          }}
        >
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Card>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJvHvEkqwHEUdErsaMf_SeJNRTuj82LiE_iznJRrXaHktMQKVHaLx80uRWXTp6Ll3xRvQ&usqp=CAU"
                  alt="green iguana"
                  sx={{ width: 300 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {userSelector?.firstName} {userSelector?.lastName}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} md={12} lg={6} xl={6}>
            <Card>
              <CardActionArea sx={{ display: "flex" }}>
                <CardMedia
                  component="img"
                  image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Firma_Len%C3%ADn_Moreno_Garc%C3%A9s.png/1200px-Firma_Len%C3%ADn_Moreno_Garc%C3%A9s.png"
                  alt="green iguana"
                  sx={{ width: 300 }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Firma
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </DashboardLayout>
  );
}

export default DashboardHome;
