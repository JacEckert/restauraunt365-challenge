import React, {Component} from "react"
//////////////////////
//  Restauraunt365  //
//      Calculator  //
//      Challenge  //
//////////////////////

////////////
// Step 7 //
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
		this.checkRegEx = this.checkRegEx.bind(this)
		this.checkRegExLong = this.checkRegExLong.bind(this)
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
	
	//Splits an array on ',' and \n then returns the values added
		//to zero if they're valid numbers
		//"valid number" = an actual number, <= 1000, positive
	addAll(inString) {
		let noNewDelim = this.checkRegEx(inString)
		let noNewDelimLong = this.checkRegExLong(noNewDelim)
		let noNewLine = noNewDelimLong.replace(/\n/g, ",")
		
		let array = noNewLine.split(",")
		let result = 0
		let negatives = []
		array.map(item => {
			let num = Number(item)
			if(!isNaN(num) && num <= 1000)
				if(num >= 0)
					result += num
				else
					negatives.push(num)
		})
		if(negatives[0])
			alert("\"" + inString + "\" has negatives: " + negatives)
		return [array,result]
	}
	
	//searches for new delimeter by regex
		//if found, replaces all instances with ,
		//else, returns original string
	checkRegEx(inString) {
		let regEx = /\/\/.\n/
		let test = inString.search(regEx)
		if(test !== -1) {
			let delim = inString.charAt(2)
			let removeDelim = inString.replace(regEx, ",")
			return removeDelim.replace(new RegExp(delim, "g"), ",")
		}
		else
			return inString
	}
	
	checkRegExLong(inString) {
		let regEx = /\/\/\[.+\]\n/
		let test = inString.search(regEx)
		if(test !== -1) {
			let delim = inString.match(regEx).toString()
			let toCut = delim.substring(3, delim.length-2)
			let removeDelim = inString.replace(regEx, ",")
			return removeDelim.replace(RegExp(toCut, "g"), ",")
		}
		else
			return inString
	}
	
	render() {
	
		let tests = ["20",
			"1,5000",
			"1,5000,100\n40",
			"1,-3",
			"-1,3",
			"1.1",
			"1.1,2.2,2",
			"one",
			"one,two",
			"1,2two,three",
			"",
			"//a\n1a3\ncata3b4a2",
			"//aa\n1a3\ncaata3b4aa2"
		]
		tests.map(item => {
			console.log(item + " : " + this.addAll(item))
		})
	
	
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<textarea
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