import React, { Component } from 'react';
import {
	PieChart,
	Pie,
	Cell,
	ResponsiveContainer
 } from 'recharts';
import { connect } from "react-redux";

const mapStateToProps = state => {
	return {
		expenses: state.expenses
	}
}

class PieChartClass extends Component {
	getRandomIndex() {
		return Math.round(Math.random() * (this.dataPoints.length - 1));
	}

	addData() {
		this.categorizedData = {};
		this.dataPoints = [];
		for (var i = 0; i < this.props.expenses.length; i++) {
			const category = this.props.expenses[i].category;
			const oldAmount = parseFloat(this.categorizedData[category]);
			const toBeAdded = parseFloat(this.props.expenses[i].amount);

			this.categorizedData[category] = isNaN(oldAmount) ? toBeAdded.toFixed(2) : (() => {
				const result = parseFloat(oldAmount + toBeAdded);
				return result.toFixed(2);
			})();
		}

		Object.keys(this.categorizedData).forEach((key) => {
			this.dataPoints.push({category: key, amount: parseFloat(this.categorizedData[key])});
		});
	}

	getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	render() {
		this.addData();
		return (
			<ResponsiveContainer width="50%" height={550} className="pie-chart-wrapper col-sm-6 col-lg-6">
				<PieChart >
				  <Pie data={this.dataPoints} dataKey="amount" nameKey="category" cx="50%" cy="50%" outerRadius={225} fill="#8884d8" label>
						{this.dataPoints.map((value, index) => {
							return <Cell key={Math.random()} fill={this.getRandomColor()}/>
						})}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
		);
	}
}

export const PieChart1 = connect(mapStateToProps)(PieChartClass);
