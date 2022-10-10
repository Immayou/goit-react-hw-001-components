import PropTypes from 'prop-types'; 
import { Box, Title, List, ListItem, ItemLabel, ItemValue } from "./Statistics.styled";


export const Statistics = ({title, stats}) => {
    return (
            <Box>
              {title && <Title>{title}</Title>}
            <List>
            {stats.map(data => (
              <ListItem key={data.id} color={data.id}>
                <ItemLabel>{data.label}</ItemLabel>
                <ItemValue>{data.percentage}%</ItemValue>
              </ListItem>))
             }
            </List>
          </Box>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string,
            label: PropTypes.string,
            percentage: PropTypes.number,
          }).isRequired,
    ).isRequired
}