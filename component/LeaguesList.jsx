import React from 'react';
import '../src/LeaguesList.css';

const leaguesData = [
  {
    name: 'English Premier League',
    key: 'epl',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    id: '4328'
  },
  {
    name: 'La Liga',
    key: 'liga',
    logo: 'https://media.api-sports.io/football/leagues/140.png',
    id: '4335'
  },
  {
    name: 'Bundesliga',
    key: 'bundesliga',
    logo: 'https://media.api-sports.io/football/leagues/78.png',
    id: '4331'
  },
  {
    name: 'Serie A',
    key: 'serie',
    logo: 'https://media.api-sports.io/football/leagues/135.png',
    id: '4332'
  },
  {
    name: 'Ligue 1',
    key: 'ligue',
    logo: 'https://media.api-sports.io/football/leagues/61.png',
    id: '4334'
  },
  {
    name: 'Moroccan League',
    key: 'inwi',
    logo: 'https://media.api-sports.io/football/leagues/200.png',
    id: '4520'
  }
];

const LeaguesList = ({ onSelectLeague }) => {
  return (
    <div className="leagues-container">
      <h2>Select a League</h2>
      <div className="leagues-grid">
        {leaguesData.map(league => (
          <div 
            key={league.id} 
            className="league-card"
            onClick={() => onSelectLeague(league)}
          >
            <img src={league.logo} alt={league.name} className="league-logo" />
            <h3>{league.name}</h3>
          </div>
        ))}
      </div>
      <div className="scroll-indicator">
            <svg style={{
              display: 'block',
              margin: '0 auto'
            }} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 5v14M19 12l-7 7-7-7" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <footer className="fade-in web">
              Développé par : <br />
              Ayman Chabbaki - <a href="https://www.linkedin.com/in/ayman-chabbaki-10aa80281/">LinkedIn</a> | Afyf Badeddine - <a href="https://www.linkedin.com/in/afyf-badreddine-235a07284/">LinkedIn</a> | Malak Houali - <a href="https://www.linkedin.com/in/malak-houali-701a61282/">LinkedIn</a>
              </footer>
          </div>
    </div>
    
  );
};

export default LeaguesList;