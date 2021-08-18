import CardGame from "../../components/CardGame"

function BoardGame() {
    const amountCards = 3;
    const $htmlCardGame = CardGame();
    const $htmlBoardGame = $htmlCardGame.repeat(amountCards);

    console.log($htmlBoardGame);
     
    return $htmlBoardGame;
}

export default BoardGame