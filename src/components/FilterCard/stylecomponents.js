import styled from "styled-components";

export const CardInput = styled.div`
  display: flex;
  padding: 4rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 1rem;
  background-color: white;
`;

export const ColumnElement = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-family: sans-serif;
  display: flex;
  justify-content: center;
`;

export const CardHeader = styled.h2`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  margin-top: 0;
`;

export const CardText = styled.p`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 0.875rem;
  color: rgba(0, 0, 0, 0.87);
  line-height: 1.75;
  font-weight: bold;
  letter-spacing: 0.02857em;
  margin: 0;
`;

export const RowCharts = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardCharts = styled.div`
  display: flex;
  padding: 2rem;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 1rem;
  background-color: white;
  /* width: 40%; */
  width: ${(props) => { return props.fullScreen ? '100%' : '40%' }};
`;

export const RowChartFullScreen = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 3rem;
`;

export const ImageIcon = styled.img`
  width: 1.5rem;
  margin-right: 0.5rem;
`;

export const IconContainer = styled.div`
  display: flex;
`;

export const ColumnInputsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnInput = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;