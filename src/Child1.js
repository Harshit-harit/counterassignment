import React ,{Component} from "react"
import Child2 from "./Child2"

class Child1 extends Component{

    // constructor(props){
    //     super(props)
    //     this.state={
    //         count:0
    //     };
    // }

    
    // incr=()=>{

    //     this.setState(
    //         {
    //             count:this.state.count+1
    //         }
    //     )

    // }
    // onTrigger = (event) => {
    //     this.props.parentCallback(this.state.count);
    //     event.preventDefault();
    // }



    render()
    {
        return(
            <>
            {/* <h1>Current count Parent:{this.state.count}</h1>
            <button onClick={() =>this.incr}> Increment</button> */}
            <button onClick={this.props.Inc}>Click</button>
            <Child2 value={this.props.data} />

            </>
        )
    }

}
export default Child1