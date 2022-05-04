import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Web3Storage } from "web3.storage";
import videos from "./videos/Lion.mp4";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE1ODA4MDYxNTcsIm5hbWUiOiJoYWNrYXRob24ifQ.dUoB7ul5STVdpTnRb_fy-s6ihD6hNUJ2qDevhE2Kk0A",
});

function App() {
  const [fileUrl, setFileUrl] = useState([]);
  const [imageSrc, setImageSrc] = useState();

  function validateSize(someFile) {
    if (someFile.size > 5) {
      alert("File size exceeds 5 MiB");
    } else {
      // Proceed further
      async function onChange(someFile) {
        const onStoredChunk = (chunkSize) =>
          console.log(`stored chunk of ${chunkSize} bytes`);
        const cid = await client.put([someFile], { onStoredChunk });
        const info = await client.status(cid); // Promise<Status | undefined>

        // Fetch and verify files from web3.storage
        const res = await client.get(cid); // Promise<Web3Response | null>
        const files = await res.files(); // Promise<Web3File[]>
        // setFileUrl(prev => [...prev, files ]);
        console.log(files);
        for (const file of files) {
          const url = `https://ipfs.io/ipfs/${file.cid}`;
          setFileUrl((prev) => [...prev, url]);
          console.log(`${file.cid} ${file.name} ${file.size}`);
          console.log(fileUrl);
        }
      }
    }
  }

  return (
    <div className="App">
      <div className="starter">
        <h1>filecoin ShortvideoS</h1>
      </div>

      <div className="main">
        <Formik
          initialValues={{ video: "" }}
          onSubmit={(values) => {
            validateSize(values.video);
            console.log(values);
          }}
        >
          {(formProps) => (
            <Form>
              <div className="nameSake">
                <input
                  type="file"
                  onChange={(e) =>
                    formProps.setFieldValue("video", e.target.files[0])
                  }
                />
                <button type="submit">Upload</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

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
            {fileUrl.length !== 0 ? (
              fileUrl.map((url, index) => (
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
              <h3>Upload videos</h3>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
