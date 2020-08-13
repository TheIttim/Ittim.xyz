import React from "react";
import MetaTags from "react-meta-tags";

export default class Doghouse extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Ittim | Doghouse</title>
          <link rel="canonical" href="https://www.moguldevs.xyz/doghouse" />
          <meta property="og:title" content="Ittim | Doghouse" />
          <meta property="og:url" content="https://moguldevs.xyz/doghouse" />
          <meta property="og:image" content="https://moguldevs.xyz/TM_icon.png" />
          <meta
            property="og:description"
            content="Welcome to moguldevs.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            Doghouse
          </h3>
          <br />
          <p>Know a lot about dog breeds or want to learn more? <br />
              Use this bot to generate a picture of a dog and then respond with the breed that is in the picture. If you are correct, you'll earn some money! If not, try again!
            Doghouse is a{" "}
            <a href="https://bit.ly/2Oi0QaZ" target="_blank" rel="noopener noreferrer">
              Discord Verified
            </a>{" "}
            bot, so you can trust it with the minimal amount of data it collects; and Of course, you can vote on{" "}<a href="https://top.gg/bot/684871736797429777/vote" target="_blank" rel="noopener noreferrer">
              Top.gg
            </a>{" "} for Doghouse to earn some cash!
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
                <th scope="col">Achievements</th>
                <td>Awards, Trophies, & Badges</td>
                <td>General</td>
                <td>Lists Achievements by category</td>
              </tr>
              <tr>
                <th scope="col">Alliance</th>
                <td>None</td>
                <td>Alliances</td>
                <td>
                  Displays information about user’s alliance, if they have one, otherwise notifies
                  user to join alliance first
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceCreate</th>
                <td>ACreate</td>
                <td>Alliances</td>
                <td>Takes user through steps of creating an alliance</td>
              </tr>
              <tr>
                <th scope="col">AllianceDelete</th>
                <td>ADelete</td>
                <td>Alliances</td>
                <td>Allows Alliance Leader to delete the alliance</td>
              </tr>
              <tr>
                <th scope="col">AllianceDemote</th>
                <td>ADemote</td>
                <td>Alliances</td>
                <td>
                  Allows Alliance Leader OR Officers to Demote Members (Leader {">"} Officer
                  {">"} Deputy {">"} Member)
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceDescription</th>
                <td>ADesc & ADescription</td>
                <td>Alliances</td>
                <td>Allows Alliance Leader to set description of alliance</td>
              </tr>
              <tr>
                <th scope="col">AllianceDonate</th>
                <td>ADonate</td>
                <td>Alliances</td>
                <td>
                  Allows Alliance Members to donate to their alliance's funds, allowing the alliance
                  to be leveled up
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceInvite</th>
                <td>AInvite & ARecruit</td>
                <td>Alliances</td>
                <td>
                  Allows Alliance Leaders, Officers, or Deputies to invite potential new members to
                  the alliance
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceKick</th>
                <td>AKick</td>
                <td>Alliances</td>
                <td>Allows Alliance Leaders or Officers to kick members from their alliance</td>
              </tr>
              <tr>
                <th scope="col">AllianceLeave</th>
                <td>ALeave</td>
                <td>Alliances</td>
                <td>Leaves the user's current alliance</td>
              </tr>
              <tr>
                <th scope="col">AllianceLevelUp</th>
                <td>ALU</td>
                <td>Alliances</td>
                <td>
                  Allows Alliance Leader OR Officers to level up the alliance, increasing the member
                  cap by 5, and the tycoon income generation of each member by X%
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceMembers</th>
                <td>AMembers</td>
                <td>Alliances</td>
                <td>Lists all members of your alliance</td>
              </tr>
              <tr>
                <th scope="col">AlliancePromote</th>
                <td>APromote</td>
                <td>Alliances</td>
                <td>
                  Allows Alliance Leader OR Officer to Promote Members (Member {">"} Deputy
                  {">"} Officer {">"} Leader)
                </td>
              </tr>
              <tr>
                <th scope="col">AllianceRename</th>
                <td>ARename</td>
                <td>Alliances</td>
                <td>Allows alliance leaders to rename their alliance</td>
              </tr>
              <tr>
                <th scope="col">Collect</th>
                <td>None</td>
                <td>Economy</td>
                <td>Allows Users to collect income from their Tycoons (30-minute cooldown)</td>
              </tr>
              <tr>
                <th scope="col">Cooldown</th>
                <td>CD, CDs, & Cooldowns</td>
                <td>General</td>
                <td>Shows all currently running cooldowns on user who ran command</td>
              </tr>
              <tr>
                <th scope="col">Daily</th>
                <td>None</td>
                <td>Economy</td>
                <td>Lets user collect their daily reward base on Tycoon Level</td>
              </tr>
              <tr>
                <th scope="col">Disable</th>
                <td>None</td>
                <td>General</td>
                <td>
                  Allows users to force TycoonMogul to stop collecting/generating data on them, also
                  wipes all currently stored user data.
                </td>
              </tr>
              <tr>
                <th scope="col">Enable</th>
                <td>None</td>
                <td>General</td>
                <td>Allows users to re-enable data collection/generation by TycoonMogul</td>
              </tr>
              <tr>
                <th scope="col">Flip</th>
                <td>None</td>
                <td>Economy</td>
                <td>Allows user to bet on coin flip in order to try to earn money</td>
              </tr>
              <tr>
                <th scope="col">Help</th>
                <td>CMDs & Commands</td>
                <td>General</td>
                <td>Shows all commands descriptions of what they do</td>
              </tr>
              <tr>
                <th scope="col">Invite</th>
                <td>None</td>
                <td>General</td>
                <td>Provides link to invite TM to users’ server</td>
              </tr>
              <tr>
                <th scope="col">Leaderboard</th>
                <td>LB</td>
                <td>General</td>
                <td>Allows users to display different leaderboards.</td>
              </tr>
              <tr>
                <th scope="col">Pay</th>
                <td>Give</td>
                <td>Economy</td>
                <td>Allows one user to send money to another</td>
              </tr>
              <tr>
                <th scope="col">Ping</th>
                <td>MS</td>
                <td>General</td>
                <td>Displays latencies</td>
              </tr>
              <tr>
                <th scope="col">Profile</th>
                <td>UserInfo</td>
                <td>General</td>
                <td>Displays users TM profile</td>
              </tr>
              <tr>
                <th scope="col">RequestDelete</th>
                <td>rd</td>
                <td>General</td>
                <td>Allows users to request deletion of all of their TycoonMogul data</td>
              </tr>
              <tr>
                <th scope="col">SetPrefix</th>
                <td>None</td>
                <td>General</td>
                <td>Allows server administrators to set prefix for TM</td>
              </tr>
              <tr>
                <th scope="col">Stats</th>
                <td>botstatus, bstatus, status, & about</td>
                <td>General</td>
                <td>Shows status of TycoonMogul</td>
              </tr>
              <tr>
                <th scope="col">Support</th>
                <td>None</td>
                <td>General</td>
                <td>Displays where to get support for TM</td>
              </tr>
              <tr>
                <th scope="col">Toggle</th>
                <td>None</td>
                <td>General</td>
                <td>Allows server administrators to toggle level up messages in their server</td>
              </tr>
              <tr>
                <th scope="col">Tycoon</th>
                <td>None</td>
                <td>Tycoons</td>
                <td>Shows info about user’s Tycoon</td>
              </tr>
              <tr>
                <th scope="col">TycoonCreate</th>
                <td>TCreate</td>
                <td>Tycoons</td>
                <td>Takes user through steps to creating Tycoon</td>
              </tr>
              <tr>
                <th scope="col">TycoonDelete</th>
                <td>TDelete</td>
                <td>Tycoons</td>
                <td>Takes user through steps to deleting Tycoon</td>
              </tr>
              <tr>
                <th scope="col">TycoonLevelUp</th>
                <td>TLevelUp & TLevel</td>
                <td>Tycoons</td>
                <td>Takes user through steps to improving Tycoon</td>
              </tr>
              <tr>
                <th scope="col">TycoonRename</th>
                <td>TRename</td>
                <td>Tycoons</td>
                <td>Takes user through steps to renaming Tycoon</td>
              </tr>
              <tr>
                <th scope="col">TycoonType</th>
                <td>TType</td>
                <td>Tycoons</td>
                <td>Takes user through steps to choosing Tycoon Type</td>
              </tr>
              <tr>
                <th scope="col">Vote</th>
                <td>None</td>
                <td>General</td>
                <td>Gives the link to vote for TM</td>
              </tr>
            </tbody>
          </table>
          </div>
          </div>
    );
  }
}
