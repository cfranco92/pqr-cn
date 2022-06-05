import { Box, Paper } from "@mui/material";
import React, { useEffect } from "react";

import { DashboardLayout } from "../../../components/layouts";
import EnhancedTable from "../../../components/tables/EnhancedTable";
import UploadDocuments from "./uploadDocuments";
// import { documentsApi } from "../../../services/documents";
import { useAppSelector } from "../../../store";
import { userAccount } from "../../../store/account";

function DashboardDocuments() {
  const userSelector = useAppSelector(userAccount);
  // const [fetchDocumentsByUserId, { data: documentsList }] =
  //   documentsApi.endpoints.fetchDocumentsByUserId.useLazyQuery();

  useEffect(() => {
    (async () => {
      if (!userSelector?.uid) return;
      // await fetchDocumentsByUserId({ uid: userSelector?.uid });
    })();
    // }, [fetchDocumentsByUserId, userSelector?.uid]);
  }, [userSelector?.uid]);

  return (
    <DashboardLayout page="dashboard-documents-page">
      <Box sx={{ p: 8, display: "flex", flexDirection: "column" }}>
        <Paper sx={{ mb: 4, p: 4 }} elevation={3}>
          <UploadDocuments />
        </Paper>
        {/* <EnhancedTable documentsList={documentsList} /> */}
      </Box>
    </DashboardLayout>
  );
}

export default DashboardDocuments;
