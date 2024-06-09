import { Game } from "../classes/Game"
import "../css/Main.css"

export const Main = () => {
    const game = new Game()
    const deck = game.shuffleCards(game.createCards())
    let table = []
    for(let i = 1; i <= 7;i++){
        table.push(deck.pop())
    }
    console.log(table)
    console.log(game.checkcombination(table))
    return(
        <div className="window">
           <div className="circle" id="one"/>
           <div className="circle" id="two"/>
           <div className="circle" id="three"/>
           <div className="circle" id="four"/>
           <div className="circle" id="fith"/>
           <div className="circle" id="sex"/>
           <div className="circle" id="seven"/>
           <div className="container">
                <div className="navbar">
                    <div className="contain">
                    <div className="user"/>
                    <div className="logo"/>
                    <div className="countchip">99999</div>
                    <div className="chip"/>
                </div>
                </div>
                <div className="containbut">
                    <div className="but">Game</div>
                    <div className="but">Settings</div>
                    <div className="but">Store</div>
                </div>
                
           </div>
        </div>
    )
}