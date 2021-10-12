// https://www.npmjs.com/package/react-native-table-component
import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
 
export default class GridsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Item Code', 'Name', 'Price', 'Qty', 'Amt', 'Details'],
      tableData: [
        ['1001', 'yellow boti 20 Kg', '1000', '4', '4000', 'click me!'],
        ['1001', 'yellow boti 20 Kg', '1000', '4', '4000', 'click me!'],
        ['1001', 'yellow boti 20 Kg', '1000', '4', '4000', 'click me!'],
        ['1001', 'yellow boti 20 Kg', '1000', '4', '4000', 'click me!']
      ]
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>button</Text>
        </View>
      </TouchableOpacity>
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 5 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}

// '#FFF1C1' - original
// row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
 
 //#fff, #000000
//  #ECD574  - looks good
//#C2C7C2 - blue
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});
