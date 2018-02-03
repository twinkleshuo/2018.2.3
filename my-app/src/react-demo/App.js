import React,{Component} from 'react';
class App extends Component{
	constructor(){
		super();
		//初始化数据
		//只要this.stata的数据发生变化，就会更新数据
		this.state = {
			arr:[1,2,3,4,5,6]
		}
	}
	click = () =>{
			let {arr} = this.state;
			let arr2 = arr.concat();
			arr2.push(Math.random());
			this.setState({
				arr:arr2
			})
		}
	render(){
		return(
			<div>
				<div> FUCK !!!!!你好世界!!!!!!!!!!!</div>
				<button onClick={this.click}>添加</button>
				<ul>
					{
						this.state.arr.map((e,i)=><li key ={i}>{e}</li>)
					}
				</ul>
			</div>
			
		)
	}
	
}

export default App;
if(module.hot){
	module.hot.accept();
}