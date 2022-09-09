import React from 'react';
import upload from '../Images/upload.svg';

const Upload = () => {
    return (
        <div className='cont shadow-sm p-3 mb-5 bg-body rounded'>
            <p className='text-secondary text-center'> Drag & drop your file here</p>
            <div className=' d-flex justify-content-center pb-3'>
                <div className='drop-file-input'>
                    <div className='drop-file-level'>
                        <img className="img" src={upload} alt='upload' />
                    </div>
                    <input type='file' value='' />
                </div>
            </div>
           <div className='d-flex justify-content-center'>
           <button className='btn btn-outline-warning btn-lg mt-2 mb-5 '>Upload</button>
           </div>
        </div>
    );
};

export default Upload;