import { Box, Button, Typography } from '@mui/material';
import Album from '../../core/entities/Album';
import useMusicExplorerStore from '../store/MusicExplorerStore';
import ViewMoreModal from '../../pages/MusicExplorer/Albums/components/ViewMoreModal';

interface AlbumsListProps {
  albums: Album[];
}

const AlbumsList = ({ albums }: AlbumsListProps) => {
    const { openModal, selectAlbum, addAlbumToFavorites, favorites } =
    useMusicExplorerStore();
  return (
    <>
      <Box className="flex flex-wrap gap-4 albums-list">
        {albums.map((album) => (
          <Box key={album.idAlbum} className="w-[23%] mb-8 album">
            <img src={album.strAlbumThumb} alt="" />
            <Box className="disk-data">
              <Typography className="text-left pl-2">
                {album.strAlbum}
              </Typography>
              <Button
                onClick={() => {
                  addAlbumToFavorites(album);
                }}
              >
                Add To Favorites
              </Button>
              <Button
                onClick={() => {
                  selectAlbum(album);
                  openModal(true);
                }}
              >
                View More
              </Button>
              {/* <Typography>{album.strDescriptionEN}</Typography> */}
            </Box>
          </Box>
        ))}
      </Box>
      <ViewMoreModal />
    </>
  );
};

export default AlbumsList;
