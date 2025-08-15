// components/EstimatePDF.jsx
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const EstimatePDF = ({ name, email, estimate, selectedData , category, selectedPlatform}) => {
  const totalDevHours = estimate;

  const nonDevHours = Math.floor(totalDevHours / 2.7);
  const summaryTime = totalDevHours + nonDevHours;
  const hourlyRate = 35; 
  const developmentCost = summaryTime * hourlyRate;

  // 1. Define percentage weights for each task
const nonDevTasks = [
  { label: 'Project setup', weight: 0.10 },
  { label: 'Architecture', weight: 0.20 },
  { label: 'Database', weight: 0.12 },
  { label: 'Network', weight: 0.10 },
  { label: 'Swagger', weight: 0.05 },
  { label: 'Meetings', weight: 0.15 },
  { label: 'CI', weight: 0.05 },
  { label: 'CD', weight: 0.05 },
  { label: 'Release Prep', weight: 0.10 },
  { label: 'Release to Production', weight: 0.08 },
];

// 2. Normalize weights to ensure they sum to 1 (optional if already exact)
const totalWeight = nonDevTasks.reduce((acc, t) => acc + t.weight, 0);
const normalizedTasks = nonDevTasks.map(task => ({
  ...task,
  hours: parseFloat(((task.weight / totalWeight) * nonDevHours).toFixed(1)),
}));




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
  flex:{
    display:'flex'
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom:10,
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    paddingBottom:4,
  },
   category: {
    fontSize: 12,
    marginTop: 2,
    color: '#174273',
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
    width: '49%',
    backgroundColor: '#174273',
    paddingLeft: 20,
    paddingTop:30,
    paddingBottom:30,
    borderRadius: 4,
  },
  cardTitle: {
    fontSize: 11,
    color: '#ffffffff',
    marginBottom: 4,
  },
  cardValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffffff',
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
    marginBottom: 12,
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
  moduleBlock: {
  marginBottom: 10,
},

moduleTitle: {
  fontWeight: 'bold',
  color: '#D8216D',
  fontSize: 10,
},

moduleHours: {
  fontWeight: 'bold',
  color: '#174273',
},

featureText: {
  marginLeft: 10,
  fontSize: 10,
},

});


  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Rough Estimate</Text>
          
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.subtitle}>{name || 'Cost of your App'}</Text>
          <Text style={styles.date}>{today}</Text>
          </View>

            <Text style={styles.category}>Your {category} App</Text>
        </View>

        {/* Cost Summary */}
        <View style={styles.summaryBox}>
          <View style={styles.summaryCard}>
            <Text style={styles.cardTitle}>Development cost</Text>
            <Text style={styles.cardValue}>${developmentCost.toFixed(0)}</Text>
          </View>
          <View style={styles.summaryCard}>
            <Text style={styles.cardTitle}>Total time</Text>
            <Text style={styles.cardValue}>{summaryTime.toFixed(1)} h</Text>
          </View>
        </View>

        {/* Section Heading */}
        <Text style={styles.sectionHeading}>Summary</Text>

        {/* Development Time */}
       <View style={styles.table}>
  <Text style={styles.tableSectionTitle}>Development Time</Text>

  {selectedData.map((item, index) => (
    <View key={index} style={styles.moduleBlock}>
      {/* Module Header */}
      <View style={styles.row}>
        <Text style={[styles.cell, styles.moduleTitle]}>{item.questionTitle}</Text>
        <Text style={[styles.cellRight, styles.moduleHours]}>
          {(item.mvpHours + item.additionalHours).toFixed(1)} h
        </Text>
      </View>

      {/* Features List */}
      {[...item.selectedMVP, ...item.selectedAdditional].map((feature, i) => (
        <View key={i} style={styles.row}>
          <Text style={[styles.cell, styles.featureText]}>• {feature.text}</Text>
          <Text style={styles.cellRight}>{feature.hours.toFixed(1)} h</Text>
        </View>
      ))}
    </View>
  ))}
</View>


        {/* Non-Development Time */}
        <View style={styles.table}>
          <Text style={styles.tableSectionTitle}>Non-Development Time</Text>
          {normalizedTasks.map((item, index) => (
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
