import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@mui/material";
import { setUser, userAccount } from "../../../store/account";
import { useAppDispatch, useAppSelector } from "../../../store";

import { DashboardLayout } from "../../../components/layouts";
import React from "react";
import { User } from "../../../models/user";

// import {
//   usePutUserMutation,
// } from "../../../services/users";


interface State {
  email: string;
  name: string;
  lastName: string;
  address: string;
  numIdentificacion: string;
}

function DashboardProfile() {
  const userSelector: Partial<User> | undefined = useAppSelector(userAccount);
  const [values, setValues] = React.useState<State>({
    email: userSelector?.email || "",
    name: userSelector?.firstName || "",
    lastName: userSelector?.lastName || "",
    address: userSelector?.address || "",
    numIdentificacion: userSelector?.numIdentificacion || "",
  });

  // const [putUser] = usePutUserMutation();
  const dispatch = useAppDispatch();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleUpdateUser = async () => {
    if (!userSelector) {
      return;
    }
    const user: User = {
      ...userSelector,
      // uid: userSelector.uid,
      firstName: values.name,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
      numIdentificacion: values.numIdentificacion,
    };
    dispatch(setUser(user));
    // putUser(user);
    alert("Usuario actualizado");
  };

  return (
    <DashboardLayout page="dashboard-page">
      <Box
        sx={{
          p: 8,
        }}
      >
        <Card
          sx={{
            minWidth: "450px",
          }}
        >
          <CardHeader
            title={
              <>
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  EDITAR USUARIO
                </Typography>
              </>
            }
            sx={{
              ml: 2,
              mt: 6,
              display: "flex",
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          />
          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                m: 3,
                "& > :not(style)": { mb: 3 },
              }}
              noValidate
              autoComplete="off"
            >
              <FormControl sx={{}} variant="standard">
                <InputLabel htmlFor="standard-email">Email</InputLabel>
                <Input
                  id="standard-email"
                  type="text"
                  value={values.email}
                  onChange={handleChange("email")}
                />
              </FormControl>
              <FormControl sx={{}} variant="standard">
                <InputLabel htmlFor="standard-name">Nombre</InputLabel>
                <Input
                  id="standard-name"
                  type="text"
                  value={values.name}
                  onChange={handleChange("name")}
                />
              </FormControl>
              <FormControl sx={{}} variant="standard">
                <InputLabel htmlFor="standard-lastName">Apellido</InputLabel>
                <Input
                  id="standard-lastName"
                  type="text"
                  value={values.lastName}
                  onChange={handleChange("lastName")}
                />
              </FormControl>
              <FormControl sx={{}} variant="standard">
                <InputLabel htmlFor="standard-address">Dirección</InputLabel>
                <Input
                  id="standard-address"
                  type="text"
                  value={values.address}
                  onChange={handleChange("address")}
                />
              </FormControl>
            </Box>
            <Button
              variant="contained"
              sx={{ m: 3, mb: 8 }}
              onClick={handleUpdateUser}
            >
              Guardar
            </Button>
          </CardContent>
        </Card>
      </Box>
    </DashboardLayout>
  );
}

export default DashboardProfile;
