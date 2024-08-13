// Write your code here
.home-route-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-sm-bg.png');
  background-size: cover;
  min-height: 100vh;
}

.team-list-container {
  width: 90%;
  max-width: 600px;
}

.ipl-dashboard-heading-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ipl-logo {
  width: 25px;
  height: 40px;
}

.ipl-heading {
  font-size: 36px;
  margin-left: 12px;
  font-family: 'Bree Serif';
  color: #ffffff;
}

.teams-lists {
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
}
@media screen and (min-width: 768px) {
  .home-route-container {
    background-image: url('https://assets.ccbp.in/frontend/react-js/ipl-dashboard-lg-bg.png');
  }
  .team-list-container {
    width: 90%;
    max-width: 1110px;
  }

  .ipl-logo {
    width: 60px;
    height: 90px;
  }

  .ipl-heading {
    font-size: 72px;
    margin-left: 16px;
  }
}
