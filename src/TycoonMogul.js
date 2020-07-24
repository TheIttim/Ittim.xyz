import React from "react";
import MetaTags from "react-meta-tags";

export default class TycoonMogul extends React.Component {
  render() {
    return (
      <div>
        <MetaTags>
          <title>Ittim | TycoonMogul</title>
          <link rel="canonical" href="https://www.ittim.xyz/tycoonmogul" />
          <meta property="og:title" content="Ittim | TycoonMogul" />
          <meta property="og:url" content="https://ittim.xyz/tycoonmogul" />
          <meta property="og:image" content="https://ittim.xyz/TM_icon.png" />
          <meta
            property="og:description"
            content="Welcome to Ittim.xyz, the website for all of Ittim's projects like TycoonMogul, and his digitalized list of educations, awards, & certifications!"
          />
        </MetaTags>
        <div className="container text-center">
          <h3 className="title" style={{ marginTop: "2%" }}>
            TycoonMogul
          </h3>

          <div className="row">
            <div className="col-md-6 col-xs-12">
              <a
                href="https://discord.boats/bot/519954424270028811"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://discord.boats/api/widget/519954424270028811"
                  alt="Discord.Boats Widget"
                  className="widget"
                />
              </a>
            </div>

            <div className="col-md-6 col-xs-12">
              <a
                href="https://top.gg/bot/519954424270028811"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://top.gg/api/widget/519954424270028811.svg"
                  alt="Top.gg widget"
                  className="widget"
                />
              </a>
            </div>
          </div>
          <br />
          <p>
            TycoonMogul is a Discord bot created with the help of friends. The premise is like a
            Tycoon game, such as{" "}
            <a
              href="https://store.steampowered.com/app/346900/AdVenture_Capitalist/"
              target="_blank"
              rel="noopener noreferrer"
            >
              AdVenture Capitalist
            </a>
            : Create a Tycoon, earn money, and upgrade the Tycoon with that money. You can even
            create alliances with other Tycoon owners. Oh, and there's achievements! Still not
            convinced? TycoonMogul is a{" "}
            <a href="https://bit.ly/2Oi0QaZ" target="_blank" rel="noopener noreferrer">
              Discord Verified
            </a>{" "}
            bot, so you can trust it with the minimal amount of data it collects! We are also
            working on certifying TycoonMogul on every Discord Bot List we can find, which will
            allow us to show him off even more! We are improving and certifying TycoonMogul every
            day!
          </p>
          <hr />
          <h4>Tutorial</h4>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/wqK1Q8-M9C8"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
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
          <hr />
          <h4>
            <b>Achievements</b>
          </h4>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Achievement</th>
                <th>Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col">Getting Started</th>
                <td>Easy</td>
                <td>Create a Tycoon</td>
              </tr>
              <tr>
                <th scope="col">Unified</th>
                <td>Easy</td>
                <td>Create or join an alliance</td>
              </tr>
              <tr>
                <th scope="col">Got Levels?</th>
                <td>Easy</td>
                <td>Talk your way to user level 10</td>
              </tr>
              <tr>
                <th scope="col">6 Figures</th>
                <td>Medium</td>
                <td>Collect a Total of $100,000 from your Tycoon</td>
              </tr>
              <tr>
                <th scope="col">Level Up</th>
                <td>Medium</td>
                <td>Improve your Tycoon to level 2</td>
              </tr>
              <tr>
                <th scope="col">Stronger Together</th>
                <td>Medium</td>
                <td>Have 5 Members in your Alliance</td>
              </tr>
              <tr>
                <th scope="col">Levels for Days</th>
                <td>Medium</td>
                <td>Talk your way to user level 20</td>
              </tr>
              <tr>
                <th scope="col">Gold Lined Pockets</th>
                <td>Medium</td>
                <td>Have $100,000 in your account</td>
              </tr>
              <tr>
                <th scope="col">Good Luck</th>
                <td>Medium</td>
                <td>Win $100,000 gambling!</td>
              </tr>
              <tr>
                <th scope="col">Bad Luck</th>
                <td>Medium</td>
                <td>Lose $100,000 gambling!</td>
              </tr>
              <tr>
                <th scope="col">Me Millionth Dollar</th>
                <td>Hard</td>
                <td>Collect a Total of $1,000,000 from your Tycoon</td>
              </tr>
              <tr>
                <th scope="col">Moving on Up</th>
                <td>Hard</td>
                <td>Get your Tycoon to level 10</td>
              </tr>
              <tr>
                <th scope="col">Strength in Numbers</th>
                <td>Hard</td>
                <td>Have 10 Members in your Alliance</td>
              </tr>
              <tr>
                <th scope="col">Golden Man</th>
                <td>Hard</td>
                <td>Have $1,000,000 in your account</td>
              </tr>
              <tr>
                <th scope="col">Gambling Man</th>
                <td>Hard</td>
                <td>Gamble $100,000 in hopes of winning it big!</td>
              </tr>
              <tr>
                <th scope="col">Completionist</th>
                <td>Extreme</td>
                <td>Awarded for obtaining all achievements!</td>
              </tr>
              <tr>
                <th scope="col">Grandmaster Leveling</th>
                <td>Extreme</td>
                <td>Awarded for talking your way to level 50!</td>
              </tr>
              <tr>
                <th scope="col">Strongest Numbers</th>
                <td>Extreme</td>
                <td>Awarded for having 50 members in your Alliance!</td>
              </tr>
            </tbody>
          </table>
          <div className="container">
            <i>Thank You to Puyodead1#0001 for all the help with TycoonMogul v2!</i>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
