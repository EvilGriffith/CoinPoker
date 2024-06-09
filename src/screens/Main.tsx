import { Background } from "../components/Background"
import "../css/Main.css"

export const Main = () => {
    // const game = new Game()
    // const deck = game.shuffleCards(game.createCards())
    // let table = []
    // for(let i = 1; i <= 7;i++){
    //     table.push(deck.pop())
    // }
    // console.log(table)
    // console.log(game.checkcombination(table))
    return(
        <div className="s">
           <Background/>
           <div className="container">
                <div className="navbar">
                    <div className="contain">
                    <div className="user" onClick={()=>{alert("user")}}/>
                    <div className="logo"/>
                    <div className="countchip" onClick={()=>{alert("countchip")}}>0</div>
                    <div className="chip"/>
                </div>
                </div>
                <div className="containbut">
                    <div className="but" onClick={()=>{alert("game")}}>Game</div>
                    <div className="but" onClick={()=>{alert("settings")}}>Settings</div>
                    <div className="but"onClick={()=>{alert("store")}}>Store</div>
                </div>
                
           </div>
        </div>
        
    )
}