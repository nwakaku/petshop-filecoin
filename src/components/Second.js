import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Web3Storage } from "web3.storage";
import videos from "../videos/Lion.mp4";
import { Link  } from "react-router-dom";

// const client = new Web3Storage({
//   token:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE1ODA4MDYxNTcsIm5hbWUiOiJoYWNrYXRob24ifQ.dUoB7ul5STVdpTnRb_fy-s6ihD6hNUJ2qDevhE2Kk0A",
// });

function Second({ dataUrl }) {
//   const [fileUrl, setFileUrl] = useState([]);
  const [imageSrc, setImageSrc] = useState();
  const [hashes, setHashes] = useState([]);
  // const [nuxt, setNuxt] = useState();
  const [popUp, setPopUp] = useState(true);

  React.useEffect(() => {
    axios.get(`http://${dataUrl}`).then((response) => {
      setHashes(response.data);
    });
  }, [dataUrl]);

  

  // useEffect(() => {
  //   fetch(`http://${dataUrl}`)
  //   .then(res => res.json())
  //   .then((data) => {
  //     setHashes(data);
  //     console.log(data);
  //   })
  //   .catch(console.log("error"));
  // }
  // , [dataUrl])
  


  // useEffect(() => {
  //   setNuxt(hashes);
  //   console.log(nuxt);
  // }, [hashes]);

//   async function savePlayList() {
//     // const uploadNames = [];
//     // for await (const item of client.list({ maxResults: 20 })) {
//     //   uploadNames.push(item.cid);
//     //   console.log(uploadNames);
//     // }
//     const jsonType = JSON.stringify(fileUrl);
//     console.log(jsonType);
//     const file = new File([jsonType], { type : 'application/json' });
//     const onStoredChunk = (chunkSize) =>
//       console.log(`stored chunk of ${chunkSize} bytes`);
//     const cid = await client.put([file], { onStoredChunk });
//     const info = await client.status(cid); // Promise<Status | undefined>

//     // Fetch and verify files from web3.storage
//     const res = await client.get(cid); // Promise<Web3Response | null>
//     const files = await res.files(); // Promise<Web3File[]>
//     // setFileUrl(prev => [...prev, files ]);
//     // console.log(files);
//     for (const file of files) {
//       setHashes((prev) => [...prev, file.cid]);
//       // const url = `https://ipfs.io/ipfs/${file.cid}`;
//       // setFileUrl((prev) => [...prev, url]);
//       console.log(`${file.cid} ${file.name} ${file.size}`);
//       // console.log(fileUrl);
//     }
//   }

  // async function savePlayList() {
  //   if (nuxt.length !== 0) {
  //     console.log("startup");
  //     console.log(nuxt);
  //     const matic = nuxt;
  //     const onStoredChunk = (chunkSize) =>
  //       console.log(`stored chunk of ${chunkSize} bytes`);
  //     const cid = await client.put(matic, { onStoredChunk });
  //     const info = await client.status(cid); // Promise<Status | undefined>

  //     // Fetch and verify files from web3.storage
  //     const res = await client.get(cid); // Promise<Web3Response | null>
  //     const files = await res.files(); // Promise<Web3File[]>
  //     // setFileUrl(prev => [...prev, files ]);
  //     console.log(files);
  //     for (const file of files) {
  //       // const url = `https://ipfs.io/ipfs/${file.cid}`;
  //       // setFileUrl((prev) => [...prev, url]);
  //       console.log(`${file.cid} ${file.name} ${file.size}`);
  //       // console.log(fileUrl);
  //     }
  //   } else {
  //     console.log("sir nothing id uploaded here");
  //     //   alert("empty playlist");
  //   }
  // }

  // Proceed further
//   async function onChange(someFile) {
//     const onStoredChunk = (chunkSize) =>
//       console.log(`stored chunk of ${chunkSize} bytes`);
//     const cid = await client.put([someFile], {
//       name: "my files",
//       maxRetries: 3,
//       onStoredChunk,
//     });
//     const info = await client.status(cid); // Promise<Status | undefined>

//     // Fetch and verify files from web3.storage
//     const res = await client.get(cid); // Promise<Web3Response | null>
//     const files = await res.files(); // Promise<Web3File[]>
//     // setFileUrl(prev => [...prev, files ]);
//     // console.log(files);
//     for (const file of files) {
//       // setHashes((prev) => [...prev, file.cid]);
//       const url = `https://ipfs.io/ipfs/${file.cid}`;
//       setFileUrl((prev) => [...prev, url]);
//       console.log(`${file.cid} ${file.name} ${file.size}`);
//       // console.log(fileUrl);
//     }
//   }

  return (
    <div className="App">
      <div className={ `${popUp ? 'popup' : 'popup active'}`} id="popup-1">
        <div className="overlay"></div>
        <div className="content">
          <div 
            className="close-btn" 
            onClick={() => {setPopUp(!popUp);setHashes('');}}>
            &times;
          </div>
          <h1>Hash Phrase</h1>
          <p>{`${ hashes }`}</p>
        </div>
      </div>



      <div className="starter">
        <h1 className="widget">ShortvideoS</h1>
        <h3 className="widget"><Link to='/'>Login</Link></h3>
      </div>

      <div className="main">
        
      </div>

      {/* <div className="main">
        <Formik
          initialValues={{ video: "" }}
          onSubmit={(values, {resetForm}) => {
            onChange(values.video);
            console.log(values);
            resetForm({ values: "" });
          }}
        >
          {(formProps) => (
            <Form>
              <div className="nameSake">
                <input
                  className="video_files"
                  type="file"
                  onChange={(e) =>
                    formProps.setFieldValue("video", e.target.files[0])
                  }
                />
                <button className="video_submit" type="submit">
                  Upload
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div> */}

      <div className="videoSomething">
        <div className="container">
          <div className="main-video">
            <div className="video">
              {imageSrc ? (
                <video src={imageSrc} controls autoPlay />
              ) : (
                <video src={videos} controls loop autoPlay />
              )}

              <h3 className="title">something nice</h3>
            </div>
          </div>

          {/* side videos */}
          <div className="video-list">
            {hashes.length !== 0 ? (
              hashes.map((url, index) => (
                <div
                  className="vid"
                  key={index}
                  onClick={() => setImageSrc(url)}
                >
                  <video src={url} autoPlay />
                  <h3 className="title">something nice</h3>
                </div>
              ))
            ) : (
              <h3>Please wait while videos load</h3>
            )}
          </div>
        </div>
      </div>

      {/* <footer className="footer">
        <button className="video_submit" onClick={() => {savePlayList();setPopUp(!popUp)}}>
          save playlist
        </button>
      </footer> */}
    </div>
  );
}

export default Second;
