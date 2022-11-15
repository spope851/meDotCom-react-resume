import { Accordion, AccordionSummary, ListItem, Typography, Box, Link } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from "react";
import { AccordionDetails } from "./accordionDetails";
import { List } from './list';

export const Experience = () => {
    const [bciExp, setBciExp] = useState(true)

    return (
        <>
            <Accordion expanded={bciExp} onChange={() => setBciExp(!bciExp)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography component={Box} sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Web Engineer: <Link href="https://blockchains.com" target="_blank">Blockchains Inc</Link>
                        </Box>
                        <Box component="span">
                            2021-Present
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography>Build out frontend api service from backend team&apos;s documentation using Axios</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Build appropriately flexible components from Figma designs using Material UI</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Manage state using react context api and Mobx stateful components</Typography>  
                        </ListItem>
                        <ListItem>
                            <Typography>Bootstrap new portal app using Next.js</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Architect responsive layout using Material UI</Typography>
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography component={Box} sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Lead Frontent Engineer: <Link href="https://legendarylabs.net" target="_blank">Legendary Labs (failed) startup</Link>
                        </Box>
                        <Box component="span">
                            2021-2022
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography>Bootstrap a react app as the only frontend dev on the team</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Orchestrate test environments in AWS</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Deploy to production with Cloudflare</Typography>  
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography component={Box} sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Applications Engineer: <Link href="https://definitivehc.com" target="_blank">Definitive Healthcare</Link>
                        </Box>
                        <Box component="span">
                            2019-2021
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography>Build healthcare intelligence features with React and SQL Server and integrate with .NET web app</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Write SQL stored procedures to leverage data in the front end through .NET web APIs</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Build and publish base UI components to the company&apos;s shared npm registry managed with Rollup</Typography>  
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography component={Box} sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Product Management Intern: <Link href="https://sovos.com" target="_blank">Sovos Compliance, LLC</Link>
                        </Box>
                        <Box component="span">
                            Summer 2018
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography>Exercised Agile and Scrum methodologies for multiple products</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Reviewed Epics and wrote user stories with entrance/acceptance criteria in JIRA</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Participated in daily stand-ups, weekly sprint plannings, and quarterly groomings</Typography>  
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography component={Box} sx={{ justifyContent: 'space-between', display: 'flex', width: '100%' }}>
                        <Box component="span" sx={{ fontWeight: 'bold' }}>
                            Quality Assurance Engineer: <Link href="https://instant-tech.com" target="_blank">Instant Technologies</Link>
                        </Box>
                        <Box component="span">
                            2021-Present
                        </Box>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        <ListItem>
                            <Typography>Quality assurance of virtual help desk instant messaging software and several other enterprise products</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Designed landing pages to optimize search results for specific key words</Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>Analyzed and reported metrics using Google AdWords and Google Analytics</Typography>  
                        </ListItem>
                    </List>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
