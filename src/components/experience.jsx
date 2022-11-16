import { Accordion,  ListItem, Typography } from "@mui/material";
import React from "react";
import { AccordionDetails } from "./accordionDetails";
import { List } from './list';
import { LinkSummary } from "./linkSummary";

export const Experience = () => (
    <>
        <Accordion>
            <LinkSummary
                title="Web Engineer"
                href="https://blockchains.com"
                linkTitle="Blockchains Inc"
                subTitle="2021-Present"
            />
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
            <LinkSummary
                title="Lead Frontent Engineer"
                href="https://legendarylabs.net"
                linkTitle="Legendary Labs (failed) startup"
                subTitle="2021-2022"
            />
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
            <LinkSummary
                title="Applications Engineer"
                href="https://definitivehc.com"
                linkTitle="Definitive Healthcare"
                subTitle="2019-2021"
            />
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
            <LinkSummary
                title="Product Management Intern"
                href="https://sovos.com"
                linkTitle="Sovos Compliance, LLC"
                subTitle="Summer 2018"
            />
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
            <LinkSummary
                title="Quality Assurance Engineer"
                href="https://instant-tech.com"
                linkTitle="Instant Technologies"
                subTitle="2017-2018"
            />
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
