import React from "react";
import { Helmet } from "react-helmet";

export default class TycoonMogul extends React.Component {
  render() {
    return (
      <div className="app">
        <Helmet>
          <title>Ittim | TycoonMogul</title>
          <link rel="canonical" href="https://www.ittim.xyz/#/tm" />
          <meta property="og:title" content="Ittim | TycoonMogul" />
          <meta property="og:url" content="https://ittim.xyz/#/tm" />
          <meta property="og:image" content="https://ittim.xyz/TM_icon.png" />
        </Helmet>
        <center>
          <main>
            <h1 className="title" style={{ marginTop: "2%" }}>
              TycoonMogul
            </h1>
            <div className="columns is-variable is-1">
              <div className="column is-6">
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

              <div className="column is-6">
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
            </div>
            <p>
              TycoonMogul is a Discord bot I created with the help of a friend. It was inspired by
              bots like JobsBot(which is now offline), and IdleRPG. The premise of TycoonMogul is
              just like any other Tycoon game; create a tycoon, wait for it to earn money, then use
              that money to upgrade said Tycoon. After you start your path to success, you can even
              go as far as to create an alliance with other Tycoon owners, or even marry that
              special someone. Oh, and there's achievements to be earned along the way! Below you'll
              find two tables. One listing every command, and the other listing every achievement.
              Still not convinced? Well, what if I told you TycoonMogul is a{" "}
              <a
                href="https://support.discord.com/hc/en-us/articles/360040720412-Bot-Verification-and-Data-Whitelisting#h_46b3869c-6d50-43fc-b07c-9ed7569a1160"
                rel="noopener noreferrer"
              >
                Discord Verified
              </a>{" "}
              bot, which means that it is trusted by Discord itself to never misuse the small amount
              of data that it captures! On top of that, we are working to become certified on bot
              lists that TycoonMogul is on that have such a feature. So far, TycoonMogul is in 8
              lists, with 7 websites, with 5 certification programs, and is certified in 1 of them.
              Now while this may not sound like a lot, well, that's because it isn't; but don't
              fret! We've put a hold on our applications until version 2 of TycoonMogul comes out,
              as most certification programs require us to update our code in order to share our
              server count with their website, and simply don't see any point in doing so until we
              release version 2, but when that time comes, rest assured, we will push our server
              count to all lists in an effort to be more transparent and increase our certification
              chances, thereby increasing said server count! With that addition, we will also be
              support vote rewards from as many of the lists as possible!{" "}
              <a
                href="https://discord.com/oauth2/authorize?client_id=519954424270028811&scope=bot&permissions=380096"
                rel="noopener noreferrer"
              >
                Invite
              </a>{" "}
              TycoonMogul to your server! & don't forget to vote on{" "}
              <a
                href="https://top.gg/bot/519954424270028811"
                rel="noopener noreferrer"
                target="_blank"
              >
                Top.gg
              </a>
              !
            </p>
            <hr />

            <h2 className="subtitle">
              <b>Commands</b>
            </h2>
            <table className="table is-bordered is-striped is-narrow is-hoverable">
              <caption>
                <i>
                  <b>NOTICE</b>: The following table is based on TycoonMogul <b>Version 2</b>,
                  meaning some things are different from the currently released version. <br />
                  Some categories have changed, and some commands listed below either are not
                  functioning in the current version (Version 1), or are not implemented at all
                </i>
              </caption>
              <thead>
                <tr className="thead">
                  <th>Command</th>
                  <th>Alias(es)</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Achievements</td>
                  <td>Awards, Trophies, & Badges</td>
                  <td>General</td>
                  <td>Lists Achievements by category</td>
                </tr>
                <tr>
                  <td>AdminPay</td>
                  <td>APay</td>
                  <td>Developers</td>
                  <td>Allows developers to add or subtract money from a user.</td>
                </tr>
                <tr>
                  <td>AdminXP</td>
                  <td>AXP</td>
                  <td>Developers</td>
                  <td>Allows developers to add or subtract xp from a user.</td>
                </tr>
                <tr>
                  <td>Alliance</td>
                  <td>None</td>
                  <td>Alliances</td>
                  <td>
                    Displays information about user’s alliance, if they have one, otherwise notifies
                    user to join alliance first
                  </td>
                </tr>
                <tr>
                  <td>AllianceCreate</td>
                  <td>ACreate</td>
                  <td>Alliances</td>
                  <td>Takes user through steps of creating an alliance</td>
                </tr>
                <tr>
                  <td>AllianceDelete</td>
                  <td>ADelete</td>
                  <td>Alliances</td>
                  <td>Allows Alliance Leader to delete the alliance</td>
                </tr>
                <tr>
                  <td>AllianceDemote</td>
                  <td>ADemote</td>
                  <td>Alliances</td>
                  <td>
                    Allows Alliance Leader OR Officers to Demote Members (Leader {">"} Officer
                    {">"} Deputy {">"} Member)
                  </td>
                </tr>
                <tr>
                  <td>AllianceDescription</td>
                  <td>ADesc & ADescription</td>
                  <td>Alliances</td>
                  <td>Allows Alliance Leader to set description of alliance</td>
                </tr>
                <tr>
                  <td>AllianceDonate</td>
                  <td>ADonate</td>
                  <td>Alliances</td>
                  <td>
                    Allows Alliance Members to donate to their alliance's funds, allowing the
                    alliance to be leveled up
                  </td>
                </tr>
                <tr>
                  <td>AllianceInvite</td>
                  <td>AInvite & ARecruit</td>
                  <td>Alliances</td>
                  <td>
                    Allows Alliance Leaders, Officers, or Deputies to invite potential new members
                    to the alliance
                  </td>
                </tr>
                <tr>
                  <td>AllianceKick</td>
                  <td>AKick</td>
                  <td>Alliances</td>
                  <td>Allows Alliance Leaders or Officers to kick members from their alliance</td>
                </tr>
                <tr>
                  <td>AllianceLeave</td>
                  <td>ALeave</td>
                  <td>Alliances</td>
                  <td>Leaves the user's current alliance</td>
                </tr>
                <tr>
                  <td>AllianceLevelUp</td>
                  <td>ALU</td>
                  <td>Alliances</td>
                  <td>
                    Allows Alliance Leader OR Officers to level up the alliance, increasing the
                    member cap by 5, and the tycoon income generation of each member by X%
                  </td>
                </tr>
                <tr>
                  <td>AllianceMembers</td>
                  <td>AMembers</td>
                  <td>Alliances</td>
                  <td>Lists all members of your alliance</td>
                </tr>
                <tr>
                  <td>AlliancePromote</td>
                  <td>APromote</td>
                  <td>Alliances</td>
                  <td>
                    Allows Alliance Leader OR Officer to Promote Members (Member {">"} Deputy
                    {">"} Officer {">"} Leader)
                  </td>
                </tr>
                <tr>
                  <td>AllianceRename</td>
                  <td>ARename</td>
                  <td>Alliances</td>
                  <td>Allows alliance leaders to rename their alliance</td>
                </tr>
                <tr>
                  <td>Collect</td>
                  <td>None</td>
                  <td>Economy</td>
                  <td>Allows Users to collect income from their Tycoons (30-minute cooldown)</td>
                </tr>
                <tr>
                  <td>Cooldown</td>
                  <td>CD, CDs, & Cooldowns</td>
                  <td>General</td>
                  <td>Shows all currently running cooldowns on user who ran command</td>
                </tr>
                <tr>
                  <td>Daily</td>
                  <td>None</td>
                  <td>Economy</td>
                  <td>Lets user collect their daily reward base on Tycoon Level</td>
                </tr>
                <tr>
                  <td>Delete</td>
                  <td>None</td>
                  <td>Developer</td>
                  <td>
                    Allows the developers to delete all user data for a specific user incase of bugs
                    or exploits
                  </td>
                </tr>
                <tr>
                  <td>Disable</td>
                  <td>None</td>
                  <td>General</td>
                  <td>
                    Allows users to force TycoonMogul to stop collecting/generating data on them,
                    also wipes all currently stored user data.
                  </td>
                </tr>
                <tr>
                  <td>Enable</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Allows users to re-enable data collection/generation by TycoonMogul</td>
                </tr>
                <tr>
                  <td>Eval</td>
                  <td>None</td>
                  <td>Developer</td>
                  <td>Allows Developers to evaluate code before adding it to the bot</td>
                </tr>
                <tr>
                  <td>Flip</td>
                  <td>None</td>
                  <td>Economy</td>
                  <td>Allows user to bet on coin flip in order to try to earn money</td>
                </tr>
                <tr>
                  <td>Help</td>
                  <td>CMDs & Commands</td>
                  <td>General</td>
                  <td>Shows all commands descriptions of what they do</td>
                </tr>
                <tr>
                  <td>Invite</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Provides link to invite TM to users’ server</td>
                </tr>
                <tr>
                  <td>Leaderboard</td>
                  <td>LB</td>
                  <td>General</td>
                  <td>Allows users to display different leaderboards.</td>
                </tr>
                <tr>
                  <td>Pay</td>
                  <td>Give</td>
                  <td>Economy</td>
                  <td>Allows one user to send money to another</td>
                </tr>
                <tr>
                  <td>Ping</td>
                  <td>MS</td>
                  <td>General</td>
                  <td>Displays latencies</td>
                </tr>
                <tr>
                  <td>Profile</td>
                  <td>UserInfo</td>
                  <td>General</td>
                  <td>Displays users TM profile</td>
                </tr>
                <tr>
                  <td>Reboot</td>
                  <td>Restart</td>
                  <td>None</td>
                  <td>Allows the developers to restart TycoonMogul safely</td>
                </tr>
                <tr>
                  <td>SetPrefix</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Allows server administrators to set prefix for TM</td>
                </tr>
                <tr>
                  <td>Stats</td>
                  <td>botstatus, bstatus, status, & about</td>
                  <td>General</td>
                  <td>Shows status of TycoonMogul</td>
                </tr>
                <tr>
                  <td>Support</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Displays where to get support for TM</td>
                </tr>
                <tr>
                  <td>Toggle</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Allows server administrators to toggle level up messages in their server</td>
                </tr>
                <tr>
                  <td>Tycoon</td>
                  <td>None</td>
                  <td>Tycoons</td>
                  <td>Shows info about user’s Tycoon</td>
                </tr>
                <tr>
                  <td>TycoonCreate</td>
                  <td>TCreate</td>
                  <td>Tycoons</td>
                  <td>Takes user through steps to creating Tycoon</td>
                </tr>
                <tr>
                  <td>TycoonDelete</td>
                  <td>TDelete</td>
                  <td>Tycoons</td>
                  <td>Takes user through steps to deleting Tycoon</td>
                </tr>
                <tr>
                  <td>TycoonLevelUp</td>
                  <td>TLevelUp & TLevel</td>
                  <td>Tycoons</td>
                  <td>Takes user through steps to improving Tycoon</td>
                </tr>
                <tr>
                  <td>TycoonRename</td>
                  <td>TRename</td>
                  <td>Tycoons</td>
                  <td>Takes user through steps to renaming Tycoon</td>
                </tr>
                <tr>
                  <td>TycoonType</td>
                  <td>TType</td>
                  <td>Tycoons</td>
                  <td>Takes user through steps to choosing Tycoon Type</td>
                </tr>
                <tr>
                  <td>Vote</td>
                  <td>None</td>
                  <td>General</td>
                  <td>Gives the link to vote for TM</td>
                </tr>
              </tbody>
            </table>
            <hr />
            <h2 className="subtitle">
              <b>Achievements</b>
            </h2>
            <table
              className="table is-bordered is-striped is-narrow is-hoverable"
              style={{ width: "50%" }}
            >
              <thead>
                <tr class="thead">
                  <th>Achievement</th>
                  <th>Category</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Getting Started</td>
                  <td>Easy</td>
                  <td>Create a Tycoon</td>
                </tr>
                <tr>
                  <td>Unified</td>
                  <td>Easy</td>
                  <td>Create or join an alliance</td>
                </tr>
                <tr>
                  <td>Got Levels?</td>
                  <td>Easy</td>
                  <td>Talk your way to user level 10</td>
                </tr>
                <tr>
                  <td>6 Figures</td>
                  <td>Medium</td>
                  <td>Collect a Total of $100,000 from your Tycoon</td>
                </tr>
                <tr>
                  <td>Level Up</td>
                  <td>Medium</td>
                  <td>Improve your Tycoon to level 2</td>
                </tr>
                <tr>
                  <td>Stronger Together</td>
                  <td>Medium</td>
                  <td>Have 5 Members in your Alliance</td>
                </tr>
                <tr>
                  <td>Levels for Days</td>
                  <td>Medium</td>
                  <td>Talk your way to user level 20</td>
                </tr>
                <tr>
                  <td>Gold Lined Pockets</td>
                  <td>Medium</td>
                  <td>Have $100,000 in your account</td>
                </tr>
                <tr>
                  <td>Good Luck</td>
                  <td>Medium</td>
                  <td>Win $100,000 gambling!</td>
                </tr>
                <tr>
                  <td>Bad Luck</td>
                  <td>Medium</td>
                  <td>Lose $100,000 gambling!</td>
                </tr>
                <tr>
                  <td>Me Millionth Dollar</td>
                  <td>Hard</td>
                  <td>Collect a Total of $1,000,000 from your Tycoon</td>
                </tr>
                <tr>
                  <td>Moving on Up</td>
                  <td>Hard</td>
                  <td>Get your Tycoon to level 10</td>
                </tr>
                <tr>
                  <td>Strength in Numbers</td>
                  <td>Hard</td>
                  <td>Have 10 Members in your Alliance</td>
                </tr>
                <tr>
                  <td>Golden Man</td>
                  <td>Hard</td>
                  <td>Have $1,000,000 in your account</td>
                </tr>
                <tr>
                  <td>Gambling Man</td>
                  <td>Hard</td>
                  <td>Gamble $100,000 in hopes of winning it big!</td>
                </tr>
                <tr>
                  <td>Completionist</td>
                  <td>Extreme</td>
                  <td>Awarded for obtaining all achievements!</td>
                </tr>
                <tr>
                  <td>Grandmaster Leveling</td>
                  <td>Extreme</td>
                  <td>Awarded for talking your way to level 50!</td>
                </tr>
                <tr>
                  <td>Strongest Numbers</td>
                  <td>Extreme</td>
                  <td>Awarded for having 50 members in your Alliance!</td>
                </tr>
              </tbody>
            </table>
            <span className="is-size-6">
              <i>
                Thank You to Puyodead1#0001 for all the help with TycoonMogul v2, which is coming
                soon!
              </i>
            </span>
          </main>
        </center>
      </div>
    );
  }
}
