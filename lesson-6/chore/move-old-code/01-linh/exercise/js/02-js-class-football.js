class Team {
  constructor(name, players) {
    this.name = name;
    this.players = players;
  }

  addPlayer(player) {
    this.players.push(player);
  }

  listPlayers() {
    return this.players;
  }
}

const team = new Team("Team 1", [
  { id: 1, name: "Player 1", age: 20, position: "Forward" },
  { id: 2, name: "Player 2", age: 21, position: "Midfielder" },
]);

team.addPlayer({ id: 3, name: "Player 3", age: 22, position: "Defender" });
console.log(team.listPlayers());
