import { List as MuiList } from "@mui/material";
import React from "react";

export const List = ({ children }) => 
    <MuiList sx={{ py: 0 }}>
        {children}
    </MuiList>
