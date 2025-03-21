import avatar3 from "../images/avatar3.svg";
import avatar4 from "../images/avatar4.svg";
import avatar1 from "../images/avatar1.svg";
import avatar2 from "../images/avatar2.svg";

class Game {

  constructor() {
    this.role = {
      player: "one",
      cpu: "two",
    };

    this.positions = [
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ];

    this.options = {
      one: {
        image: avatar3,
        modalImage: avatar1,
        name: "STEVEN THE OWL",
      },
      two: {
        image: avatar4,
        modalImage: avatar2,
        name: "OFFMYLAWN",
      },
      none: {
        image: "",
        modalImage: "",
        name: "",
      },
    };

    this.state = {
      openCharacterSelect: true,
      mounted: false,
      turn: "one",
      totalMoves: 0,
      moves: {
        one: 0,
        two: 0,
      },
      disableSquare: false,
      winner: "",
      winningLane: [],
      scores: {
        one: 0,
        two: 0,
      },
    };

    this.edgeSpots = [0, 2, 6, 8];
    this.moves = {
      playerMoves: [],
      cpuMoves: [],
    };

    this.totalWinMoves = [];
    this.gameMode = "Easy";
  }

  #getBoardLanes(board) {
    const row1 = [board[0], board[1], board[2]];
    const row2 = [board[3], board[4], board[5]];
    const row3 = [board[6], board[7], board[8]];
    const col1 = [board[0], board[3], board[6]];
    const col2 = [board[1], board[4], board[7]];
    const col3 = [board[2], board[5], board[8]];
    const diag1 = [board[0], board[4], board[8]];
    const diag2 = [board[2], board[4], board[6]];
    const lanes = [row1, row2, row3, col1, col2, col3, diag1, diag2];
    return lanes;
  }

  #getCheatIndices() {
    return {
      0: [0, 1, 2],
      1: [3, 4, 5],
      2: [6, 7, 8],
      3: [0, 3, 6],
      4: [1, 4, 7],
      5: [2, 5, 8],
      6: [0, 4, 8],
      7: [2, 4, 6],
    };
  }

  getOptions() {
    return this.options;
  }

  setRole(newRole) {
    this.role = newRole;
  }

  setGameMode(mode) {
    this.gameMode = mode;
  }

  getGameMode() {
    return this.gameMode;
  }

  isASpotEmpty(board, spotToPlay) {
    return board[Number(spotToPlay)] === "none";
  }

  resetGameBoard() {
    return [
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ];
  }

  resetScores() {
    return {
      one: 0,
      two: 0,
    };
  }

  resetMoves() {
    this.moves = {
      playerMoves: [],
      cpuMoves: [],
    };
  }

  recordMoves(role, spot) {
    const key = role === "player" ? "playerMoves" : "cpuMoves";
    let moves = this.moves[key];
    moves = [...moves, Number(spot)];
    this.moves = { ...this.moves, [key]: moves };
  }

  saveWinMoves(role) {
    const winMoves =
      role === "player" ? this.moves.playerMoves : this.moves.cpuMoves;
    let totalWinMoves = this.totalWinMoves;
    this.totalWinMoves = [...totalWinMoves, winMoves];
  }

  makeMoveForPlayer(board, spotToPlay, turnToPlay, totalMoves) {
    let turn = turnToPlay;
    if (turn !== this.role.player) return;
    let boardCopy = [...board];
    spotToPlay = Number(spotToPlay);
    let isSpotToPlayEmpty = this.isASpotEmpty(board, spotToPlay);
    if (!isSpotToPlayEmpty) return;
    let nextTurn = turn === "one" ? "two" : "one";
    boardCopy.splice(spotToPlay, 1, turn);
    this.recordMoves("player", Number(spotToPlay));
    if (this.state.totalMoves >= 4) {
      let data = this.checkWinner(boardCopy);
      if (data && data.thereIsAWinner) {
        this.positions = boardCopy;
        return {
          thereIsAWinner: true,
          positions: boardCopy,
          winningLane: data.winningLane,
          disableSquare: data.disableSquare,
          winner: data.winner,
          scores: data.scores,
        };
      }
    }

    this.positions = boardCopy;
    this.state.turn = nextTurn;
    this.state.totalMoves = totalMoves + 1;
    return {
      thereIsAWinner: false,
      positions: boardCopy,
      nextTurn,
      totalMoves: totalMoves + 1,
    };
  }

  cpuSpotToPlay(board) {
    let spotToPlay = this.possibleWinLaneForCpu(board);
    if (!spotToPlay && spotToPlay !== 0) {
      spotToPlay = this.possibleWinLaneForPlayer(board);
      if (!spotToPlay && spotToPlay !== 0) {
        spotToPlay = this.findEmptySpotForCPU(board);
      }
    }

    return spotToPlay;
  }

  cpuSpotToPlayHardMode(board) {
    const playerHasPlayed = this.moves.playerMoves.length > 0;
    const isPlayerFirstMove =
      board.filter((spot) => spot === "none").length === 8;
    let spotToPlay = 0;
    if (playerHasPlayed && isPlayerFirstMove) {
      const playerFirstMoveIsAtEdge = this.edgeSpots.includes(
        this.moves.playerMoves[0]
      );
      const playerFirstMoveAtMiddle = this.moves.playerMoves[0] === 4;

      if (playerFirstMoveIsAtEdge) {
        spotToPlay = 4; // middle spot
      } else if (playerFirstMoveAtMiddle) {
        spotToPlay = this.edgeSpots[Math.round(Math.random() * 3)]; //any of the edges
      } else {
        spotToPlay = this.cpuSpotToPlay(board);
      }
    } else {
      spotToPlay = this.cpuSpotToPlay(board);
    }

    return spotToPlay;
  }
  
  makeMoveForCPU(board, turnToPlay, totalMoves) {
    let turn = turnToPlay;
    let gameMode = this.gameMode;

    if (turn !== this.role.cpu) return;

    let spotToPlay = 0;
    if (gameMode === "Easy") {
      spotToPlay = this.cpuSpotToPlay(board);
    } else {
      spotToPlay = this.cpuSpotToPlayHardMode(board);
    }

    spotToPlay = Number(spotToPlay);
    let boardCopy = [...board];
    let isSpotToPlayEmpty = this.isASpotEmpty(board, spotToPlay);
    if (!isSpotToPlayEmpty) return;
    let nextTurn = turn === "one" ? "two" : "one";
    boardCopy.splice(spotToPlay, 1, turn);
    this.recordMoves("cpu", Number(spotToPlay));
    if (this.state.totalMoves >= 4) {
      let data = this.checkWinner(boardCopy);
      if (data && data.thereIsAWinner) {
        this.positions = boardCopy;
        return {
          thereIsAWinner: true,
          positions: boardCopy,
          winningLane: data.winningLane,
          disableSquare: data.disableSquare,
          winner: data.winner,
          scores: data.scores,
        };
      }
    }
    this.positions = boardCopy;
    this.state.turn = nextTurn;
    this.state.totalMoves = totalMoves + 1;
    return {
      thereIsAWinner: false,
      positions: boardCopy,
      nextTurn,
      totalMoves: totalMoves + 1,
    };
  }

  checkWinner(board) {
    const player = this.role.player;
    const cpu = this.role.cpu;

    const lanes = this.#getBoardLanes(board);
    const cheatIndices = this.#getCheatIndices();

    let playerWinLaneIndex = "";
    let cpuWinLaneIndex = "";

    // check all lanes for possible 3-win combo for player or cpu
    lanes.forEach((lane, index) => {
      let isWinLaneForPlayer = lane.every((val) => val === player);
      let isWinLaneForCpu = lane.every((val) => val === cpu);
      if (isWinLaneForPlayer) {
        //set the index for the winning lane
        playerWinLaneIndex = index.toString();
        return;
      }
      if (isWinLaneForCpu) {
        //set the index for the winning lane
        cpuWinLaneIndex = index.toString();
        return;
      }
    });

    // was there a win lane for player
    const didPlayerWin = playerWinLaneIndex !== "";
    // was there a win lane for cpu
    const didCpuWin = cpuWinLaneIndex !== "";

    if (didPlayerWin) {
      this.state.winningLane = cheatIndices[playerWinLaneIndex];
      this.state.disableSquare = true;
      this.state.winner = player;
      this.state.scores[player] = this.state.scores[player] + 1;

      this.saveWinMoves("player");
      this.resetMoves();

      return {
        thereIsAWinner: true,
        winningLane: cheatIndices[playerWinLaneIndex],
        disableSquare: true,
        winner: player,
        scores: {
          ...this.state.scores,
          [this.state.scores[player]]: this.state.scores[player] + 1,
        },
      };
    }

    if (didCpuWin) {
      this.state.winningLane = cheatIndices[cpuWinLaneIndex];
      this.state.disableSquare = true;
      this.state.winner = cpu;
      this.state.scores[cpu] = this.state.scores[cpu] + 1;

      this.saveWinMoves("cpu");
      this.resetMoves();

      return {
        thereIsAWinner: true,
        winningLane: cheatIndices[cpuWinLaneIndex],
        disableSquare: true,
        winner: cpu,
        scores: {
          ...this.state.scores,
          [this.state.scores[cpu]]: this.state.scores[cpu] + 1,
        },
      };
    }

    return null;
  }

  possibleWinLaneForPlayer(board) {
    const player = this.role.player;

    const lanes = this.#getBoardLanes(board);
    const cheatIndices = this.#getCheatIndices();

    let _possibleWinLaneForPlayer = [];

    lanes.forEach((lane, index) => {
      let isLaneAPossibleWin =
        lane.filter((val) => val === player).length === 2;
      let doesLaneHaveOneEmptySpot =
        lane.filter((val) => val === "none").length === 1;
      if (isLaneAPossibleWin && doesLaneHaveOneEmptySpot) {
        let emptySpotIndex = lane.indexOf("none").toString();
        _possibleWinLaneForPlayer.push(
          cheatIndices[index.toString()][emptySpotIndex]
        );
        return;
      }
    });

    if (_possibleWinLaneForPlayer.length === 0) {
      return null;
    }

    return _possibleWinLaneForPlayer[0];
  }

  possibleWinLaneForCpu(board) {
    const cpu = this.role.cpu;

    const lanes = this.#getBoardLanes(board);
    const cheatIndices = this.#getCheatIndices();

    let _possibleWinLaneForCpu = [];

    lanes.forEach((lane, index) => {
      let isLaneAPossibleWin = lane.filter((val) => val === cpu).length === 2;
      let doesLaneHaveOneEmptySpot =
        lane.filter((val) => val === "none").length === 1;
      if (isLaneAPossibleWin && doesLaneHaveOneEmptySpot) {
        let emptySpotIndex = lane.indexOf("none").toString();
        _possibleWinLaneForCpu.push(
          cheatIndices[index.toString()][emptySpotIndex]
        );
        return;
      }
    });

    if (_possibleWinLaneForCpu.length === 0) {
      return null;
    }

    let _possibleWinLaneForCpuLength = _possibleWinLaneForCpu.length;
    let cpuSpotToPlay =
      _possibleWinLaneForCpu[
        Math.round(Math.random() * (_possibleWinLaneForCpuLength - 1))
      ];

    return cpuSpotToPlay;
  }

  findEmptySpotForCPU(board) {
    const lanes = this.#getBoardLanes(board);
    const cheatIndices = this.#getCheatIndices();

    let emptySpots = [];

    lanes.forEach((lane, laneIndex) => {
      lane.forEach((spot, spotIndex) => {
        let spotIsEmpty = spot === "none";
        if (spotIsEmpty) {
          const transformLaneToNumber = cheatIndices[laneIndex.toString()];
          emptySpots.push(transformLaneToNumber[spotIndex]);
        }
      });
    });

    if (emptySpots.length === 0) {
      return null;
    }

    let emptySpotsLength = emptySpots.length;
    let cpuSpotToPlay =
      emptySpots[Math.round(Math.random() * (emptySpotsLength - 1))];

    return cpuSpotToPlay;
  }
}

export { Game };
