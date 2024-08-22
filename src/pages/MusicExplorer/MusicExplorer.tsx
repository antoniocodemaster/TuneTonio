import MusicExplorerLayout from '../../shared/components/MusicExplorerLayout';
import { Outlet } from 'react-router-dom';

const MusicExplorer = () => {
  return (
    <MusicExplorerLayout>
      <Outlet />
    </MusicExplorerLayout>
  );
};

export default MusicExplorer;
