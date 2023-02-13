import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { pickUpColumns } from "../../app/PickupDataGrid";

const PickupTable = () => {
 const [data, setData] = useState([])
  const [isLoading, setIsloading] = useState(false);
  return (
    <>
      <DataGrid
        loading={isLoading || !data}
        getRowId={(row) => row._id}
        rows={data || []}
        columns={pickUpColumns}
      />
    </>
  );
};

export default PickupTable;
