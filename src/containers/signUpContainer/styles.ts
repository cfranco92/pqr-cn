import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  },
}));

export default useStyles;
