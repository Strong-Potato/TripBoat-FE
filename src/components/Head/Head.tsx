import {Helmet} from 'react-helmet-async';

function Head({title}: {title: string}) {
  return (
    <Helmet>
      <title>TRIPVOTE | {title}</title>
    </Helmet>
  );
}

export default Head;
