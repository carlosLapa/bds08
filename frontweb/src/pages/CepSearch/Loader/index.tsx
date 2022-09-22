import ContentLoader from 'react-content-loader';

const Loader = () => (
  <div className="loader-container">
    <ContentLoader
      viewBox="0 0 1500 300"
      width={1500}
      height={300}
      title="Loading profile..."
    >
      <rect x="0" y="0" rx="5" ry="5" width="1500" height="300" />
    </ContentLoader>
  </div>
);

export default Loader;
