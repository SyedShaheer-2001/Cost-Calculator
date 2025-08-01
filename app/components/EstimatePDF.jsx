// components/EstimatePDF.jsx
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const EstimatePDF = ({ name, email, estimate, selectedData }) => {
  const totalDevHours = estimate;

  const nonDevHours = Math.floor(totalDevHours / 2.7);
  const summaryTime = totalDevHours + nonDevHours;
  const hourlyRate = 35; // You can change this if needed
  const developmentCost = summaryTime * hourlyRate;

  const today = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 11,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
  },
  date: {
    fontSize: 10,
    marginTop: 2,
    color: '#666',
  },
  summaryBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    borderBottom: '1px solid #ccc',
    paddingBottom: 10,
  },
  summaryCard: {
    width: '48%',
    backgroundColor: '#EAF2FB',
    paddingVertical: 10,
    paddingBottom:30,
    paddingTop:30,
    borderRadius: 4,
  },
  cardTitle: {
    fontSize: 11,
    color: '#174273',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#174273',
  },
  sectionHeading: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },
  table: {
    marginBottom: 14,
    paddingVertical: 6,
    borderTop: '1px solid #ccc',
  },
  tableSectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#174273',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
  },
  cell: {
    width: '70%',
  },
  cellRight: {
    width: '30%',
    textAlign: 'right',
  },
});


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Rough Estimate</Text>
          <Text style={styles.subtitle}>{name || 'App'}</Text>
          <Text style={styles.date}>{today}</Text>
        </View>

        {/* Cost Summary */}
        <View style={styles.summaryBox}>
          <View style={styles.summaryCard}>
            <Text style={styles.cardTitle}>Development cost</Text>
            <Text style={styles.cardValue}>${developmentCost.toFixed(0)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.cardTitle}>Summary time</Text>
            <Text style={styles.cardValue}>{summaryTime.toFixed(1)} h</Text>
          </View>
        </View>

        {/* Section Heading */}
        <Text style={styles.sectionHeading}>Summary</Text>

        {/* Development Time */}
        <View style={styles.table}>
          <Text style={styles.tableSectionTitle}>Development Time</Text>
          {selectedData.map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.questionTitle}</Text>
              <Text style={styles.cellRight}>
                {(item.mvpHours + item.additionalHours).toFixed(1)} h
              </Text>
            </View>
          ))}
        </View>

        {/* Non-Development Time */}
        <View style={styles.table}>
          <Text style={styles.tableSectionTitle}>Non-Development Time</Text>
          {[
            { label: 'Project setup', hours: 10.5 },
            { label: 'Architecture', hours: 44.0 },
            { label: 'Database', hours: 15.3 },
            { label: 'Network', hours: 12.1 },
            { label: 'Swagger', hours: 1.8 },
            { label: 'Meetings', hours: 11.1 },
            { label: 'CI', hours: 0.8 },
            { label: 'CD', hours: 1.2 },
            { label: 'Release Prep', hours: 2.5 },
            { label: 'Release to Production', hours: 1.3 },
          ].map((item, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{item.label}</Text>
              <Text style={styles.cellRight}>{item.hours.toFixed(1)} h</Text>
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
};

export default EstimatePDF;
