import { ImageFormData } from './types';

const FILETYPE_REGEX = /\.(\w+)$/;

export const imageUriToFormData = (uri: string): ImageFormData => {
  const pathAsArray = uri.split('/');

  const filename = pathAsArray.pop() || '';

  // Infer the type of the image
  const match = FILETYPE_REGEX.exec(filename);
  const type = match ? `image/${match[1]}` : `image`;

  const result = { uri, name: filename, type };

  return result;
};
