import React, { Component } from 'react';
import './App.css';
import Status from './components/Status';

class App extends Component {
	state = {
		board: Array(9).fill(null),
		player: null,
		winner: null
	};

	setPlayer = (player) => {
		this.setState({
			player
		});
	};

	checkWinner = () => {
		let board = this.state.board;
		let winLines = [
			[ '0', '1', '2' ],
			[ '3', '4', '5' ],
			[ '6', '7', '8' ],
			[ '0', '3', '6' ],
			[ '1', '4', '7' ],
			[ '2', '5', '8' ],
			[ '0', '4', '8' ],
			[ '2', '4', '6' ]
		];

		this.checkMatch(winLines, board);
	};

	handleClick = (index) => {
		if (this.state.player && !this.state.winner) {
			let newBoard = this.state.board;
			// checks if the board is filled or not
			if (this.state.board[index] === null) {
				newBoard[index] = this.state.player;
				this.setState({
					board: newBoard,
					player: this.state.player === 'X' ? 'O' : 'X'
				});
				this.checkWinner();
			}
		}
	};

	checkMatch(winLines, board) {
		winLines.forEach((lines) => {
			const [ a, b, c ] = lines;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				alert('you win');
				this.setState({
					winner: this.state.player
				});
			}
		});
	}

	generateBoard() {
		return this.state.board.map((box, index) => {
			return (
				<div className="box" key={index} onClick={() => this.handleClick(index)}>
					{box}
				</div>
			);
		});
	}

	handleReset = () => {
		this.setState({
			board: Array(9).fill(null),
			player: null,
			winner: null
		});
	};

	render() {
		return (
			<div className="container">
				<h1>Tic Tac Toe</h1>
				<Status
					winner={this.state.winner}
					player={this.state.player}
					setPlayer={(e) => this.setPlayer(e)}
					reset={this.handleReset}
				/>

				<div className="board">{this.generateBoard()}</div>
			</div>
		);
	}
}

export default App;
