import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import FileUpload from './fileUpload/FileUpload';
import FileList from './fileList/FileList';

function App() {

  let handleChange = e => {
    console.log(e)
    var files = e.target.files;
    var filesArray = [].slice.call(files);
    filesArray.forEach(e => {
      console.log(e.name);
      console.log(e.size);
      console.log(e.type);
      console.log(e.lastModifiedDate);
    });
  };
  const [files, setFiles] = useState([
    // {
    //   name: 'myFile.pdf'
    // },
    // {
    //   name: 'myFile2.pdf'
    // }
  ])
  const removeFile = (filename) => {
    setFiles(files.filter(file => file.name !== filename))
  }
  console.log(files);
  return (
    <div className="App">
      <p className='title'>Upload File</p>
      <FileUpload files={files} setFiles={setFiles} removeFile={removeFile} />
      <FileList files={files} removeFile={removeFile} />
    </div>
  );
}

export default App;
