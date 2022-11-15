import { Accordion, AccordionSummary, Typography, Box } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import { Experience } from "./experience";
import { AccordionDetails } from "./accordionDetails";

export const Resume = () => {
    const [skillsExp, setSkillsExp] = useState(true)
    const [epxerienceExp, setExperienceExp] = useState(true)

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.default',
                color: 'text.primary',
                borderRadius: 1,
                p: 3,
            }}
        >
            <Accordion expanded={skillsExp} onChange={() => setSkillsExp(!skillsExp)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6">Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Languages:
                        </Box>
                        TypeScript, JavaScript, SQL, HTML, CSS, Python
                    </Typography>
                    <Typography>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Software/Frameworks:
                        </Box>
                        React, Next.js, Node.js, Svelte, .Net, MongoDB, Docker, AWS
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={epxerienceExp} onChange={() => setExperienceExp(!epxerienceExp)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6">Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Experience />
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6">Accolades</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Some details
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography variant="h6">Formal Education</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    Some details
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}
