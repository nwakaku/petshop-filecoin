// import './App.css'


import { useState } from 'react'
import { create } from 'ipfs-http-client';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const client = create('https://ipfs.infura.io:5001/api/v0')

function App() {
  const [fileUrl, updateFileUrl] = useState([]);


  async function onChange(someFile) {
    try {
      const added = await client.add(someFile)
      const url = `https://ipfs.infura.io/ipfs/${added.path}`
      updateFileUrl(prev => [...prev, url ]);
    } catch (error) {
      console.log('Error uploading file: ', error)
    }  


  }
  return (
    <div className="App">
      <h1>IPFS Example</h1>

      <div className="main">
      <Formik
        initialValues={{ photo: "" }}
        onSubmit={(values) => {onChange(values.photo);console.log(values)}}>
          {(formProps) => (
            <Form>
              <input type="file" 
              onChange={(e) => formProps.setFieldValue("photo", e.target.files[0])} />
              <button type="submit">Upload</button>
            </Form>)}
        </Formik>
        </div>

        <div className="display">
          {fileUrl.length !== 0 ?
        fileUrl.map (url => <img id={url.index} src={url} alt=""/>)
        : <h3>Upload Images</h3>}  
        </div>
      
    </div>
  );
}

export default App




// // import { useState } from "react";
// // import { create } from "ipfs-http-client";

// // const client = create(["https://ipfs.infura.io:5001/api/v0"]);

// import { create } from 'ipfs-http-client';

// const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

// /* upload the file */
// const added = await client.add(file)

// /* or a string */
// const added = await client.add('hello world')

// const App = () => {
//   const [file, setFile] = useState(null);
//   const [urlArr, setUrlArr] = useState([]);

//   // const retrieveFile = (e) => {
//   //   const data = e.target.files[0];
//   //   const reader = new window.FileReader();
//   //   reader.readAsArrayBuffer(data);

//   //   reader.onloadend = () => {
//       // setFile(Buffer(reader.result));
//   //   };

//   //   e.preventDefault();
//   // };
//   const retrieveFile = (e) => {
//     const data = e.target.files[0];
//     // const reader = new window.FileReader();
//     // reader.readAsArrayBuffer(data);
//     // reader.onloadend = () => {
//     //   console.log("Buffer data: ", Buffer(reader.result));
//     // }
//     const reader = new FileReader();
// reader.readAsArrayBuffer(data);
// reader.onload = function(e){
//     const arrayBuffer = e.target.result;
//     const bytes = new Uint8Array(arrayBuffer);
//     setFile(bytes);

//     console.log(bytes);
// }

//     e.preventDefault();  
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const created = await client.add(file);
//       const url = `https://ipfs.infura.io/ipfs/${created.path}`;
//       console.log(url)
//       // setUrlArr((prev) => [...prev, url]);
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">IPFS Project</header>

//       <div className="main">
//         <form >
//           <input type="file" onChange={retrieveFile} />
//           <button type="submit" className="button" onClick={handleSubmit}>Submit</button>
//         </form>
//       </div>

//       <div className="display">
//         {urlArr.length !== 0
//           ? urlArr.map((el) => <img src={el} alt="nfts" />)
//           : <h3>Upload data</h3>}
//       </div>
//     </div>
//   );
// };

// export default App;