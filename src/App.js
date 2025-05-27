import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Image, Alert } from 'react-native';

const Shivaan = () => {
  const [greeting, setGreeting] = useState("Hey Varun bro 👋");
  const [status, setStatus] = useState("Shivaan is listening...");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning bro ☀️");
    else if (hour < 18) setGreeting("Good afternoon bro ☀️");
    else setGreeting("Good evening bro 🌙");
  }, []);

  const handleSpeak = () => {
    Alert.alert("🧞‍♂️ Shivaan says", "Bro, I’ve already tracked your sleep and budget today. Want to hear it?");
    setStatus("Analyzing your day... 📊");
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/genie.png')}
        style={styles.image}
      />
      <Text style={styles.greeting}>{greeting}</Text>
      <Text style={styles.status}>{status}</Text>
      <Button title="Ask Shivaan" onPress={handleSpeak} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#0a0a23' },
  greeting: { fontSize: 22, color: '#fff', marginBottom: 10 },
  status: { fontSize: 16, color: '#aaa', marginBottom: 20 },
  image: { width: 120, height: 120, marginBottom: 20 }
});

export default Shivaan;
