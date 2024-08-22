import { useParams } from 'react-router-dom';

const SingleAlbum = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <h1>Album Name {id}</h1>
      <h2>Songs</h2>
      <ul>
        <li>bar</li>
        <li>foo</li>
      </ul>
    </>
  );
};

export default SingleAlbum;
