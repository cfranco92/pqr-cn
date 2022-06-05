import { Button, CircularProgress, Stack } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

import { Box } from "@mui/system";
import CheckIcon from "@mui/icons-material/Check";
import Fab from "@mui/material/Fab";
import SaveIcon from "@mui/icons-material/Save";
import { green } from "@mui/material/colors";
import storage from "../../../../firebase";
import { styled } from "@mui/material/styles";
import { useAppSelector } from "../../../../store";
// import { usePostDocumentsMutation } from "../../../../services/documents";
import { userAccount } from "../../../../store/account";

const Input = styled("input")({
  display: "none",
});

function UploadDocuments() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const timer = useRef<number>();
  const userSelector = useAppSelector(userAccount);

  // const [postDocument] = usePostDocumentsMutation();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      "&:hover": {
        bgcolor: green[700],
      },
    }),
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleSelectFile = ({ target }: any) => {
    setFile(target.files[0]);
  };

  const handleUploadFile = async () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      if (!file) {
        return;
      }
      const uid = userSelector?.uid;
      const storageRef = ref(storage, `${uid}/${file.name}`);
      uploadBytes(storageRef, file).then((snapshot: any) => {
        getDownloadURL(snapshot.ref).then((downloadURL: any) => {
          // uploadBytes(storageRef, file).then(() => {
          //   getDownloadURL(snapshot.ref).then(() => {
          // postDocument({
          //   idUser: uid || "",
          //   url: downloadURL,
          //   fileName: file.name,
          //   fileSize: String(file.size),
          //   fileType: file.type,
          //   date: String(file.lastModified),
          // });
          setSuccess(true);
          setLoading(false);
          setFile(null);
          alert("Documento guardado");
        });
      });
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      {file ? (
        <>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ m: 1, position: "relative" }}>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonSx}
                onClick={handleUploadFile}
              >
                {success ? <CheckIcon /> : <SaveIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
            <Box sx={{ m: 1, position: "relative" }}>
              <Button
                variant="contained"
                sx={buttonSx}
                disabled={loading}
                onClick={handleUploadFile}
              >
                Guardar Archivo
              </Button>
              {loading && (
                <CircularProgress
                  size={24}
                  sx={{
                    color: green[500],
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    marginTop: "-12px",
                    marginLeft: "-12px",
                  }}
                />
              )}
            </Box>
          </Box>
        </>
      ) : (
        <>
          <Stack>
            <label htmlFor="contained-button-file">
              <Input
                accept="*"
                id="contained-button-file"
                type="file"
                onChange={handleSelectFile}
              />
              <Button variant="contained" component="span">
                Seleccionar Archivo
              </Button>
            </label>
          </Stack>
        </>
      )}
    </Box>
  );
}

export default UploadDocuments;
