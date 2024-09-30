import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

export type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Curated Industry Standard APIs',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        APICove provides a meticulously curated list of niche APIs, saving users
        from the hassle of sifting through endless options or implementing from scratch.
      </>
    ),
  },
  {
    title: 'Simulators Smoothen the Way to Systems Integration Testing',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        APICove includes simulators specifically designed to streamline systems 
        integration processes, allowing users to test and troubleshoot without 
        disrupting their workflow.
      </>
    ),
  },
  {
    title: 'Compatibility with Cloud and On-Premise Solutions',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Whether you're working with cloud-based platforms or on-premise solutions, 
        APICove is compatible with both, ensuring versatility and flexibility for users.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function CapabilitySection({features = FeatureList}: {features?: FeatureItem[]}): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
