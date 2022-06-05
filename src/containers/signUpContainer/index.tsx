import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setLoggedIn, setUser } from "../../store/account";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import React from "react";
import { User } from "../../models/user";
import { useAppDispatch } from "../../store";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";
// import {
//   useCreateNewKeycloakUserMutation,
//   useLoginMutation,
// } from "../../services/login";


interface State {
  email: string;
  password: string;
  showPassword: boolean;
  name: string;
  lastName: string;
  address: string;
  numIdentificacion: string;
}

const SignUpContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    name: "",
    lastName: "",
    address: "",
    numIdentificacion: "",
    showPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // const [postNewKeycloakUser] = useCreateNewKeycloakUserMutation();
  // const [postLogin, { isLoading: isPostingLogin }] = useLoginMutation();

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [prop]: event.target.value });
    };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSignUp = async () => {
    let user: User = {
      firstName: values.name,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
      numIdentificacion: values.numIdentificacion,
    };

    // const postNewKeycloakUserResponse:any = await postNewKeycloakUser(user);

    // if (postNewKeycloakUserResponse.data.includes('se encuentra registrado en el operador')) {
    //   alert(postNewKeycloakUserResponse.data)
    //   return
    // }

    // const userLoginResponse: any = await postLogin({
    //   email: values.email,
    //   password: "1234567",
    // });
    localStorage.clear();

    // if (!userLoginResponse.data.token)
    //   return alert("El servicio de login está caido");

    // localStorage.setItem("token", userLoginResponse.data.token || "");

    const userLoged: User = {
      // uid: userLoginResponse.data.uid,
      uid: "rwfasdfasd",
      firstName: values.name,
      lastName: values.lastName,
      email: values.email,
      address: values.address,
      numIdentificacion: values.numIdentificacion,
    };

    dispatch(setUser(userLoged));
    dispatch(setLoggedIn(true));

    navigate("/");
  };

  return (
    <>
      <ProfileLayout page="login-page">
        <div className={classes.root}>
          {/* {isPostingLogin ? ( */}
          {false ? (
            <>
              <CircularProgress color="inherit" />
            </>
          ) : (
            <Card
              sx={{
                minWidth: "450px",
              }}
            >
              <>
                <CardHeader
                  avatar={
                    <>
                      <IconButton
                        aria-label="Example"
                        onClick={() => navigate("/")}
                      >
                        <ArrowBackRoundedIcon />
                      </IconButton>
                    </>
                  }
                  title={
                    <>
                      <Typography variant="h5" component="div">
                        CARPETA CIUDADANA
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
                      <InputLabel htmlFor="standard-adornment-password">
                        Password
                      </InputLabel>
                      <Input
                        id="standard-adornment-password"
                        type={values.showPassword ? "text" : "password"}
                        value={values.password}
                        onChange={handleChange("password")}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {values.showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
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
                      <InputLabel htmlFor="standard-lastName">
                        Apellido
                      </InputLabel>
                      <Input
                        id="standard-lastName"
                        type="text"
                        value={values.lastName}
                        onChange={handleChange("lastName")}
                      />
                    </FormControl>
                    <FormControl sx={{}} variant="standard">
                      <InputLabel htmlFor="standard-address">
                        Dirección
                      </InputLabel>
                      <Input
                        id="standard-address"
                        type="text"
                        value={values.address}
                        onChange={handleChange("address")}
                      />
                    </FormControl>
                    <FormControl sx={{}} variant="standard">
                      <InputLabel htmlFor="standard-numIdentificacion">
                        Cédula
                      </InputLabel>
                      <Input
                        id="standard-numIdentificacion"
                        type="text"
                        value={values.numIdentificacion}
                        onChange={handleChange("numIdentificacion")}
                      />
                    </FormControl>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ m: 3, mb: 8 }}
                    onClick={handleSignUp}
                  >
                    Registrar
                  </Button>
                </CardContent>
              </>
            </Card>
          )}
        </div>
      </ProfileLayout>
    </>
  );
};

export default SignUpContainer;
