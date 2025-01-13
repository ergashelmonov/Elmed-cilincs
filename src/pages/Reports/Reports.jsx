import { Route, Routes } from "react-router-dom";
import { ReportsTable, SideBarUnvers } from "../../components/shared";
import { pagesReport } from "../../utils/contains";
import { ReportsDetails } from "./pages/ReportsDetails/ReportsDetails";
import { DailyReports } from "./pages/DailyReports/DailyReports";
import { PeriodicReports } from "./pages/PeriodicReports/PeriodicReports";
import { DailyExpenses } from "./pages/DailyExpenses/DailyExpenses";
import { ExpensesReports } from "./pages/ExpensesReports/ExpensesReports";
import { CashReports } from "./pages/CashReports/CashReports";
import { DailyCashReport } from "./pages/DailyCashReport/DailyCashReport";

export const Reports = () => {

  return (
    <div style={{ display: "flex" }}>
      <SideBarUnvers
        title={"Ҳисоботлар"}
        url={"/reports"}
        pages={pagesReport}
      />
      <Routes>
        <Route path="/" element={<ReportsTable />} />
        <Route path="/details" element={<ReportsDetails />} />
        <Route path="/daily" element={<DailyReports />} />
        <Route path="/periodic" element={<PeriodicReports />} />
        <Route path="/expenses-daily" element={<DailyExpenses />} />
        <Route path="/expenses" element={<ExpensesReports />} />
        <Route path="/cash-reports" element={<CashReports />} />
        <Route path="/cash-daily-reports" element={<DailyCashReport />} />
      </Routes>
    </div>
  );
};
