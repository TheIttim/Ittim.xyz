import React from "react";
import { Helmet } from "react-helmet";

export default class Home extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | Homepage</title>
          <link rel="canonical" href="https://www.ittim.xyz/" />
          <meta property="og:title" content="Ittim | Homepage" />
          <meta property="og:url" content="https://ittim.xyz/" />
          <meta property="og:image" content="https://ittim.xyz/Profile_Picture.png" />
        </Helmet>
        <center>
          <main>
            <h1 className="title" style={{ marginTop: "2%" }}>
              The Wonderful World of Ittim's Projects
            </h1>
            <p>
              I made this website to showcase all of the projects I am working on, or have worked
              on. I found that this would be a lot easier and more effecient than making a different
              site per project, and would also increase the likelyhood of projects getting seen.
              Feel free to look around, and if you want to contact me, or follow anything, or maybe
              even donate, just check the footer at the bottom of each page!
            </p>
            <br />
            <h2 className="subtitle">
              <b>About Me</b>
            </h2>
            <p>
              My name is Ethan, though I am known on the internet as Ittim. I am a full-time college
              student at the community college which I also work at part time. My actual title at
              said college is Prometric Test Center Administrator, which also means that I must
              answer to not only the college, but also to Prometric, an international company that
              specializes in secure testing for all kinds of stuff from mechanic certifications to
              doctor specializations and a whole lot more. I am also a Type 1 Diabetic and have been
              so since early 2013. I usually spend my free time playing video games, recording more
              podcast episodes, goofing off on Discord, or just hanging out in the Student Life
              department at school. With all that out of the way, I have made a table of all the
              pertinent computer hardware/software I could think of since most of my projects are
              done using a computer.
            </p>
            <br />
            <h2 className="subtitle">
              <b>PC Specifications</b>
            </h2>
            <table
              className="table is-bordered is-striped is-narrow is-hoverable"
              style={{ width: "60%" }}
              cellPadding="0"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th>Component</th>
                  <th>Category</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Operating System</td>
                  <td>Software</td>
                  <td>Windows 10 Education</td>
                </tr>
                <tr>
                  <td>Audio Recorder</td>
                  <td>Software</td>
                  <td>Audacity</td>
                </tr>
                <tr>
                  <td>Video Editor</td>
                  <td>Software</td>
                  <td>Windows Video Editor</td>
                </tr>
                <tr>
                  <td>Primary Monitor</td>
                  <td>Peripheral</td>
                  <td>HP 24M</td>
                </tr>
                <tr>
                  <td>Secondary Monitor</td>
                  <td>Peripheral</td>
                  <td>HP 24W</td>
                </tr>
                <tr>
                  <td>Webcam</td>
                  <td>Peripheral</td>
                  <td>Logitech C615</td>
                </tr>
                <tr>
                  <td>Keyboard</td>
                  <td>Peripheral</td>
                  <td>Logitech G513</td>
                </tr>
                <tr>
                  <td>Mouse</td>
                  <td>Peripheral</td>
                  <td>Logitech G402</td>
                </tr>
                <tr>
                  <td>Mousepad</td>
                  <td>Peripheral</td>
                  <td>Logitech G240</td>
                </tr>
                <tr>
                  <td>Speakers</td>
                  <td>Peripheral</td>
                  <td>Logitech Z130</td>
                </tr>
                <tr>
                  <td>Headset</td>
                  <td>Peripheral</td>
                  <td>RIG 700 HX Wireless Dolby Atmos Camo</td>
                </tr>
                <tr>
                  <td>Microphone</td>
                  <td>Peripheral</td>
                  <td>HyperX QuadCast</td>
                </tr>
                <tr>
                  <td>Case</td>
                  <td>Hardware</td>
                  <td>Cooler Master MasterBox Q300L MATx Tower</td>
                </tr>
                <tr>
                  <td>Video Card</td>
                  <td>Hardware</td>
                  <td>GeForce GTX 1050 2GB</td>
                </tr>
                <tr>
                  <td>Motherboard</td>
                  <td>Hardware</td>
                  <td>GigaByte H110M-S2H</td>
                </tr>
                <tr>
                  <td>Processor</td>
                  <td>Hardware</td>
                  <td>Intel Core i7-6700 @ 3.40Ghz</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>Hardware</td>
                  <td>HyperX DDR4 2x8GB @ 2400Mhz</td>
                </tr>
                <tr>
                  <td>Power Supply</td>
                  <td>Hardware</td>
                  <td>Corsair CX650M</td>
                </tr>
              </tbody>
            </table>
          </main>
        </center>
      </div>
    );
  }
}
