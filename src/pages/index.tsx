import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import CapabilitySection from '@site/src/components/CapabilitySection';

import styles from './index.module.css';
import HeroHome from '../components/HeroHome';
import { Box, Typography } from '@mui/joy';

function HomepageHeader() {
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">        
      <HeroHome />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="APIs for easier and faster enterprise integrations">
      <HomepageHeader />
      <main>
        <CapabilitySection />
            <Box
                id="text-content"
                key={'text-content'}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-start', // Align items to the start
                    alignItems: 'flex-start', // Align items to the start
                    gap: '20px', // Add space between items
                    p: '20px', // Add padding
                    width: '100%', // Take full width
                    maxWidth: '1200px', // Limit maximum width
                    margin: '0 auto', // Center the box
                    color: 'inherit' 
                  }}>
        <Typography fontStyle="italic" fontSize="lg" lineHeight="lg" textColor="inherit" level="body-lg">
          <strong>Welcome to APICove: Where Industry Standards Meet Innovation</strong>
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          In a world where every second counts, navigating the complex landscape of niche APIs shouldn't be a barrier to your success. That's where APICove steps in - your gateway to seamless integration and accelerated productivity.
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          APICove isn't just another API hub, neither Yet Another API Tools - it's a curated collection of industry standards coupled with cutting-edge services and simulators. Say goodbye to wasted time and frustration as you effortlessly integrate systems with both cloud and on-premise solutions.
        </Typography>
        <Typography fontStyle="italic" fontSize="lg" lineHeight="lg" textColor="inherit" level="body-lg">
          <strong>Act Now Before It's Too Late</strong>
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          With APICove, exclusivity is key. Limited availability ensures that only those who act swiftly can unlock its transformative power. Don't miss out on this rare opportunity to elevate your capabilities and leave your competitors in the dust. Join a community of like-minded professionals and embark on a journey of continuous growth and success.
        </Typography>
        <Typography fontStyle="italic" fontSize="lg" lineHeight="lg" color="neutral" level="body-lg">
          <strong>APICove's Personas</strong>
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          Meet Sophia E., a driven software engineer with aspirations to climb the ranks in Silicon Valley. APICove addresses her fear of stagnation by providing the tools and resources she needs to stay ahead of the curve. Say goodbye to uncertainty and hello to empowerment with APICove by your side.
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          Introducing Alex Q., a seasoned QA professional with a passion for innovation. APICove's cutting-edge services and simulators allow him to explore new possibilities and push the boundaries of what's possible. Embrace the future with confidence and let APICove be your guide.
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          Meet Manuel F., a forward-thinking manager with a vision for the future. APICove's exclusive services and resources empower him to lead his team with confidence and drive innovation within his organization. Say goodbye to outdated practices and hello to a new era of productivity with APICove.
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          Are you ready to join Sophia, Alex, and Manuel on their journey to success? Unlock your potential today with APICove and experience the difference for yourself.
        </Typography>
        <Typography fontStyle="italic" fontSize="lg" lineHeight="lg" color="neutral" level="body-lg">
          <strong>Adapt and Thrive</strong>
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          In a rapidly evolving industry, flexibility is key to maintaining your edge. APICove is designed to adapt to your ever-changing needs, ensuring that you're always one step ahead of the competition. Embrace the future with confidence and let APICove be your guide.
        </Typography>
        <Typography fontStyle="italic" fontSize="lg" lineHeight="lg" color="neutral" level="body-lg">
          <strong>Unlock Your Potential Today</strong>
        </Typography>
        <Typography fontSize="md" lineHeight="md" textColor="inherit" level="body-md">
          Ready to take the next step towards mastering the world of niche APIs? Join the APICove community today and experience the difference for yourself. Don't let uncertainty hold you back – seize the opportunity to transform your career with APICove. The power is in your hands – are you ready to wield it?
        </Typography>
        </Box>
      </main>
    </Layout>
  );
}
