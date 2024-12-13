import ExpenseEntry from "../components/ExpenseEntry";
import AllExpenses from "../components/AllExpenses";

const MainLayout = () => {
  return (
    <div className="layout-wrapper">
      <div className="header">
        <ExpenseEntry />
      </div>
      <div className="main">
        <AllExpenses />
      </div>
    </div>
  );
};

export default MainLayout;
