// components/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);

export default SEO;
