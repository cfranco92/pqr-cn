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
} from "@mui/material";
import React, { useEffect } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { setLoggedIn, setUser } from "../../store/account";

import { Box } from "@mui/system";
import { ProfileLayout } from "../../components/layouts";
import { useAppDispatch } from "../../store";
// import { useLoginMutation } from "./../../services/login";
import { useNavigate } from "react-router-dom";
import useStyles from "./styles";

// import { usersApi } from "../../services/users";

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

const LoginContainer = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const [
  //   fetchUser,
  //   {
  //     data: userData,
  //     isLoading: isFetchUserLoading,
  //     isSuccess: isFetchUserSucces,
  //   },
  // ] = usersApi.endpoints.fetchUser.useLazyQuery();

  // const [postLogin, { isLoading: isPostLoginLoading }] = useLoginMutation();

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

  const handleLogin = async () => {
    // const userLoginResponse: any = await postLogin({
    //   email: values.email,
    //   password: values.password,
    // });
    localStorage.clear();

    // if (!userLoginResponse.data.token)
    //   return alert("El servicio de login está caido");

    // localStorage.setItem("token", userLoginResponse.data.token || "");

    // fetchUser({ uid: userLoginResponse.data.uid });
  };

  useEffect(() => {
    // if (isFetchUserSucces && userData) {
    //   dispatch(setUser(userData));
    //   dispatch(setLoggedIn(true));
    //   navigate("/");
    // }
    // }, [dispatch, isFetchUserSucces, navigate, userData]);
  }, [dispatch, navigate]);

  return (
    <>
      <ProfileLayout page="login-page">
        <div className={classes.root}>
          {/* {isFetchUserLoading || isPostLoginLoading ? ( */}
          {false ? (
            <CircularProgress color="inherit" />
          ) : (
            <>
              <Card
                sx={{
                  minWidth: "450px",
                }}
              >
                <CardHeader
                  title="CARPETA CIUDADANA"
                  sx={{
                    mt: 6,
                    display: "flex",
                    flexDirection: "column",
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
                  </Box>
                  <Button
                    variant="contained"
                    sx={{ ml: 3, mr: 3 }}
                    onClick={handleLogin}
                  >
                    Iniciar Sesión
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ m: 3, mb: 8 }}
                    onClick={() => navigate("/signup")}
                  >
                    Registrar Usuario
                  </Button>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </ProfileLayout>
    </>
  );
};

export default LoginContainer;
