import PropTypes from 'prop-types';
import { RadarChart, PolarAngleAxis, PolarRadiusAxis, Radar,Legend,PolarGrid} from 'recharts';


const ReachartsRadar = ({ data }) => {
    // Prepare the data
    const prepareData = Object.keys(data[0]).map(key => ({
        subject: key,
        character1: data[0][key],
        character2: data[1][key],
}));

    

    return (
        <RadarChart outerRadius={90} width={730} height={250}  data={prepareData} >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Character1" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Character2" dataKey="value" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
        </RadarChart>
    );
    
}
ReachartsRadar.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default ReachartsRadar;