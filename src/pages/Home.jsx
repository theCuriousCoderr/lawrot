import { useEffect, useState } from "react";
import Header from "../components/Header";
import CharacterSelect from "../components/CharacterSelect";
import WinnerModal from "../components/WinnerModal";
import { AnimatePresence } from "motion/react";
import { Game } from "../utils/game";
import EasyMode from "../components/EasyMode";
import HardMode from "../components/HardMode";
import QuitGame from "../components/QuitGame";
import Board from "../components/Board";
import DesktopScoreBoard from "../components/DesktopScoreBoard";

const game = new Game();
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

  const options = game.getOptions();

  const [turn, setTurn] = useState("one");
  const [totalMoves, setTotalMoves] = useState(0);
  const [totalGames, setTotalGames] = useState(1);
  const [disableSquare, setDisableSquare] = useState(false);
  const [winner, setWinner] = useState("");
  const [winningLine, setWinningLine] = useState([]);
  const [scores, setScores] = useState({
    one: 0,
    two: 0,
  });

  // triggers playForCPU();
  useEffect(() => {
    setTimeout(() => {
      playForCPU();
    }, 1000);
  }, [turn]);

  // checks for if there is a draw
  useEffect(() => {
    const thereIsAWinner = game.checkWinner(positions)?.thereIsAWinner || false;
    if (totalMoves === 9 && !thereIsAWinner) {
      isAdraw();
    }
  }, [totalMoves]);

  const [openCharacterSelect, setOpenCharacterSelect] = useState(true);

  function startGame() {
    const openCharacterSelectModal = false;
    setTurn(role.player);
    setOpenCharacterSelect(openCharacterSelectModal);
    game.setRole(role);
  }

  function isAdraw() {
    setDisableSquare(true);
    setTimeout(() => {
      resetBoard();
    }, 1000);
    setTimeout(() => {
      setWinner("draw");
    }, 1500);
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

  function gameOver(data) {
    setPositions(data.positions);

    setTimeout(() => {
      setDisableSquare(data.disableSquare);
      setWinningLine(data.winningLane);
    }, 500);

    setTimeout(() => {
      resetBoard();
    }, 1000);

    setScores(data.scores);

    setTimeout(() => {
      setWinner(data.winner);
    }, 1500);
  }

  function playOn(data) {
    setPositions(data.positions);
    setTurn(data.nextTurn);
    setTotalMoves(data.totalMoves);
  }

  function makeYourMove(spotToPlay) {
    let data = game.makeMoveForPlayer(positions, spotToPlay, turn, totalMoves);
    if (data) nextStep(data);
  }

  function playForCPU() {
    let data = game.makeMoveForCPU(positions, turn, totalMoves);
    if (data) nextStep(data);
  }

  function nextStep(data) {
    // if there is a winner
    if (data.thereIsAWinner) gameOver(data);

    // if there is no winner
    if (!data.thereIsAWinner) playOn(data);
  }

  function reset() {
    setWinningLine([""]);
    setTotalMoves(0);
    setPositions(game.resetGameBoard());
    setDisableSquare(false);
    setWinner("");
    game.resetMoves();
  }

  function playAgain() {
    let nextTurn = turn === "one" ? "two" : "one";
    setTurn(nextTurn);
    setTotalGames(totalGames + 1);
    reset();
  }

  function quit() {
    setOpenCharacterSelect(true);
    setScores(game.resetScores());
    setTotalGames(1);
    reset();
  }

  function setGameMode(mode) {
    game.setGameMode(mode);
  }

  const inActiveTabStyle = "bg-slate-50/20 text-slate-400 hover:bg-slate-50/30";
  const gameMode = game.getGameMode();

  return (
    <div className="h-screen w-full bg-[rgb(20,23,227) bg-red-5">
      {openCharacterSelect && (
        <CharacterSelect role={role} setRole={setRole} setGame={startGame} />
      )}

      <AnimatePresence>
        {winner !== "" && (
          <WinnerModal winner={winner} playAgain={playAgain} quit={quit} />
        )}
      </AnimatePresence>

      <Header role={role} options={options} scores={scores} turn={turn} />
      <div className="relative w-full mt-24 xs:max-md:mt-0 h-[calc(100vh_-_6rem)] xs:max-md:h-aut xs:max-md:h-[calc(100vh_-_5rem)] xs:max-md:px-10 flex flex-col items-center justify-center bg-[rgb(20,23,227)]/90 py-5 layout">
        <div className="absolute w-full top-5 space-y-2 xs:max-md:top-2 xs:max-md:space-y-2 bg-red-40">
          <h1 className=" w-full top-10 xs:max-md:top-2 text-center text-3xl xs:max-md:text-lg font-bold text-white">
            THE ULTIMATE TIC-TAC-TOE
          </h1>
          <p className=" w-full top-10 xs:max-md:top-2 text-center text-3xl xs:max-md:text-lg font-bold text-white">
            Round: {totalGames}
          </p>

          <p className="text-center xs:max-md:text-sm font-medium text-white">
            <q className="text-yellow-500">{options[turn].name}</q> turn to play
          </p>

          <div className="flex justify-center items-center gap-2 w-full ">
            <EasyMode
              reset={reset}
              setGameMode={setGameMode}
              gameMode={gameMode}
              inActiveTabStyle={inActiveTabStyle}
            />
            <HardMode
              reset={reset}
              setGameMode={setGameMode}
              gameMode={gameMode}
              inActiveTabStyle={inActiveTabStyle}
            />
            <QuitGame
              quit={quit}
              setGameMode={setGameMode}
              inActiveTabStyle={inActiveTabStyle}
            />
          </div>
        </div>

        <Board
          positions={positions}
          makeYourMove={makeYourMove}
          disableSquare={disableSquare}
          winningLine={winningLine}
          winner={winner}
          gameMode={gameMode}
        />

        <DesktopScoreBoard role={role} scores={scores} />
      </div>
    </div>
  );
}

export default Home;
