import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  justify-content: ${props => props.tempLeftProp ? 'flex-start' : 'center'};
  align-items: center;
`;

export default StyledLink