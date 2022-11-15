import { AccordionDetails as MuiAccordionDetails } from "@mui/material";
import React from "react";

export const AccordionDetails = ({ children }) => 
    <MuiAccordionDetails sx={{ pt: 0 }}>
        {children}
    </MuiAccordionDetails>
