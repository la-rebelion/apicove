import * as React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';

import TwoSidedLayout from '../components/TwoSidedLayout';
import HubSpotForm from '../components/HubSpotForm';
import { Typography, Button, ButtonGroup, ListItemIcon, ListItemText, List, ListItem } from '@mui/material';
import { Chip } from '@mui/joy';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ReportOffIcon from '@mui/icons-material/ReportOff';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';

import CodeBlock from '@theme/CodeBlock'
import CapabilitySection, { FeatureItem } from '../components/CapabilitySection';
const DownloadBlock = () => {
  // const theme = useTheme();
  return (
    <Container sx={{ marginTop: 3 }}>
      <Typography variant="h1" sx={{ textAlign: 'center' }}
        fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 3rem)">
        Download APICove's GYAT CLI
      </Typography>
      {/* @todo - Add this when the bash script is ready for installations */}
      {/* <Typography>Get started with APICove CLI by running the following command in your terminal:</Typography>
      <div style={{
        backgroundColor: 'black',
        color: 'white',
        padding: '1em',
        borderRadius: '5px',
        fontFamily: 'monospace',
        margin: 12
      }}>
        <CodeBlock language="bash">
          $ curl https://gyat.apicove.com --proto '=https' --tlsv1.2 -LsSf  | sh
        </CodeBlock>
      </div> */}
      <ButtonGroup sx={{ display: 'flex', justifyContent: 'center', marginTop: 3 }}>
        <Button href='https://apicove.com/docs'
          sx={(theme) => ({ backgroundColor: theme.palette.success.main, color: theme.palette.primary.contrastText, '&:hover': { backgroundColor: theme.palette.primary.contrastText, color: theme.palette.secondary.dark } })}
        >
          Get Start
        </Button>
        <Button
          variant='outlined'
          href='https://go.rebelion.la/apicove-downloads'
          target='_blank'>
          Download
        </Button>
      </ButtonGroup>
    </Container>
  );
};

const capabilityFeatures: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Automatically interpret and execute API calls from Swagger specs, with a simple, 
        intuitive command structure <code>kubectl</code>-like syntax that maps to API methods 
        into verbs like <code>get</code>, <code>apply</code>, and <code>delete</code>.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Streamline API operations with a no-code approach that reduces complexity, 
        minimizes errors, and speeds up development. Faster onboarding, fewer mistakes,
        and more time to focus on building.
      </>
    ),
  },
  {
    title: 'Powered by Swagger',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        GYAT reads your Swagger specs and lets you use APIs with zero coding. 
        It's all about a seamless experience for developers-turn complex API 
        docs into simple, <b>no-code commands</b>.
      </>
    ),
  },
];

export default function GyatPage() {
  const { siteConfig } = useDocusaurusContext();
  const featuresList: [React.ElementType, string][] = [
    [TerminalIcon, 'Swagger Spec to CLI',],
    [AutoAwesomeIcon, 'Intuitive and consistent Commands',],
    [CodeOffIcon, 'No-Code API Calls'],
    [LoyaltyIcon, 'Tag-Based Resources'],
    [EngineeringIcon, 'Streamlined API Operations'],
    [DisplaySettingsIcon, 'Cross-Environment Testing'],
    [DynamicFormIcon, 'Faster Onboarding'],
    [ReportOffIcon, 'Error Reduction'],
    [DeveloperModeIcon, 'Focus on Building'],
  ];

  return (
    <Layout
      title={`Download the amazing GYAT CLI`}
      description="Download tools for better Developer Experience">
      <main>
        <DownloadBlock />
        <TwoSidedLayout reversed image='img/GYAT-demo.gif'>
          <Chip size="lg" variant="outlined" color="neutral">
            From Swagger to CLI with No-Code!
          </Chip>
          <Typography
            variant="h2"
            fontWeight="xl"
            fontSize="clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)"
          >
            Go-through Your APIs Tool
          </Typography>
          <Typography fontSize="lg" lineHeight="lg" color='neutral'>
            Elevate your API game with GYAT, APICove has got you covered with <b>G</b>o-through <b>Y</b>our <b>A</b>PI <b>T</b>ool.
          </Typography>
          <Typography fontSize="lg" lineHeight="lg" color='neutral'>
            GYAT reads your Swagger/OpenAPI specs and via a simple kubectl-like command executes your API. It's a no-code solution to get your API in the hands of your users, take advantage of API as a product.
          </Typography>
            <List dense>
            {featuresList.map(([Icon, text], index) => (
              <ListItem key={`feature-item${index}`}>
              <ListItemIcon style={{ color: 'inherit' }} >
                <Icon />
              </ListItemIcon>
              <ListItemText primary={text} />
              </ListItem>
            ))}
            </List>
        </TwoSidedLayout>
        <CapabilitySection features={capabilityFeatures} />
      </main>
      <div className="container margin-vert--lg">
        <HubSpotForm divider={true} />
      </div>
    </Layout>
  );
}