import React, { useRef, memo } from 'react';
import fileUploaderConfig from '../../utils/fileUploaderConfig';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import FilePondPluginFilePoster from 'filepond-plugin-file-poster';
import FilePondPluginFileValidateSize from 'filepond-plugin-file-validate-size';
import FilePondPluginImageValidateSize from 'filepond-plugin-image-validate-size';
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';

registerPlugin(
  FilePondPluginImageExifOrientation,
  FilePondPluginImagePreview,
  FilePondPluginFilePoster,
  FilePondPluginFileValidateSize,
  FilePondPluginImageValidateSize,
  FilePondPluginFileValidateType
);

function FileUploader(props) {
  let filePondRef = useRef(null);

  return (
    <FilePond
      ref={(ref) => (filePondRef = ref)}
      {...props.customConfig}
      {...fileUploaderConfig}
    />
  );
}

export default memo(FileUploader);
