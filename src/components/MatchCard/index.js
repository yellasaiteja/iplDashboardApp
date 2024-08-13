// Write your code here

import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeamLogo, competingTeam, matchStatus, result} = matchDetails
  const getStatusClassNames = status =>
    status === 'Won' ? 'match-won' : 'lost-match'
  const matchStatusClassName = `match-status ${getStatusClassNames(
    matchStatus,
  )}`

  return (
    <li className="match-item">
      <img
        src={competingTeamLogo}
        className="competingTeam-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competing-team-name">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
