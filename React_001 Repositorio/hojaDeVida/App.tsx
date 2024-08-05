import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';

const image = { uri: 'https://i.pinimg.com/564x/ee/7a/87/ee7a8738c038f842874120407e83b97b.jpg' };

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://e7.pngegg.com/pngimages/648/756/png-clipart-curriculum-vitae-job-hunting-chin-nose-jaw-don-riggio-template-face-thumbnail.png",
        }}
      />
      <View style={styles.titulo}>
        <Text style={styles.tituloText}>Ana Mendoza Cortes</Text>
        <Text style={styles.tituloText2}>Aprendiz SENA</Text>
      </View>
      <View style={styles.informacion}>
        <Text style={styles.informacionText1}>Contacto:</Text>
        <Text style={[styles.informacionText2, styles.contactText]}>Teléfono: 311 874 56 78</Text>
        <Text style={[styles.informacionText2, styles.contactText]}>Correo: anasofia.mendoza@misena.edu.co</Text>
        <Text style={[styles.informacionText2, styles.contactText]}>Dirección: Calle 2 Sur #11 c 25 Barrio Policarpa</Text>
        <Text style={styles.informacionText1}>Sobre mí:</Text>
        <Text style={styles.informacionText2}>
          Tengo conocimientos fundamentales sobre distintos lenguajes de programación (Python, Java, JavaScript, HTML, CSS),
          manejo de diferentes entornos de desarrollo (Visual Studio, NetBeans) y creación de bases de datos SQL (Workbench, PhpMyAdmin).
        </Text>
        <Text style={styles.informacionText2}>
          Responsable, buen desempeño en trabajos en equipo, eficiente y recursiva, siempre en una búsqueda constante de aprendizaje.
          Brindar soluciones e información veraz a las situaciones que se presenten.
        </Text>
        <Text style={styles.informacionText1}>Aptitudes y certificaciones:</Text>
        <Text style={styles.informacionText2}>Técnico en Programación de software</Text>
        <Text style={styles.informacionText2}>Nivel Inglés A1-A2</Text>
        <Text style={styles.informacionText2}>Analisis y desarrollo de Bases de datos</Text>
        <Text style={styles.informacionText2}>técnologo en análisis y desarrollo de software</Text>
        <Text style={styles.informacionText2}>Certificación  en Telecomunicaciones dee Cisco</Text>
        <Text style={styles.informacionText2}>Networking</Text>



      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  logo: {
    marginTop: 20,
    marginLeft: 20,
    width: 120,
    height: 120,
    position: 'absolute',
    borderRadius: 100,
  },
  titulo: {
    height: 80,
    padding: 20,
    backgroundColor: '#40BAC2',
    marginTop: 40,
    width: "56%",
    marginLeft: 150,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
  },
  tituloText2: {
    fontSize: 14,
    color: 'white',
  },
  informacion: {
    padding: 20,
    backgroundColor: '#40BAC2',
    marginTop: 40,
    width: "90%",
    borderRadius: 20,
   
    marginLeft: 22,
    opacity: 0.6,
  },
  informacionText1: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
    textAlign:"center",
  },
  informacionText2: {
    fontSize: 15,
    color: 'white',
    marginBottom: 8,
    
  },
  contactText: {
    marginBottom: 2, 
  },
});

export default App;