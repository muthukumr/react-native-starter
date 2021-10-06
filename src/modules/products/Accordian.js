import React, {Component, useCallback} from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight } from "react-native";
import { Colors } from './Colors';
import Icon from "react-native-vector-icons/MaterialIcons";
import NumericInput,{ calcSize } from 'react-native-numeric-input';
import CheckCircle from './CheckCircle';
import NumInput from './NumInput';

import { useSelector, useDispatch } from 'react-redux';
import TOGGLE_GREEN from '../../store/actions/products';
import { toggleGreen } from '../../store/actions/products';
import { connect } from 'react-redux'
import Product from '../../models/product';

var selectedItems = [];
var quantity = 0;

export default class Accordian extends Component{
    

    constructor(props) {
        super(props);
        this.state = {
          data: props.data,
          expanded : false,
          checked: true,
          temp_val: 0,
        }

//        if (Platform.OS === 'android') {
//            UIManager.setLayoutAnimationEnabledExperimental(true);
//        }
    };




  addToCartHandler = (productId) => {
      console.log("In add to cart handler function")
      toggleGreen(productId);
    //   this.props.dispatch(toggleGreen(productId));
      //dispatch in class component
    //   dispatch({ type: TOGGLE_GREEN, productId})
    //   products.toggleGreen(state, this.state.productId);
      
      //dispatch in functional component
    //   const { dispatch } = this.props; 
        // dispatch(toggleGreen(this.state.productId));
  };


  addOrderItemEventHandler(item_code, quantity, amount){
        console.log("add Order Item Event Handler called")
        item = new Product(item_code, quantity, amount)      
        console.log(item)
        // const cart = useSelector(state => state.products.cart)
        // const isToBeAdded = cart.some(product => product.id === item_code);

        // newArray = [...selectedItems.filter()]
        // selectedItems.push(item);
        // console.log(selectedItems);    
  }

  render() {

    return (
       <View>
            <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
                <Text style={[styles.title]}>{this.props.title}</Text>
                <Icon name={this.state.expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} />
            </TouchableOpacity>
            <View style={styles.parentHr}/>
            {
                this.state.expanded &&
                <View style={{}} key = "{props.title}">
                    <FlatList
                    key = {item.data.id}
                    data={this.state.data}
                    numColumns={1}
                    scrollEnabled={false}
                    renderItem={({item, index}) =>
                        <View>
                            <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} >
                            {/* <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress={()=>this.onClick(index)}> */}
                                <Text key = {item.id} style={[styles.font, styles.itemInActive]} >{"Item Code:"} {item.item_code}{"\n"}{item.product_name}{"\t"}{"\t"}{item.type}</Text>
                                <NumInput id = {item.id} />            
                                <CheckCircle id = {item.id} code = {item.item_code} name = {item.product_name} type = {item.type} unit_price = {item.unit_price}
                                checked={false} 
                                addOrderItem={()=>this.addOrderItemEventHandler(item.id, 10 , item.unit_price)} />
                            </TouchableOpacity>
                            <View style={styles.childHr}/>
                        </View>
                    }/>
                </View>
            }

       </View>
    )
  }

//   onNumChangeHandler = (value) => {
//       this.setState(value);
//       console.log("calling num change handler")
//       console.log("order quantity ", value)

//   }

  onChangeHandler = () => {
      this.setState({checked : !this.state.checked})
  }


  onClick=(index)=>{
    const temp = this.state.data.slice()
    temp[index].value = !temp[index].value
    this.setState({data: temp})
  }

  toggleExpand=()=>{
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({expanded : !this.state.expanded})
  }

}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    button:{
        width:'100%',
        height:54,
        alignItems:'center',
        paddingLeft:35,
        paddingRight:35,
        fontSize: 12,
    },
    title:{
        fontSize: 14,
        fontWeight:'bold',
        color: Colors.DARKGRAY,
    },
    itemActive:{
        fontSize: 12,
        color: Colors.GREEN,
    },
    itemInActive:{
        fontSize: 12,
        color: Colors.DARKGRAY,
    },
    btnActive:{
        borderColor: Colors.GREEN,
    },
    btnInActive:{
        borderColor: Colors.DARKGRAY,
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: Colors.CGRAY,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: Colors.GRAY,
        height:100
    },
    parentHr:{
        height:1,
        color: Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: Colors.GREEN,
    },
    colorInActive:{
        borderColor: Colors.DARKGRAY,
    }
});





// import React, {Component, useState, useEffect} from 'react';
// import { View, TouchableOpacity, Text, FlatList, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableHighlight} from "react-native";
// import { Colors } from './Colors';
// import Icon from "react-native-vector-icons/MaterialIcons";
// import NumericInput,{ calcSize } from 'react-native-numeric-input';

// //export default class Accordian extends Component{

// export default function Accordian(props) {
//     const [listData, setListData] = useState([]);
//     const [data, setData] = useState();
//     const [expanded, setExpanded] = useState(false);
//     const [selectedCheckbox, setSelectedCheckbox] = useState(false);

//     var [counter, setCounter] = useState(1);

//     console.log("I am in accordian");
//     console.log(props.title);
//     console.log(props.data);

//     onClickHandler=()=>{
//         setCounter(counter++)
//         console.log("I am in accordian - click handler count", counter++)
//           console.log("onclick index 1 clicked")
//         // console.log("the index is", index)
//         const temp = listData.slice()
//         temp[1].value = !temp[1].value
//         setData(temp)
//         console.log(data)
// //        this.setState({data: temp})
//       }

//       onClick=(index)=>{
//           console.log("clicked")
//         // console.log("the index is", index)
//         const temp = listData.slice()
//         temp[index].value = !temp[index].value
//         setData(temp)
//         console.log(data)
// //        this.setState({data: temp})
//       }

//       toggleExpand=()=>{
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setExpanded(!expanded)
// //        this.setState({expanded : !this.state.expanded})
//       }

//     const handlePress = () => {
//         setSelectedCheckbox(!selectedCheckbox)
//     }

//     useEffect(() => {

//           var newArrayData = props.data;

//           console.log("I am in home view - END");
          
//           setListData(...listData, newArrayData);
//         });


//     return (
//        <View>
//             <TouchableOpacity style={styles.row} onPress={()=>this.toggleExpand()}>
//                 <Text style={[styles.title]}>{props.title}</Text>
//                 <Icon name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={Colors.DARKGRAY} />
//             </TouchableOpacity>
//             <View style={styles.parentHr}/>
//             {
//                 expanded &&
//                 <View style={{}}>
//                     <FlatList
//                     keyExtractor={item => item.item_code}
//                     data={this.data}
//                     numColumns={1}
//                     scrollEnabled={false}
//                     renderItem={({item, index}) =>
//                         <View>
//                             <TouchableOpacity style={[styles.childRow, styles.button, item.value ? styles.btnActive : styles.btnInActive]} onPress= {onClickHandler}>
//                                 <Text style={[styles.font, styles.itemInActive]} >{"Item Code:"} {item.item_code}{"\n"}{item.product_name}{"\t"}{"\t"}{item.type}</Text>
//                                 <NumericInput
//                                             value={this.state.value}
//                                             onChange={value => this.setState({value})}
//                                             totalWidth={130}
//                                             totalHeight={30}
//                                             iconSize={15}
//                                             step={1}
//                                             valueType='real'
//                                             rounded
//                                             textColor='#B0228C'
//                                             iconStyle={{ color: 'white' }}
//                                             rightButtonBackgroundColor='#F7007C'
//                                             leftButtonBackgroundColor='#B1001D'/>
//                                 <TouchableHighlight
//                                   activeOpacity={0.6}
//                                   underlayColor="#DDDDDD"
//                                   onPress={() => console.log('this item is added !')}>
//                                 <Icon name={'check-circle'} size={24} color={ selectedCheckbox ? Colors.GREEN :  Colors.LIGHTGRAY } onClick = { onChangeHandler = () => { console.log("this item added")} } />
//                                 </TouchableHighlight>

//                             </TouchableOpacity>
//                             <View style={styles.childHr}/>
//                         </View>
//                     }/>
//                 </View>
//             }

//        </View>
//     )
// }

// const styles = StyleSheet.create({
//     container:{
//         justifyContent: 'center',
//         alignItems: 'center'
//     },
//     button:{
//         width:'100%',
//         height:54,
//         alignItems:'center',
//         paddingLeft:35,
//         paddingRight:35,
//         fontSize: 12,
//     },
//     title:{
//         fontSize: 14,
//         fontWeight:'bold',
//         color: Colors.DARKGRAY,
//     },
//     itemActive:{
//         fontSize: 12,
//         color: Colors.GREEN,
//     },
//     itemInActive:{
//         fontSize: 12,
//         color: Colors.DARKGRAY,
//     },
//     btnActive:{
//         borderColor: Colors.GREEN,
//     },
//     btnInActive:{
//         borderColor: Colors.DARKGRAY,
//     },
//     row:{
//         flexDirection: 'row',
//         justifyContent:'space-between',
//         height:56,
//         paddingLeft:25,
//         paddingRight:18,
//         alignItems:'center',
//         backgroundColor: Colors.CGRAY,
//     },
//     childRow:{
//         flexDirection: 'row',
//         justifyContent:'space-between',
//         backgroundColor: Colors.GRAY,
//         height:100
//     },
//     parentHr:{
//         height:1,
//         color: Colors.WHITE,
//         width:'100%'
//     },
//     childHr:{
//         height:1,
//         backgroundColor: Colors.LIGHTGRAY,
//         width:'100%',
//     },
//     colorActive:{
//         borderColor: Colors.GREEN,
//     },
//     colorInActive:{
//         borderColor: Colors.DARKGRAY,
//     }

// });