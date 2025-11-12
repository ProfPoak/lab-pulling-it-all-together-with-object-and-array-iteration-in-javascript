function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

function numPointsScored (playerName) {
    const game = gameObject()

    for (let name in game.home.players) {
        if (name === playerName) {
            return game.home.players[name].points
        }
    }

    for (let name in game.away.players) {
        if (name === playerName) {
            return game.away.players[name].points
        }
    }
}

function shoeSize(playerName) {
    const game = gameObject()

    for (let name in game.home.players) {
        if (name === playerName) {
            return game.home.players[name].shoe
        }
    }

    for (let name in game.away.players) {
        if (name === playerName) {
            return game.away.players[name].shoe
        }
    }
}

function teamColors(teamName) {
    const game = gameObject()

    if (game.home.teamName === teamName) {
        return game.home.colors
    }
    else if (game.away.teamName === teamName) {
        return game.away.colors
    }    
}

function teamNames() {
    const game = gameObject()
    const teamNames = []

    for (let team in game) {
        teamNames.push(game[team].teamName)
    }

    return teamNames
}

function playerNumbers(teamName) {
    const game = gameObject()
    const playerNumbers = []

    if(game.home.teamName === teamName) {
        for (let name in game.home.players) {
            playerNumbers.push(game.home.players[name].number)
        }
    }

    if(game.away.teamName === teamName) {
        for (let name in game.away.players) {
            playerNumbers.push(game.away.players[name].number)
        }
    }
    
    return playerNumbers
}

function playerStats(playerName) {
    const game = gameObject()

    for (let name in game.home.players) {
        if (name === playerName) {
            return game.home.players[name]
        }
    }

    for (let name in game.away.players) {
        if (name === playerName) {
            return game.away.players[name]
        }
    }
}

function bigShoeRebounds() {
    const game = gameObject()
    let largestShoe = 0
    let playerRebounds
    
    for (let name in game.home.players) {
        if(game.home.players[name].shoe > largestShoe) {
            largestShoe = game.home.players[name].shoe
            playerRebounds = game.home.players[name].rebounds
        }
    }

    for (let name in game.away.players) {
        if(game.away.players[name].shoe > largestShoe) {
            largestShoe = game.away.players[name].shoe
            playerRebounds = game.away.players[name].rebounds
        }
    }

    return playerRebounds
}

numPointsScored('Brendan Hayword');
shoeSize('Brendan Hayword');
teamColors('Brooklyn Nets');
teamNames();
playerNumbers('Brooklyn Nets');
playerStats('Brendan Hayword');
bigShoeRebounds();

