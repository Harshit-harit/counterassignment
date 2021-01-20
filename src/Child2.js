// import React ,{Component} from "react"

// class Child2 extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         };
//     }
//     // incr=()=>{

//     //     this.setState(
//     //         {
//     //             count:this.state.count+1
//     //         }
//     //     )

//     // }
//     render()
//     {
//         return(
//             <>
//          <div>{this.props.item}</div>

//            </>
//         )
//     }

// }
// export default Child2




import React from "react";

function Child2(props) {
  return <div>
      <p>Counter of Child : {props.value}
      </p>
      </div>;
}

export default Child2;
