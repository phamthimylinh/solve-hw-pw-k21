type Player = {
    id: number;
    name: string;
    age: number;
    position: string;
}

class Team {
    name: string;
    players: Player[];

    constructor(name: string, players: Player[]) {
        this.name = name;
        this.players = players;
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    listPlayers(): Player[] {
        return this.players;
    };
}

const team = new Team("Team 1", [
    { id: 1, name: "Player 1", age: 20, position: "Forward" },
    { id: 2, name: "Player 2", age: 21, position: "Midfielder" },
]);
team.addPlayer({ id: 3, name: "Player 3", age: 22, position: "Defender" });
console.log(team.listPlayers());
team.listPlayers().forEach(player => {
    console.log(player);
});