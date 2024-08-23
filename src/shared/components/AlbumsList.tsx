import { Box, Button, Typography } from '@mui/material';
import Album from '../../core/entities/Album';
import useMusicExplorerStore from '../store/MusicExplorerStore';
import ViewMoreModal from './ViewMoreModal';

interface AlbumsListProps {
  albums: Album[];
}

const AlbumsList = ({ albums }: AlbumsListProps) => {
  const {
    openModal,
    selectAlbum,
    addAlbumToFavorites,
    removeAlbumFromFavorites,
    albumInFavorites,
  } = useMusicExplorerStore();
  
  return (
    <>
      <Box className="flex flex-wrap gap-4 albums-list mt-6">
        {albums.map((album) => (
          <Box
            key={album.idAlbum}
            className=" md:w-[48%] lg:w-[31%] 2xl:w-[23.5%] w-[100%] mb-8 album"
          >
            <img src={album.strAlbumThumb} alt="" />
            <Box className="disk-data pt-4">
              <Typography variant="h3" className="text-left pl-2">
                {album.strAlbum}
              </Typography>

              <Box className="buttons-container">
                {albumInFavorites(album) && (
                  <Button
                    className="btn-red"
                    onClick={() => {
                      removeAlbumFromFavorites(album);
                    }}
                  >
                    Remove From Favorites
                  </Button>
                )}
                {!albumInFavorites(album) && (
                  <Button
                    className="btn-green"
                    onClick={() => {
                      addAlbumToFavorites(album);
                    }}
                  >
                    Add To Favorites
                  </Button>
                )}

                <Button
                  className="btn-primary-small"
                  onClick={() => {
                    selectAlbum(album);
                    openModal(true);
                  }}
                >
                  View More
                </Button>
              </Box>
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
