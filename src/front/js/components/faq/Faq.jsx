import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import { Context } from '../../store/appContext';
import { FaqSpanish } from './FaqSpanish.jsx';
import { FaqEnglish } from './FaqEnglish.jsx';

export const Faq = () =>{
    const {actions, store} = React.useContext(Context)
    return(
        <>
        {store.language =="spanish"? <FaqSpanish />: <FaqEnglish />}</>
    )
}