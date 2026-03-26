import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Text, Button } from 'react-native-paper';

export default function App() {
  const [input, setInput] = React.useState('');
  const [result, setResult] = React.useState('0');

  const handlePress = (value) => {
    setInput((prev) => prev + value);
  };

  const clear = () => {
    setInput('');
    setResult('0');
  };

  const calculate = () => {
    try {
      const res = eval(input);
      setResult(String(res));
    } catch {
      setResult('Erro');
    }
  };

  return (
    <PaperProvider>
      <View style={styles.container}>

        {/* DISPLAY */}
        <View style={styles.display}>
          <Text variant="headlineMedium">{input || '0'}</Text>
          <Text variant="headlineLarge">{result}</Text>
        </View>

        {/* BOTÕES */}
        <View style={styles.row}>
          <Button mode="contained" onPress={clear}>C</Button>
          <Button mode="contained" onPress={() => handlePress('/')}>/</Button>
          <Button mode="contained" onPress={() => handlePress('*')}>*</Button>
          <Button mode="contained" onPress={() => handlePress('-')}>-</Button>
        </View>

        <View style={styles.row}>
          <Button mode="contained" onPress={() => handlePress('7')}>7</Button>
          <Button mode="contained" onPress={() => handlePress('8')}>8</Button>
          <Button mode="contained" onPress={() => handlePress('9')}>9</Button>
          <Button mode="contained" onPress={() => handlePress('+')}>+</Button>
        </View>

        <View style={styles.row}>
          <Button mode="contained" onPress={() => handlePress('4')}>4</Button>
          <Button mode="contained" onPress={() => handlePress('5')}>5</Button>
          <Button mode="contained" onPress={() => handlePress('6')}>6</Button>
          <Button mode="contained" onPress={calculate}>=</Button>
        </View>

        <View style={styles.row}>
          <Button mode="contained" onPress={() => handlePress('1')}>1</Button>
          <Button mode="contained" onPress={() => handlePress('2')}>2</Button>
          <Button mode="contained" onPress={() => handlePress('3')}>3</Button>
          <Button mode="contained" onPress={() => handlePress('0')}>0</Button>
        </View>

      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  display: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#eee',
    borderRadius: 10,
    alignItems: 'flex-end',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});