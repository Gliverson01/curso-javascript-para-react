import "./styles.css";
import CardGame from "../../components/CardGame"

function BoardGame() {
    const amountCards = 6;
    const $htmlCardGame = CardGame();
    const $htmlContent = $htmlCardGame.repeat(amountCards);
     
    return `
    <section class="board-game">
      ${$htmlContent}
    </section>
   `;
}

export default BoardGame