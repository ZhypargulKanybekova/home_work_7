import { ExpensesCard } from "./ExpensesCard";

export const Expenses = (props) => {
  const { data } = props;
  return (
    <div
      style={{
        width: "790px",
        padding: "30px 20px",
        marginTop: "20px",
        backgroundColor: "#1F1F1F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "20px",
      }}
    >
      {data.map((el) => {
        return <ExpensesCard key={el.id} el={el} />;
      })}
    </div>
  );
};
