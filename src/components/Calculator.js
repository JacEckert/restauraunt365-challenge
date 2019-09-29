import React, {Component} from "react"
//////////////////////
//  Restauraunt365  //
//      Calculator  //
//      Challenge  //
//////////////////////

////////////
// Step 3 //
////////////

class Calculator extends Component {
	constructor() {
		super()
		//str = input string
		//arr = delimiter-split input string array
		//out = number result
		this.state = {
			str: "",
			arr: [],
			out: ""
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.addAll = this.addAll.bind(this)
	}
	
	//fetches from input field on submit, calls adding function
		//and changes state values to correct values
	handleSubmit(event) {
		if(event) event.preventDefault()
		let [input] = event.target.children
		let result = this.addAll(input.value)
		this.setState({
			str: input.value,
			arr: result[0],
			out: result[1]
		})
	}
	
	//Splits an array on ',' then returns the values
		//to zero if they're valid numbers
	addAll(inString) {
		var noNewLine = inString.replace("\\n", ",")
		
		let array = noNewLine.split(",")
		let result = 0
		array.map(item => {
			let num = Number(item)
			if(!isNaN(num))
				result += num
		})
		
		return [array,result]
	}
	
	render() {
	
		let tests = ["20",
			"1,5000",
			"1,5000,100",
			"1,-3",
			"-1,3",
			"-1,-3,-3",
			"1.1",
			"1.1,2.2,2",
			"one",
			"one,two",
			"1,2two,three",
			""
		]
		tests.map(item => {
			{console.log(item + " : " + this.addAll(item))}
		})
	
	
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<input
						placeholder="Input String"
						type="text"
					/>
					<button>Submit</button>
				</form>
					
				<p>Input: {this.state.str}</p>
				Array: <ul>{this.state.arr.map(item => {
					return <li>{item}</li>
				})}</ul>
				<p>Output: {this.state.out}</p>
				
			</div>
		)
	}
	
}


export default Calculator