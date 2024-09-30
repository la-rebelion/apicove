import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import TwoSidedLayout from './TwoSidedLayout';
import HubSpotForm from './HubSpotForm';

export default function HeroHome() {
  return (
    <TwoSidedLayout reversed>
      <Chip size="lg" variant="outlined" color="neutral">
        APICove, API hub for easier Enterprise integrations
      </Chip>
      <Typography
        level="h1"
        fontWeight="xl"
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)"
      >
        Easy-to-navigate space for APIs
      </Typography>
      <Typography fontSize="lg" textColor="text.secondary" lineHeight="lg">
        APICove provides a set of tools and services that help you integrate 
        your applications with ease. Tools designed for API-first, and better Developer Experience.
      </Typography>
      <HubSpotForm divider={false} />
    </TwoSidedLayout>
  );
}