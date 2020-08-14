import React from "react";
import MetaTags from "react-meta-tags";

export default class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <MetaTags>
          <title>Mogul Development | Homepage</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/" />
          <meta property="og:title" content="Ittim | Homepage" />
          <meta property="og:url" content="https://moguldevs.xyz/" />
          <meta property="og:image" content="https://moguldevs.xyz/Profile_Picture.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 style={{ marginTop: "2%" }}>The Wonderful World of Ittim's Projects</h3>
          <p>
            This website is a portfolio of all current and prior projects I have worked on, making
            my project recognition more elegant.
          </p>
          <p>
            You can contact me at <a href="mailto:support@moguldevs.xyz">support@moguldevs.xyz</a>,
            send a donation via{" "}
            <a href="https://paypal.me/EthanHagan" target="_blank" rel="noopener noreferrer">
              PayPal
            </a>
            , or become a patron at{" "}
            <a href="https://www.patreon.com/Ittim" target="_blank" rel="noopener noreferrer">
              Patreon
            </a>
            !
          </p>
          <br />
          <h4>
            <b>About Me</b>
          </h4>
          <p>
            My name is Ethan, also known as Ittim! I am studying Computer Information Systems as
            part-time employee at my local community college. I'm employed as a Prometric Test
            Center Administrator. Prometric specializes in secure testing for a broad array of
            certifications from mechanics to medical. I spend my free time like most college
            students: playing video games, recording podcast episodes, goofing off with my friends
            on Discord, or chilling at the Student Life department.
          </p>
          <br />
          <h4>
            <b>PC Specifications</b>
          </h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Component</th>
                <th scope="col">Category</th>
                <th scope="col">Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Operating System</th>
                <td>Software</td>
                <td>
                  <a
                    href="https://www.microsoft.com/en-us/education/products/windows"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows 10 Education
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Audio Recorder</th>
                <td>Software</td>
                <td>
                  <a href="https://www.audacityteam.org/" target="_" rel="noopener noreferrer">
                    Audacity
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Video Recorder</th>
                <td>Software</td>
                <td>
                  <a href="https://obsproject.com/" target="_" rel="noopener noreferrer">
                    Open Broadcaster Software (OBS)
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Video Editor</th>
                <td>Software</td>
                <td>
                  <a
                    href="https://www.microsoft.com/en-us/windows/photo-movie-editor"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Windows Video Editor
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Primary Monitor</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/3etTrQI" target="_blank" rel="noopener noreferrer">
                    HP 24M
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Secondary Monitor</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/2ASYL25" target="_blank" rel="noopener noreferrer">
                    HP 24W
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Webcam</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/3gRunEB" target="_blank" rel="noopener noreferrer">
                    Logitech C615
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Keyboard</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/2ATalKL" target="_blank" rel="noopener noreferrer">
                    Logitech G513
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Mouse</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/2Ctkjmm" target="_blank" rel="noopener noreferrer">
                    Logitech G402
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Mousepad</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/3iSNrEm" target="_blank" rel="noopener noreferrer">
                    Logitech G240
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Speakers</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/2C6WO2B" target="_blank" rel="noopener noreferrer">
                    Logitech Z130
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Headset</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://bit.ly/304sPjL" target="_blank" rel="noopener noreferrer">
                    RIG 700 HX Wireless Dolby Atmos Camo
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">Microphone</th>
                <td>Peripheral</td>
                <td>
                  <a href="https://amzn.to/302eOmX" target="_blank" rel="noopener noreferrer">
                    HyperX QuadCast
                  </a>
                </td>
              </tr>
              <tr>
                <th scope="col">System Build</th>
                <td>Hardware</td>
                <td>
                  <a
                    href="https://pcpartpicker.com/user/EthanGH/saved/gBhnLk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    PCPartPicker List
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
