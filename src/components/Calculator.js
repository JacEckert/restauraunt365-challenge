import React, {Component} from "react"
//////////////////////
//  Restauraunt365  //
//      Calculator  //
//      Challenge  //
//////////////////////

////////////
// Step 1 //
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
		this.addTwo = this.addTwo.bind(this)
	}
	
	//fetches from input field on submit, calls adding function
		//and changes state values to correct values
	handleSubmit(event) {
		if(event) event.preventDefault()
		let [input] = event.target.children
		let result = this.addTwo(input.value)
		this.setState({
			str: input.value,
			arr: result[0],
			out: result[1]
		})
	}
	
	//Splits an array on ',' then returns the first two values
		//to zero if they're valid numbers
	addTwo(inString) {
		let array = inString.split(",")
		let result = 0
		if(array[0]) {
			let num2 = Number(array[0])
			if(!isNaN(num2))
				result+= num2
		}
		if(array[1]) {
			let num2 = Number(array[1])
			if(!isNaN(num2))
				result+= num2
		}
		
		return [array,result]
	}
	
	render() {
	
		let tests = ["20",
			"1,5000",
			"1,5000,100",
			"1,-3",
			"-1,3",
			"-1,-3",
			"1.1",
			"1.1,2.2",
			"one",
			"one,two",
			"one,two,three",
			""
		]
		tests.map(item => {
			{console.log(item + " : " + this.addTwo(item))}
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