// // components/EstimatePDF.jsx
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// const styles = StyleSheet.create({
//   page: { padding: 30 },
//   section: { marginBottom: 10 },
//   heading: { fontSize: 18, marginBottom: 10 },
//   item: { fontSize: 12, marginBottom: 4 },
// });

// const EstimatePDF = ({ name, email , estimate}) => (
//   <Document>
//     <Page size="A4" style={styles.page}>
//       <Text style={styles.heading}>Estimate for {name}</Text>
//       <Text>Email: {email}</Text>

//       <View style={styles.section}>
//         <Text>Total Estimate: {estimate || 0} hours</Text>
//       </View>
//     </Page>
//   </Document>
// );

// export default EstimatePDF;
