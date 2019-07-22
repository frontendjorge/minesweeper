import React, { Component } from 'react';

var tableBombIt = [' ','*','1',' ','/n',' ',' ','*','2','/n','1','*',' ',' ','/n',' ','3','*',' '];
var i;


class Board extends Component {

constructor(props) {
    super(props);
    this.drawGameZone = this.drawGameZone.bind(this);       
}


componentDidMount() {
    this.drawGameZone(tableBombIt);
    this.addBtnRestart();
}


drawGameZone(array) {
    var bombIt = document.getElementById('bomb-it');
    for (i = 0; i < array.length; i++) {
        var cell = document.createElement('div');
        var enter = document.createElement('br');
        

        if (array[i] === '1' || array[i] === '2' || array[i] === '3') {
            cell.className = 'number';
            cell.innerText = array[i];
            cell.onclick = this.showNumber;
        } else if (array[i] === ' ') {
            cell.className = 'emptySpace';
            cell.onclick = this.changeColor;
        } else if (array[i] === '*') {
            cell.className = 'bomb';
            cell.onclick = this.boom;
        } else if (array[i] === '/n') {
            bombIt.appendChild(enter);
            continue;
        }

        bombIt.appendChild(cell);
        
    }
    
}


showNumber() {
    this.className = 'number numberShow';
}

changeColor() {
    this.classList.add("emptyColorFlag");
}


addBtnRestart() {
        var containerBombIt = document.getElementById('globalBoard');
        var btnRestart = document.createElement('button');
        btnRestart.addEventListener('click', this.reStart);
        btnRestart.innerText = '¡Reiniciar!';
        containerBombIt.appendChild(btnRestart);
        btnRestart.classList.add("btn", "btn-primary", "btn-restart")
    }   
    
 boom () {
        var containerBombIt = document.getElementById('container-bomb-it');
        var bombIt = document.getElementById('bomb-it');
        containerBombIt.removeChild(bombIt);
        containerBombIt.innerHTML = "<img class='img-responsive center-block' src='images/boom.gif' alt='BOOM'>";
       
    }



reStart() {
    window.location.reload(); 
}



    render() {
        return (
            <div className="">
                <div id="globalBoard" className="board-container-parent container">
                    <h1>Buscaminas / Minesweeper</h1>
                    <section id="container-bomb-it">
                    <section id="bomb-it"></section>
                    </section>
                </div>
                <div className="copyright">
                    <p>Desarrollado por Jorge Suárez. No tiene ningún fin comercial. Puede compartirlo, mejorarlo, hacerle fork teniendo en cuenta que siempre sea educativo.</p>
                </div>
            </div>
        )
    }
}

export default Board;