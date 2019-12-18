import React, { Component } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import CanvasJSReact from '../canvas/CanvasJSChart';
import { connect } from "react-redux";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;


const mapStateToProps = state => {
	return {
		expenses: state.expenses
	}
}

class PieChartClass extends Component {

	constructor(props) {
		super(props);
		this.dataPoints = [
			{name: "shopping", value: 0},
			{name: "dining", value: 0},
			{name: "fuel", value: 0},
			{name: "entertainment", value: 0},
			{name: "other", value: 0}
		];
	}

	getRandomIndex() {
		return Math.round(Math.random() * (this.dataPoints.length - 1));
	}

	addData() {
		for (var i = 0; i < this.props.expenses.length; i++) {
			const randomIdx = this.getRandomIndex();
			this.dataPoints[randomIdx].value += parseFloat(this.props.expenses[i].amount)
		}
	}

	getRandomColor() {
	  var letters = '0123456789ABCDEF';
	  var color = '#';
	  for (var i = 0; i < 6; i++) {
	    color += letters[Math.floor(Math.random() * 16)];
	  }
	  return color;
	}

	renderCustomizedLabel = ({
	  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
	}) => {
		const RADIAN = Math.PI / 180;
	  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
	  const x = cx + radius * Math.cos(-midAngle * RADIAN);
	  const y = cy + radius * Math.sin(-midAngle * RADIAN);

	  return (
	    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
	      {`${(percent * 100).toFixed(0)}%`}
	    </text>
	  );
	};

	render() {
		const data01 = [
		  {
		    "name": "Group A",
		    "value": 400
		  },
		  {
		    "name": "Group B",
		    "value": 300
		  },
		  {
		    "name": "Group C",
		    "value": 300
		  },
		  {
		    "name": "Group D",
		    "value": 200
		  },
		  {
		    "name": "Group E",
		    "value": 278
		  },
		  {
		    "name": "Group F",
		    "value": 189
		  }
		];
		this.addData();
		return (
			<div>
				<PieChart width={500} height={500}>
				  <Pie data={this.dataPoints} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={150} fill="#8884d8" label>
						{this.dataPoints.map((value, index) => {
							return <Cell key={Math.random()} fill={this.getRandomColor()}/>
						})}
					</Pie>
				</PieChart>
			</div>
		);
	}
}

export const PieChart1 = connect(mapStateToProps)(PieChartClass);
