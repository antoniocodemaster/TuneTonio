import create from 'zustand';
import Album from '../../core/entities/Album';

interface MusicExplorerStore {
  isModalOpen: boolean;
  openModal: (newStatus: boolean) => void;
  selectedAlbum: Album | null;
  selectAlbum: (album: Album | null) => void;
  favorites: Album[];
  addAlbumToFavorites: (album: Album) => void;
  removeAlbumFromFavorites: (album: Album) => void;
  saveFavoritesIntoLocalStorage: () => void;
  getFavoritesFromLocalStorage: () => void;
  clearFavorites: () => void;
  albumInFavorites: (album: Album) => boolean;
}

const useMusicExplorerStore = create<MusicExplorerStore>((set, get) => ({
  isModalOpen: false,
  openModal: (newStatus) => set(() => ({ isModalOpen: newStatus })),
  selectedAlbum: null,
  selectAlbum: (album) => set(() => ({ selectedAlbum: album })),
  favorites: [],
  addAlbumToFavorites: (album) => {
    set((state) => ({ favorites: [...state.favorites, album] }));
    get().saveFavoritesIntoLocalStorage();
  },
  removeAlbumFromFavorites: (album) => {
    console.log('album', album);
    const newFavorites = get().favorites.filter(
      (favAlbum) => favAlbum.idAlbum !== album.idAlbum
    );
    console.log('newFavorites', newFavorites);
    set(() => ({
      favorites: newFavorites,
    }));
    get().saveFavoritesIntoLocalStorage();
  },
  saveFavoritesIntoLocalStorage: () => {
    localStorage.setItem('favorites', JSON.stringify(get().favorites));
  },
  getFavoritesFromLocalStorage: () => {
    const favorites = localStorage.getItem('favorites');
    if (favorites) {
      set(() => ({ favorites: JSON.parse(favorites) }));
    }
  },
  clearFavorites: () => {
    set(() => ({
      favorites: [],
    }));
    get().saveFavoritesIntoLocalStorage();
  },
  albumInFavorites: (album) => {
    return get().favorites.some(
      (favAlbum) => favAlbum.idAlbum === album.idAlbum
    );
  },
}));

export default useMusicExplorerStore;
