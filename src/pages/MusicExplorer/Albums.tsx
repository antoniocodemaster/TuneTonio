import { Link } from "react-router-dom";

const Albums = () => {
  return (
    <>
      <h1>Albums</h1>
      <ul>
        <li><Link to="/music-explorer/albums/1">bar</Link></li>
        <li><Link to="/music-explorer/albums/2">foo</Link></li>
      </ul>
    </>
  );
};

export default Albums;
