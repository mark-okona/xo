let counter = 1;

const gameboard = document.getElementById('gameboard');
const tiles = gameboard.children;

for (let i = 0; i < tiles.length; i++) {
  tiles[i].onclick = function(event) {
    const cross = event.target.querySelector('.cross');
    const nought = event.target.querySelector('.nought');

    if (over === false) {
      if (!cross.classList.contains('visible') && !nought.classList.contains('visible')) {
        if (counter % 2 === 1) {
          cross.classList.add('visible');
          winConditions();
          isOver();
          resetTrigger();
          counter++;
        } else {
          nought.classList.add('visible');
          winConditions();
          isOver();
          resetTrigger();
          counter++;
        }
      }
    }
  };
}

const winConditions = function() {
  if (tiles[0].querySelector('.cross').classList.contains('visible')
    && tiles[1].querySelector('.cross').classList.contains('visible')
    && tiles[2].querySelector('.cross').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[1].classList.add('winner');
      tiles[2].classList.add('winner');
    } else if (tiles[3].querySelector('.cross').classList.contains('visible')
    && tiles[4].querySelector('.cross').classList.contains('visible')
    && tiles[5].querySelector('.cross').classList.contains('visible')) {
      tiles[3].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[5].classList.add('winner');
    } else if (tiles[6].querySelector('.cross').classList.contains('visible')
    && tiles[7].querySelector('.cross').classList.contains('visible')
    && tiles[8].querySelector('.cross').classList.contains('visible')) {
      tiles[6].classList.add('winner');
      tiles[7].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[0].querySelector('.cross').classList.contains('visible')
    && tiles[3].querySelector('.cross').classList.contains('visible')
    && tiles[6].querySelector('.cross').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[3].classList.add('winner');
      tiles[6].classList.add('winner');
    } else if (tiles[1].querySelector('.cross').classList.contains('visible')
    && tiles[4].querySelector('.cross').classList.contains('visible')
    && tiles[7].querySelector('.cross').classList.contains('visible')) {
      tiles[1].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[7].classList.add('winner');
    } else if (tiles[2].querySelector('.cross').classList.contains('visible')
    && tiles[5].querySelector('.cross').classList.contains('visible')
    && tiles[8].querySelector('.cross').classList.contains('visible')) {
      tiles[2].classList.add('winner');
      tiles[5].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[0].querySelector('.cross').classList.contains('visible')
    && tiles[4].querySelector('.cross').classList.contains('visible')
    && tiles[8].querySelector('.cross').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[2].querySelector('.cross').classList.contains('visible')
    && tiles[4].querySelector('.cross').classList.contains('visible')
    && tiles[6].querySelector('.cross').classList.contains('visible')) {
      tiles[2].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[6].classList.add('winner');
    } else if (tiles[0].querySelector('.nought').classList.contains('visible')
    && tiles[1].querySelector('.nought').classList.contains('visible')
    && tiles[2].querySelector('.nought').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[1].classList.add('winner');
      tiles[2].classList.add('winner');
    } else if (tiles[3].querySelector('.nought').classList.contains('visible')
    && tiles[4].querySelector('.nought').classList.contains('visible')
    && tiles[5].querySelector('.nought').classList.contains('visible')) {
      tiles[3].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[5].classList.add('winner');
    } else if (tiles[6].querySelector('.nought').classList.contains('visible')
    && tiles[7].querySelector('.nought').classList.contains('visible')
    && tiles[8].querySelector('.nought').classList.contains('visible')) {
      tiles[6].classList.add('winner');
      tiles[7].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[0].querySelector('.nought').classList.contains('visible')
    && tiles[3].querySelector('.nought').classList.contains('visible')
    && tiles[6].querySelector('.nought').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[3].classList.add('winner');
      tiles[6].classList.add('winner');
    } else if (tiles[1].querySelector('.nought').classList.contains('visible')
    && tiles[4].querySelector('.nought').classList.contains('visible')
    && tiles[7].querySelector('.nought').classList.contains('visible')) {
      tiles[1].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[7].classList.add('winner');
    } else if (tiles[2].querySelector('.nought').classList.contains('visible')
    && tiles[5].querySelector('.nought').classList.contains('visible')
    && tiles[8].querySelector('.nought').classList.contains('visible')) {
      tiles[2].classList.add('winner');
      tiles[5].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[0].querySelector('.nought').classList.contains('visible')
    && tiles[4].querySelector('.nought').classList.contains('visible')
    && tiles[8].querySelector('.nought').classList.contains('visible')) {
      tiles[0].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[8].classList.add('winner');
    } else if (tiles[2].querySelector('.nought').classList.contains('visible')
    && tiles[4].querySelector('.nought').classList.contains('visible')
    && tiles[6].querySelector('.nought').classList.contains('visible')) {
      tiles[2].classList.add('winner');
      tiles[4].classList.add('winner');
      tiles[6].classList.add('winner');
    }
};

let over = false;

const isOver = function() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains('winner')) {
      over = true;
    }
  }
}

const resetTrigger = function() {
  for (let i = 0; i < tiles.length; i++) {
    if (tiles[i].classList.contains('winner')) {
      setTimeout(() => { document.querySelector('.reset').classList.add('visible'); }, 1000);
    }
  }
}

const reset = document.querySelector('.reset');


reset.onclick = function() {
  for (let i = 0; i < tiles.length; i++) {
    for (let j = 0; j < tiles[i].children.length; j++) {
      tiles[i].children[j].classList.remove('visible');
    }
  }
  for (let i = 0; i < tiles.length; i++) {
    tiles[i].classList.remove('winner');
  }
  reset.classList.remove('visible');
  over = false;
}
