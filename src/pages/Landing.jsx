import styled from 'styled-components';

const StyledBtn = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  &:focus {
    outline: none;
  }
`;

const Landing = () => {
  return <div>Landing</div>;
};

export default Landing;
