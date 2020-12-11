import React, { useState } from "react";
import "./App.css";
import { Jumbotron } from "react-bootstrap";
import { GrPrevious, GrNext } from "react-icons/gr";
import { data } from "./data.js";

export default function Pagination({ Lastpage }) {
	const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]); // List to show
	const [time, setTime] = useState(0); //
	const [current, setCurrent] = useState(1); //show current page
	const [color, setColor] = useState(1); //set Color to current page
	const [last, setLast] = useState(0); //button to disable in last page
	const { ll } = data(1);
	// list of item
	const [listitem, setListitem] = useState(ll);
	console.log(listitem);
	//const [pages, setPages] = useState(pg); //id
	//const [toshow, setToshow] = useState(10); // show no of item in page
	// to set color
	const chase = (i) => {
		setCurrent(i);
		setColor(i);
		//load pages
		console.log(i);
		var gi = i % 11;
		if (gi === 0) {
			gi = 1;
		}
		const { ll } = data(gi);
		setListitem(ll);
	};
	// to move previous number of set in range 10
	const previous = () => {
		var check = list[8] - 9;
		if (check !== 0) {
			var b = [];
			// console.log(list);
			var j;
			var lite = list[0] - 1;
			for (j = 0; j < 9; j++) {
				b.push(lite);
				lite = lite - 1;
			}
			setLast(0);
			b.sort();
			setList(b);
			setTime(time - 1);
		}
	};
	// to move next number of set in range 10
	const next = () => {
		var a = [];
		var j;
		var lite = list[8] + 1;

		for (j = 0; j < 9 && lite <= Lastpage; j++) {
			a.push(lite);
			lite = lite + 1;
		}
		if (lite >= Lastpage) {
			console.log(lite);
			setLast(1);
		}
		setList(a);
		setTime(time + 1);
	};
	return (
		<div>
			<p className="center">Feel the coding time</p>
			{listitem.map((item) => {
				return (
					<Jumbotron
						style={{
							marginLeft: "60px",
							marginRight: "60px",
							padding: "5px",
						}}
					>
						<h5>{item.Title}</h5>
						<p>{item.Body}</p>
					</Jumbotron>
				);
			})}

			<div className="center">page {current}</div>
			<div className="center">
				<div>
					      
					<button
						disabled={!time}
						onClick={previous}
						className="button1"
					>
						<GrPrevious color="black" size={20} />
					</button>
					{list.map((page) => {
						return (
							<button
								key={page}
								onClick={() => chase(page)}
								className="number"
								style={{
									backgroundColor:
										`${page}` === `${color}`
											? "#21252954"
											: "white",
									color:
										`${page}` === `${color}`
											? "black"
											: "black",
								}}
							>
								{page}
							</button>
						);
					})}
					<button onClick={next} disabled={last} className="button1">
						<GrNext color="black" size={20} />
					</button>
					    
				</div>
			</div>
		</div>
	);
}
