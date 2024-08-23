import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useMusicExplorerStore from '../store/MusicExplorerStore';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ViewMoreModal = () => {
  const { isModalOpen, openModal, selectedAlbum, selectAlbum } =
    useMusicExplorerStore();

  return (
    <>
      <Modal
        open={isModalOpen}
        onClose={() => {
          openModal(false);
          selectAlbum(null);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="view-more-modal"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {selectedAlbum?.strAlbum}
          </Typography>
          <img src={selectedAlbum?.strAlbumThumb} alt="" />
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedAlbum?.strDescriptionEN}
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default ViewMoreModal;
