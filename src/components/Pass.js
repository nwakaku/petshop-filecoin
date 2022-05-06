import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Web3Storage } from "web3.storage";
import "./pass.css";

const client = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkyQmMzYmEyNEMwNzIyZUZkODg5NmIzOGQxYzI5ZWE0RUFiMjdiMjkiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NTE1ODA4MDYxNTcsIm5hbWUiOiJoYWNrYXRob24ifQ.dUoB7ul5STVdpTnRb_fy-s6ihD6hNUJ2qDevhE2Kk0A",
});

function Pass({dataUrl, setDataUrl}) {
  // const [dataUrl, setDataUrl] = useState();
  let navigate = useNavigate();


  

  async function firstForm(someText) {
    const res = await client.get(someText);
    const files = await res.files();

    // console.log(files);

    for (const file of files) {
      const url = `${file.cid}.ipfs.dweb.link`;
      setDataUrl(url);
      console.log(url)
      console.log(`${file.cid} ${file.name} ${file.size}`);
      // console.log(fileUrl);
    }

    console.log(dataUrl);
  }

  return (
    <div className="passe">
      {/* Wisdom Chris */}
      {/* <Link to="/videos">Expenses</Link> */}
      <div className="wrapper">
        <div className="title-text">
          <div className="title login">View playlist</div>
          {/* <div className="title signup">Signup Form</div> */}
        </div>
        <div className="form-container">
          {/* <div className="slide-controls">
            <input type="radio" name="slide" id="login" checked />
            <input type="radio" name="slide" id="signup" />
            <label for="login" className="slide login">
              Login
            </label>
            <label for="signup" className="slide signup">
              Signup
            </label>
            <div className="slider-tab"></div>
          </div> */}
          <div className="form-inner">
            <Formik 
              initialValues={{ hash: "" }}
              onSubmit={(values) => {
                firstForm(values.hash);
                navigate(`second`);

              }}>
                {(formProps) => (
                    <Form action="#" className="login">
                    <div className="field">
                      <input 
                        type="text"
                        onChange={(e) => {
                          formProps.setFieldValue("hash", e.target.value);
                        }
                          
                        }
                        placeholder="Paste Hash phrase" 
                        required />
                    </div>
                    {/* <div className="field">
                      <input type="password" placeholder="Password" required />
                    </div> */}
                    <div className="pass-link">
                      <Link to='/videos'>Create New Playlist?</Link>
                    </div>
                    <div className="field btn">
                      <div className="btn-layer"></div>
                      <input type="submit" value="Login" />
                    </div>
                    {/* <div className="signup-link">
                      Not a member? <a href="">Signup now</a>
                    </div> */}
                  </Form>
                )}

            </Formik>
            
            <form action="#" className="signup">
              <div className="field">
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className="field">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="field">
                <input
                  type="password"
                  placeholder="Confirm password"
                  required
                />
              </div>
              <div className="field btn">
                <div className="btn-layer"></div>
                <input type="submit" value="Signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pass;
