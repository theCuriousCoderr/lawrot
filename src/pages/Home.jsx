import { useEffect, useState } from "react";
import Header from "../components/Header";
import Square from "../components/Square";
import avatar1 from "../images/avatar3.svg";
import avatar2 from "../images/avatar4.svg";
import CharacterSelect from "../components/CharacterSelect";
import WinnerModal from "../components/WinnerModal";
import { AnimatePresence } from "motion/react";

function Home() {
  const [role, setRole] = useState({
    player: "one",
    cpu: "two",
  });

  const [positions, setPositions] = useState([
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ]);

  const options = {
    one: {
      image: avatar1,
      name: "STEVEN THE OWL",
    },
    two: {
      image: avatar2,
      name: "OFFMYLAWN",
    },
    none: {
      image: "",
      name: "",
    },
  };

  const [mounted, setMounted] = useState(false);
  const [turn, setTurn] = useState("one");
  const [totalMoves, setTotalMoves] = useState(0);
  const [disableSquare, setDisableSquare] = useState(false);
  const [winner, setWinner] = useState("");
  const [winningLine, setWinningLine] = useState([]);
  const [scores, setScores] = useState({
    one: 0,
    two: 0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    playForCPU();
  }, [turn]);

  useEffect(() => {
    if (totalMoves === 9 && !checkWinner(positions)) {
      setDisableSquare(true);
      setTimeout(() => {
        resetBoard();
      }, 1000);
      setTimeout(() => {
        setWinner("draw");
      }, 1500);
    }
  }, [totalMoves]);

  const [openCharacterSelect, setOpenCharacterSelect] = useState(true);

  const borderLineRules = {
    0: "border-t-transparent border-l-transparent",
    1: "border-t-transparent",
    2: "border-t-transparent border-r-transparent",
    3: "border-l-transparent",
    4: "",
    5: "border-r-transparent",
    6: "border-l-transparent border-b-transparent",
    7: "border-b-transparent ",
    8: "border-b-transparent border-r-transparent",
  };

  function isSpotEmpty(board, spot) {
    return board[spot] === "none";
  }

  function resetBoard() {
    setPositions([
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
      "none",
    ]);
  }

  function setGame() {
    setTurn(role.player);
    setOpenCharacterSelect(false);
  }

  function playForCPU() {
    if (turn !== role.cpu) return;

    setTimeout(() => {
      let spot = possibleWinLineForCPU(positions);
      if (!spot) {
        spot = possibleWinLineForPlayer(positions);
        if (!spot) {
          spot = emptySpotForCPU(positions);
        }
      }

      console.log("CPU SPOT", spot);
      // _possibleWinLineForPlayer = emptySpot(board);

      let copy = [...positions];
      if (copy[spot] !== "none") return;
      console.log("gate");
      let nextTurn = turn === "one" ? "two" : "one";

      copy.splice(spot, 1, turn);

      if (totalMoves >= 4) {
        let anyWin = checkWinner(copy);
        if (anyWin) {
          setPositions(copy);
          return;
        }
      }
      setPositions(copy);
      setTurn(nextTurn);
      setTotalMoves(totalMoves + 1);
    }, 1000);
  }

  function makeMove(position) {
    if (turn !== role.player) return;
    let copy = [...positions];
    position = parseInt(position);
    if (!isSpotEmpty(copy, position)) return;
    let nextTurn = turn === "one" ? "two" : "one";

    copy.splice(position, 1, turn);
    if (totalMoves >= 4) {
      let anyWin = checkWinner(copy);
      if (anyWin) {
        setPositions(copy);
        return;
      }
    }

    setPositions(copy);
    setTurn(nextTurn);
    setTotalMoves(totalMoves + 1);
  }

  function checkWinner(board) {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];
    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];
    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];

    const cheat = {
      0: [0, 1, 2],
      1: [3, 4, 5],
      2: [6, 7, 8],
      3: [0, 3, 6],
      4: [1, 4, 7],
      5: [2, 5, 8],
      6: [0, 4, 8],
      7: [2, 4, 6],
    };

    let playerWin = [row1, row2, row3, col1, col2, col3, diag1, diag2]
      .filter((line) => {
        return line.every((val) => val === role.player);
      })
      .flat();

    let cpuWin = [row1, row2, row3, col1, col2, col3, diag1, diag2]
      .filter((line) => {
        return line.every((val) => val === role.cpu);
      })
      .flat();

    if (!playerWin.length && !cpuWin.length) {
      return false;
    }

    if (playerWin.length) {
      let id = 0;

      [row1, row2, row3, col1, col2, col3, diag1, diag2].forEach(
        (line, index) => {
          if (JSON.stringify(line) === JSON.stringify(playerWin)) {
            id = index;
            return;
          }
        }
      );

      setWinningLine(cheat[id.toString()]);

      console.log(playerWin);
      // setWinningLine(playerWin);
      setTimeout(() => {
        setWinner(role.player);
      }, 2000);

      setTimeout(() => {
        setDisableSquare(true);
        setScores({ ...scores, [role.player]: scores[role.player] + 1 });
      }, 1000);

      return true;
    }
    if (cpuWin.length) {
      let id = 0;

      [row1, row2, row3, col1, col2, col3, diag1, diag2].forEach(
        (line, index) => {
          if (JSON.stringify(line) === JSON.stringify(cpuWin)) {
            id = index;
            return;
          }
        }
      );

      setWinningLine(cheat[id.toString()]);
      console.log(cheat[id.toString()]);
      // setWinningLine(cpuWin);
      setTimeout(() => {
        setWinner(role.cpu);
      }, 2000);

      setTimeout(() => {
        setDisableSquare(true);
        setScores({ ...scores, [role.cpu]: scores[role.cpu] + 1 });
      }, 1000);

      return true;
    }

    if (!playerWin.length && !cpuWin.length) {
      return false;
    } else {
      return true;
    }
  }

  function possibleWinLineForPlayer(board) {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];
    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];
    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];

    const cheat = {
      0: [0, 1, 2],
      1: [3, 4, 5],
      2: [6, 7, 8],
      3: [0, 3, 6],
      4: [1, 4, 7],
      5: [2, 5, 8],
      6: [0, 4, 8],
      7: [2, 4, 6],
    };

    let _possibleWinLineForPlayer = [];

    let layout = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    layout.forEach((line, index) => {
      let isLineAWin = line.filter((val) => val === role.player).length === 2;
      if (isLineAWin) {
        let leakIndex = line.indexOf("none");
        let _isSpotEmpty = isSpotEmpty(board, leakIndex);
        if (_isSpotEmpty) {
          _possibleWinLineForPlayer.push(cheat[index.toString()][leakIndex]);
          return;
        }
      }
    });
    if (_possibleWinLineForPlayer.length === 0) {
      return null;
    }

    console.log(`C: CPU saw a possible block spot`);
    return _possibleWinLineForPlayer[0];
  }

  function possibleWinLineForCPU(board) {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];
    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];
    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];

    const cheat = {
      0: [0, 1, 2],
      1: [3, 4, 5],
      2: [6, 7, 8],
      3: [0, 3, 6],
      4: [1, 4, 7],
      5: [2, 5, 8],
      6: [0, 4, 8],
      7: [2, 4, 6],
    };
    let _possibleWinSpotForCPU = [];

    let layout = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    layout.forEach((line, index) => {
      let isLineAWin = line.filter((val) => val === role.cpu).length === 2;
      if (isLineAWin) {
        let leakIndex = line.indexOf("none");
        let _isSpotEmpty = isSpotEmpty(board, leakIndex);
        if (_isSpotEmpty) {
          _possibleWinSpotForCPU.push(cheat[index.toString()][leakIndex]);
        }
      }
    });

    if (_possibleWinSpotForCPU.length === 0) {
      return null;
    }

    let possibleWinSpotsLength = _possibleWinSpotForCPU.length;
    let cpuSpot =
      _possibleWinSpotForCPU[
        Math.round(Math.random() * (possibleWinSpotsLength - 1))
      ];

    console.log(`A: CPU saw a possible win spot`);
    return cpuSpot;
  }

  function emptySpotForCPU(board) {
    let row1 = [board[0], board[1], board[2]];
    let row2 = [board[3], board[4], board[5]];
    let row3 = [board[6], board[7], board[8]];
    let col1 = [board[0], board[3], board[6]];
    let col2 = [board[1], board[4], board[7]];
    let col3 = [board[2], board[5], board[8]];
    let diag1 = [board[0], board[4], board[8]];
    let diag2 = [board[2], board[4], board[6]];

    const cheat = {
      0: [0, 1, 2],
      1: [3, 4, 5],
      2: [6, 7, 8],
      3: [0, 3, 6],
      4: [1, 4, 7],
      5: [2, 5, 8],
      6: [0, 4, 8],
      7: [2, 4, 6],
    };
    let emptySpots = [];

    let layout = [row1, row2, row3, col1, col2, col3, diag1, diag2];

    layout.forEach((line, index) => {
      let hasEmpty = line.some((val) => val === "none");
      if (hasEmpty) {
        let leakIndex = line.indexOf("none");
        emptySpots.push(cheat[index.toString()][leakIndex]);
      }
    });

    if (emptySpots.length === 0) {
      return null;
    }

    let emptySpotsLength = emptySpots.length;
    let cpuSpot =
      emptySpots[Math.round(Math.random() * (emptySpotsLength - 1))];

    console.log(`B: CPU saw an empty spot`);
    return cpuSpot;
  }

  function playAgain() {
    setWinningLine([""]);
    setTotalMoves(0);
    setWinner("");
    setDisableSquare(false);
    resetBoard();
    let nextTurn = turn === "one" ? "two" : "one";
    setTurn(nextTurn);
  }

  function quit() {
    setWinningLine([""]);
    setTotalMoves(0);
    setOpenCharacterSelect(true);
    setScores({
      one: 0,
      two: 0,
    });
    setWinner("");
    setDisableSquare(false);
    resetBoard();
  }

  if (!mounted) {
    return <div></div>;
  }

  return (
    <div className="h-screen w-full">
      {openCharacterSelect && (
        <CharacterSelect role={role} setRole={setRole} setGame={setGame} />
      )}
      <AnimatePresence>
        {winner !== "" && (
          <WinnerModal winner={winner} playAgain={playAgain} quit={quit} />
        )}
      </AnimatePresence>

      <Header role={role} options={options} />
      <div className="fixed w-full mt-24 xs:max-md:mt-20 h-[calc(100vh_-_6rem)] xs:max-md:h-[calc(100vh_-_5rem)] xs:max-md:px-10 flex flex-col items-center justify-center bg-[rgb(20,23,227)]/90 py-5 layout">
        <h1 className="absolute w-full top-10 text-center text-3xl font-bold text-white">
          THE ULTIMATE TIC-TAC-TOE
        </h1>
        <p className="absolute top-20 font-medium text-white">
          <q className="">{options[turn].name}</q> turn to play
        </p>
        <ul className="relative z-30 portrait:w-[70%] landscape:h-[70%] aspect-square max-w-[600px] grid grid-cols-3 board ">
          {positions.map((square, index) => {
            return (
              <li
                key={`${square}${index}`}
                className={`border-4 xs:max-md:border-2 ${
                  borderLineRules[index.toString()]
                } fle items-center justify-center`}
              >
                <Square
                  count={square}
                  index={index.toString()}
                  options={options}
                  makeMove={makeMove}
                  disableSquare={disableSquare}
                  winningLine={winningLine}
                />
              </li>
            );
          })}
        </ul>
        <div className="fixed w-full left-0 bottom-10">
          <div className="w-full max-w-[400px] mx-auto">
            <div className="w-full mx-auto h-10 flex justify-between items-center">
              <div className="h-full">
                <div className="h-full flex gap-2 items-center bg-white rounded-full">
                  <div className="h-full aspect-square rounded-full bg-green-500">
                    <figure className="size-full relative">
                      <img
                        src={options[role.player].image}
                        alt="avatar 1"
                        className="object-cover object-center"
                      />
                    </figure>
                  </div>
                  <p className="text-lg font-medium tracking-wider mr-5">
                    {scores[role.player]}
                  </p>
                </div>
                <p className="font-medium text-white">PLAYER 1</p>
              </div>

              <div className="h-full">
                <div className="h-full flex gap-2 items-center bg-white rounded-full">
                  <p className="text-lg font-medium tracking-wider ml-5">
                    {scores[role.cpu]}
                  </p>
                  <div className="h-full aspect-square rounded-full bg-green-500">
                    <figure className="size-full relative">
                      <img
                        src={options[role.cpu].image}
                        alt="avatar 1"
                        className="object-cover object-center"
                      />
                    </figure>
                  </div>
                </div>

                <p className="font-medium text-white">PLAYER 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
