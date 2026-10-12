//MAST5112 POE PART 2 - Chef's Menu Manager
//Student Name: Atlegang Sweetness Mbonani
//Student NO: ST10515450
//lecturer: Mr.Steven.Ndaye
//Date of Submission: 10 October 2026
``
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';

export default function App() {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [menuItems, setMenuItems] = useState([]);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let e = {};
    if (!dishName.trim()) e.dishName = 'Required';
    if (!description.trim()) e.description = 'Required';
    if (!course.trim()) e.course = 'Required';
    if (!price.trim()) e.price = 'Required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const addItem = () => {
    if (!validate()) return;
    setMenuItems([...menuItems, {
      id: Date.now().toString(),
      dishName, description,
      course: course.toUpperCase(),
      price
    }]);
    setDishName(''); setDescription(''); setCourse(''); setPrice(''); setErrors({});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chef's Menu Manager</Text>
      <Text style={styles.subtitle}>Christoffel's Kota Joint</Text>
      <View style={styles.form}>
        <Text style={styles.formTitle}>Add New Dish</Text>
        <Text style={styles.label}>Dish Name</Text>
        <TextInput style={[styles.input, errors.dishName && styles.inputError]} placeholder="e.g. Cheese Kota" value={dishName} onChangeText={setDishName} />
        <Text style={styles.label}>Description</Text>
        <TextInput style={[styles.input, errors.description && styles.inputError]} placeholder="e.g. Chips and cheese" value={description} onChangeText={setDescription} />
        <Text style={styles.label}>Course</Text>
        <TextInput style={[styles.input, errors.course && styles.inputError]} placeholder="Main" value={course} onChangeText={setCourse} />
        <Text style={styles.label}>Price</Text>
        <TextInput style={[styles.input, errors.price && styles.inputError]} placeholder="45" value={price} onChangeText={setPrice} keyboardType="numeric" />
        <TouchableOpacity style={styles.button} onPress={addItem}><Text style={styles.buttonText}>Add to Menu</Text></TouchableOpacity>
      </View>
      <Text style={styles.listTitle}>Menu Items ({menuItems.length})</Text>
      <FlatList data={menuItems} keyExtractor={i => i.id} renderItem={({item}) => (
        <View style={styles.card}><View style={styles.cardContent}>
          <Text style={styles.cardName}>{item.dishName} - R{item.price}</Text>
          <Text>{item.course}</Text><Text>{item.description}</Text>
        </View></View>
      )} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F0', padding: 20, paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#E67E22', textAlign: 'center' },
  subtitle: { textAlign: 'center', marginBottom: 15 },
  form: { backgroundColor: 'white', padding: 15, borderRadius: 15 },
  formTitle: { fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  label: { fontSize: 10, marginTop: 5 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10 },
  inputError: { borderColor: 'red' },
  button: { backgroundColor: '#E67E22', padding: 12, borderRadius: 10, marginTop: 10, alignItems: 'center' },
  buttonText: { color: 'white', fontWeight: 'bold' },
  listTitle: { fontWeight: 'bold', textAlign: 'center', marginTop: 15 },
  card: { backgroundColor: 'white', borderRadius: 10, marginTop: 8 },
  cardContent: { padding: 10, borderLeftWidth: 5, borderLeftColor: '#E67E22' },
  cardName: { fontWeight: 'bold' }
});
    
  