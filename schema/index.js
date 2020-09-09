const { gql } = require('apollo-server');

const schema = gql`

  type Player{
    id: ID!
    name: String!
    image: String
    nationality: String
    team: Team
  }

  type League {
    id: ID!
    name: String!
    country: String
    division: Int
    teams: [Team]
  }

  enum MatchResult {
    LOCAL_WIN
    VISITING_WIN
    TIE
  }

  type Match {
    local: Team
    visiting: Team
    localGoals: Int
    visitingGoals: Int
    result: MatchResult
    date: String
  }

  type Team {
    id: ID!
    name: String!
    league: League
    logo: String
    players: [Player]
    matches: [Match]
  }

  type Query {
    getTeams: [Team]
    getPlayers: [Player]
  }
`;

module.exports = schema;