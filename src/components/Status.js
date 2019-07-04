import React, { Component } from 'react';
import ChoosePlayer from './ChoosePlayer';

class Status extends Component {
	handleSetplayer = (e) => {
		this.props.setPlayer(e);
	};
	handleReset = () => {
		this.props.reset();
	};
	renderWinner = () => {
		if (this.props.winner) {
			return (
				<div>
					<h2>Winner is {this.props.winner}</h2>
					<button onClick={this.handleReset}>Reset</button>
				</div>
			);
		} else {
			return this.props.player ? (
				<h2>Next player is {this.props.player}</h2>
			) : (
				<ChoosePlayer player={(e) => this.handleSetplayer(e)} />
			);
		}
	};
	render() {
		return <div>{this.renderWinner()} </div>;
	}
}

export default Status;
