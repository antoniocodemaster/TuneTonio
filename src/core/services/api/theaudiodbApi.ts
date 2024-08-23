import axios, { AxiosResponse } from 'axios';

import Artist from '../../entities/Artist';
import Album from '../../entities/Album';
import FormSearchData from '../../entities/FormSearchData';

interface ArtistsResponse {
  artists: Artist[];
}

interface AlbumResponse {
  album: Album[];
}

const apiClient = axios.create({
  baseURL: 'https://www.theaudiodb.com/',
  timeout: 2000,
  headers: { 'Content-Type': 'application/json' },
});

export const searchArtists = async (
  data: FormSearchData
): Promise<Artist[]> => {
  try {
    const response: AxiosResponse<ArtistsResponse> = await apiClient.get(
      `/api/v1/json/2/search.php?s=${data.artist}`
    );
    console.log('response.data.artists', response.data.artists);
    return response.data.artists;
  } catch (error) {
    console.error('Error fetching Artists data:', error);
    throw error;
  }
};

export const getAlbumsByArtist = async (artist: string): Promise<Album[]> => {
  try {
    const response: AxiosResponse<AlbumResponse> = await apiClient.get(
      `/api/v1/json/2/searchalbum.php?s==${artist}`
    );
    console.log('response.data.album', response.data.album);
    return response.data.album;
  } catch (error) {
    console.error('Error fetching albums data:', error);
    throw error;
  }
};
