import React, { useState } from 'react'
import './fileitem.css'
import { faFileAlt, faSpinner, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function FileItem({ file, deleteFile }) {

    return (
        <li className='file-item' key={file.name}>
            <FontAwesomeIcon icon={faFileAlt} />
            <p>{file.name}</p>
            <p>size: {file.size / 1000000} MB</p>
            <div className="actions">
                {file.isUploading &&
                    <FontAwesomeIcon icon={faSpinner} className='fa-spin'
                    />
                }
                {!file.isUploading &&
                    <FontAwesomeIcon icon={faTrash}
                        onClick={() => deleteFile(file.name)}
                    />
                }
            </div>
        </li>
    )
}

export default FileItem