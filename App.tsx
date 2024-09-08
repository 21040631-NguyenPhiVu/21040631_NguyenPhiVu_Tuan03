import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  const [a, setA] = useState<string>('0');
  const [b, setB] = useState<string>('0');
  const [c, setC] = useState<string>('0');
  const [result, setResult] = useState<string>('');

  const giaiPhuongTrinh = () => {
    const aNum = Number(a);
    const bNum = Number(b);
    const cNum = Number(c);

    const delta = bNum * bNum - 4 * aNum * cNum;

    if (delta > 0) {
      const x1 = (-bNum + Math.sqrt(delta)) / (2 * aNum);
      const x2 = (-bNum - Math.sqrt(delta)) / (2 * aNum);
      setResult(`Phương trình có 2 nghiệm phân biệt: x1 = ${x1}, x2 = ${x2}`);
    } else if (delta === 0) {
      const x = -bNum / (2 * aNum);
      setResult(`Phương trình có nghiệm kép: x = ${x}`);
    } else {
      setResult('Phương trình vô nghiệm');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Giải phương trình bậc 2</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nhập giá trị a:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={a}
          onChangeText={(text) => setA(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nhập giá trị b:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={b}
          onChangeText={(text) => setB(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nhập giá trị c:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={c}
          onChangeText={(text) => setC(text)}
        />
      </View>
      <Button title="Tính toán" onPress={giaiPhuongTrinh} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 8,
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    fontSize: 16,
  },
  result: {
    marginTop: 16,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default App;