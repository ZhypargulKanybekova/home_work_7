import styled from "styled-components";


export const ExpensesCard = ({ el}) => {
  const dateMonth = new Date(el.date).toLocaleString("ru-ru", {
    month: "long",
  });
const dateYear = new Date(el.date).getFullYear()
const dateDay = new Date(el.date).getDate()
  return (
    <GeneralCardBlock>
      <FirstChildBlock>
        <BlockForDate>
          <span>{dateMonth}</span>
          <span>{dateYear}</span>
          <span className="span">{dateDay}</span>
        </BlockForDate>
        <DateStyle>{el.title}</DateStyle>
      </FirstChildBlock>
      <PriceStyle>{el.price} $</PriceStyle>
      {/* <button onClick={()=> onDelete(el.id)}>Delete</button> */}
     
    </GeneralCardBlock>
  );
};

const GeneralCardBlock = styled('div')`
 margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  padding: 20px 20px;
  align-items: center;
  background-color: #4b4b4b;
  border-radius: 15px;
  width: 96%;
`;

const FirstChildBlock = styled('div')`
 display: flex;
  justify-content: space-around;
`;
 const BlockForDate = styled('div')`
 text-align: center;
  color: #ffffff;
  box-sizing: border-box;
  width: 82.11px;
  height: 80px;
  background: #2a2a2a;
  border: 1px solid #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-weight: 600;
 `;

 const DateStyle = styled('p')`
  font-size: 23px;
  font-weight: 700;
  margin-left:150px;
 `;

 const PriceStyle = styled('p')`
  width: 90px;
  background-color: #40005d;
  border: 1px solid #ffffff;
  border-radius: 10px;
  color: #ffffff;
  padding: 10px;
  font-weight: bold;
  font-size: 20px;
 `
