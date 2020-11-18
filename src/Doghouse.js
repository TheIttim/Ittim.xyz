import React from "react";
import { Helmet } from "react-helmet";

export default class Doghouse extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Mogul Development | Doghouse</title>
          <meta name="title" content="Mogul Development | Doghouse" />
          <meta
            name="description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://moguldevs.xyz/doghouse" />
          <meta property="og:title" content="Mogul Development | Doghouse" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="og:image" content="/Profile_Picture.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://moguldevs.xyz/doghouse"
          />
          <meta
            property="twitter:title"
            content="Mogul Development | Doghouse"
          />
          <meta
            property="twitter:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
          <meta property="twitter:image" content="/Profile_Picture.png" />
        </Helmet>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Doghouse
          </h3>
          <br />
          <p>
            Know a lot about dog breeds or want to learn more? <br />
            Use this bot to generate a picture of a dog and then respond with
            the breed that is in the picture. If you are correct, you'll earn
            some money! If not, try again! Doghouse is a{" "}
            <a
              href="https://bit.ly/2Oi0QaZ"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discord Verified
            </a>{" "}
            bot, so you can trust it with the minimal amount of data it
            collects; and Of course, you can vote on{" "}
            <a
              href="https://top.gg/bot/684871736797429777/vote"
              target="_blank"
              rel="noopener noreferrer"
            >
              Top.gg
            </a>{" "}
            for Doghouse to earn some cash!
          </p>
          <hr />

          <h4>
            <b>Commands</b>
          </h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Command</th>
                <th scope="col">Alias(es)</th>
                <th scope="col">Category</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Adopt</th>
                <td>a</td>
                <td>Pet</td>
                <td>
                  Adopt a dog from the shelter! They have three to choose from,
                  so come back later if they aren't the breed you want.
                </td>
              </tr>
              <tr>
                <th scope="col">Balance</th>
                <td>b, bal</td>
                <td>Statistics</td>
                <td>
                  Each time you answer correctly, you earn some money. How much
                  do you have?
                </td>
              </tr>
              <tr>
                <th scope="col">Bet</th>
                <td>None</td>
                <td>Events</td>
                <td>
                  Bet on the outcome of a dog race for a chance to get your
                  money back plus more!
                </td>
              </tr>
              <tr>
                <th scope="col">Cooldowns</th>
                <td>cd, cds, cooldown</td>
                <td>Statistics</td>
                <td>Shows you all of your cooldowns for commands.</td>
              </tr>
              <tr>
                <th scope="col">Delete</th>
                <td>None</td>
                <td>Information</td>
                <td>
                  Allows you to delete all of your information from the bot and
                  cause you to start over.
                </td>
              </tr>
              <tr>
                <th scope="col">Documentation</th>
                <td>website, docs</td>
                <td>Information</td>
                <td>Links you to the bot's github documentation.</td>
              </tr>
              <tr>
                <th scope="col">Dog</th>
                <td>None</td>
                <td>Pet</td>
                <td>See your currently adopted dog and it's current needs.</td>
              </tr>
              <tr>
                <th scope="col">Drink</th>
                <td>None</td>
                <td>Dog</td>
                <td>Command your dog to drink so they can regain thirst.</td>
              </tr>
              <tr>
                <th scope="col">Eat</th>
                <td>None</td>
                <td>Dog</td>
                <td>Command your dog to eat so they can regain hunger.</td>
              </tr>
              <tr>
                <th scope="col">Guess</th>
                <td>g</td>
                <td>Game</td>
                <td>
                  The bot will send an image of a dog, then you need to respond
                  in the same channel with the breed of dog that is displayed.
                </td>
              </tr>
              <tr>
                <th scope="col">Inventory</th>
                <td>inv, i</td>
                <td>Statistics</td>
                <td>
                  See what items you have already purchased from the shop.
                </td>
              </tr>
              <tr>
                <th scope="col">Nickname</th>
                <td>nn</td>
                <td>Pet</td>
                <td>Change the nickname of your currently adopted dog.</td>
              </tr>
              <tr>
                <th scope="col">Pay</th>
                <td>give</td>
                <td>Statistics</td>
                <td>Want to give a friend some cash? You can do that!</td>
              </tr>
              <tr>
                <th scope="col">Prefix</th>
                <td>setprefix</td>
                <td>Information</td>
                <td>
                  Allows server admins to change the prefix of the server.
                </td>
              </tr>
              <tr>
                <th scope="col">Profile</th>
                <td>p</td>
                <td>Statistics</td>
                <td>
                  Check your statistics! How many have you gotten correct or
                  incorrect? Also displays the percentage of times you've been
                  right.
                </td>
              </tr>
              <tr>
                <th scope="col">Shop</th>
                <td>None</td>
                <td>Events</td>
                <td>Purchase items to take care of your dog.</td>
              </tr>
              <tr>
                <th scope="col">Sleep</th>
                <td>None</td>
                <td>Dog</td>
                <td>Command your dog to sleep to regain energy.</td>
              </tr>
              <tr>
                <th scope="col">Stats</th>
                <td>None</td>
                <td>Information</td>
                <td>Shows the stats of the bot.</td>
              </tr>
              <tr>
                <th scope="col">Train</th>
                <td>None</td>
                <td>Dog</td>
                <td>Train your dog to listen to your commands.</td>
              </tr>
              <tr>
                <th scope="col">Vet</th>
                <td>None</td>
                <td>Events</td>
                <td>
                  Take your dog to the vet to regain their hunger, thirst, and
                  energy if they will not listen to your commands.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
