import React ,{Component} from "react"
import Child1 from "./Child1"


class Counter extends Component{
    constructor(props){
        super(props)
        this.state={
            count:0
        };
    }

    // handleCallback = (childData) =>{
    //     this.setState({count: childData})
    // }
    // incr=()=>{

    //     this.setState(
    //         {
    //             count:this.state.count+1
    //         }
    //     )

    // }
    render()
    {
        return(
            <>
            <h1>Counter of Parent   {this.state.count}</h1>
        
            <Child1 Inc={() => this.setState({count: this.state.count + 1})} data={this.state.count} />
            {/* <Child1 parentCallback = {this.handleCallback}/>
            <h1>value of count:{this.state.count}</h1>
             */}
            
            </>
        )
    }

}
export default Counter