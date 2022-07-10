import React, {useState} from 'react';
import {
  FlatList,
  RefreshControl,
  ScrollView,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

// Using a ScrollView
// const List = () => {
//   const [items, setItems] = useState([
//     {name: 'Item 1'},
//     {name: 'Item 2'},
//     {name: 'Item 3'},
//     {name: 'Item 4'},
//     {name: 'Item 5'},
//     {name: 'Item 6'},
//     {name: 'Item 7'},
//     {name: 'Item 8'},
//     {name: 'Item 9'},
//     {name: 'Item 10'},
//   ]);

//   const [refreshing, setRefreshing] = useState(false);
//   const [itemCount, setItemCount] = useState(11);

//   const handelRefresh = () => {
//     setRefreshing(true);
//     setItemCount(itemCount + 1);
//     setItems([
//       ...items,
//       {
//         name: `Item ${itemCount}`,
//       },
//     ]);
//     setRefreshing(false);
//   };

//   return (
//     <ScrollView
//       style={styles.body}
//       refreshControl={
//         <RefreshControl refreshing={refreshing} onRefresh={handelRefresh} />
//       }>
//       {items.map((item, index) => (
//         <View style={styles.container} key={index}>
//           <Text style={{fontSize: 20, color: 'white'}}>{item.name}</Text>
//         </View>
//       ))}
//     </ScrollView>
//   );
// };

// Using a FlatList
// const List = () => {
//   const [items, setItems] = useState([
//     {name: 'Item 1'},
//     {name: 'Item 2'},
//     {name: 'Item 3'},
//     {name: 'Item 4'},
//     {name: 'Item 5'},
//     {name: 'Item 6'},
//     {name: 'Item 7'},
//     {name: 'Item 8'},
//     {name: 'Item 9'},
//     {name: 'Item 10'},
//   ]);

//   const [refreshing, setRefreshing] = useState(false);
//   const [itemCount, setItemCount] = useState(11);

//   const handelRefresh = () => {
//     setRefreshing(true);
//     setItemCount(itemCount + 1);
//     setItems([
//       ...items,
//       {
//         name: `Item ${itemCount}`,
//       },
//     ]);
//     setRefreshing(false);
//   };

//   return (
//     <View style={styles.body}>
//       <FlatList
//         keyExtractor={(item, index) => index.toString()}
//         data={items}
//         refreshControl={
//           <RefreshControl refreshing={refreshing} onRefresh={handelRefresh} />
//         }
//         renderItem={({item}) => (
//           <View style={styles.container}>
//             <Text style={{color: 'white', fontSize: 20}}>{item.name}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// Using a SectionList

// const List = () => {
//   const DATA = [
//     {
//       title: 'Main dishes',
//       data: ['Pizza', 'Burger', 'Risotto'],
//     },
//     {
//       title: 'Sides',
//       data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
//     },
//     {
//       title: 'Drinks',
//       data: ['Water', 'Coke', 'Beer'],
//     },
//     {
//       title: 'Desserts',
//       data: ['Cheese Cake', 'Ice Cream'],
//     },
//   ];
//   return (
//     <View style={styles.body}>
//       <SectionList
//         sections={DATA}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({item}) => (
//           <View>
//             <Text style={{textAlign: 'center', fontSize: 25}}>{item}</Text>
//           </View>
//         )}
//         renderSectionHeader={({section}) => (
//           <View style={styles.container}>
//             <Text style={{color: 'white', fontSize: 20}}>{section.title}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// Extra practise
const List = () => {
  const [itemCount, setItemCount] = useState(2);
  const [Refreshing, setRefreshing] = useState(false);

  const [DATA, setDATA] = useState([
    {
      title: 'Title 1',
      data: [`Item 1-1`, 'Item 1-2', 'Item 1-3'],
    },
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    setItemCount(prev => prev + 1);
    setDATA([
      ...DATA,
      {
        title: `Title ${itemCount}`,
        data: [
          `Item ${itemCount}-1`,
          `Item ${itemCount}-2`,
          `Item ${itemCount}-3`,
        ],
      },
    ]);
    setRefreshing(false);
  };

  return (
    <View style={styles.body}>
      <SectionList
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={Refreshing} />
        }
        sections={DATA}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <View>
            <Text style={{textAlign: 'center', fontSize: 25}}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => (
          <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 20}}>{section.title}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
    width: '100%',
  },
  container: {
    backgroundColor: 'blue',
    padding: 30,
    width: '90%',
    alignItems: 'center',
    margin: 20,
  },
});

export default List;
