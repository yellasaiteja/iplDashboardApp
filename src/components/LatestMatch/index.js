// Write your code here
import './index.css'

const LastestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="lastest-match-container">
      <h1 className="lastest-match-heading">Lastest Matches</h1>
      <div className="lastest-match-card">
        <div className="lastest-match-details-container">
          <div className="lastest-match-details-1">
            <p className="lastest-match-team-name">{competingTeam}</p>
            <p className="lastest-match-date">{date}</p>
            <p className="match-details">{venue}</p>
            <p className="match-details">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            alt={`lastest match ${competingTeam}`}
            className="lastest-match-team-logo"
          />
        </div>
        <hr className="hr" />
        <div className="lastest-match-details-2">
          <p className="lastest-match-details-label">First Innings</p>
          <p className="lastest-match-details-value">{firstInnings}</p>
          <p className="lastest-match-details-label">Second Innings</p>
          <p className="lastest-match-details-value">{secondInnings}</p>
          <p className="lastest-match-details-label">Man of The Match</p>
          <p className="lastest-match-details-value">{manOfTheMatch}</p>
          <p className="lastest-match-details-label">Umpires</p>
          <p className="lastest-match-details-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LastestMatch
