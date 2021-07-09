import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { useFormContext } from 'react-hook-form';
import { img, thumb, thumbInner, thumbsContainer } from './CrPrevImagesStyles';

export const CrDropzonePrevImages = () => {
  const { setValue } = useFormContext();
  const [files, setFiles] = useState([]);
  const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      setValue('prevImages', acceptedFiles)
    }
  });
  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);
  return (
    <div>
      <div {...getRootProps({className: 'bg-secondary rounded-md p-3 cursor-pointer'})}>
        <input {...getInputProps()} />
        <p className="font-bold text-center text-quinary">Arrastra y suelta las imágenes aqui, o haz click para seleccionar.</p>
        <div style={thumbsContainer}>
          {
            files.map(file => (
              <div style={thumb} key={file.name}>
                <div style={thumbInner}>
                  <img
                    alt={file.name}
                    src={file.preview}
                    style={img}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
