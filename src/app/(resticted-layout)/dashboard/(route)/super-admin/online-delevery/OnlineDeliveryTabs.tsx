"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import MonthlyPage from "./MonthlyPage";
import DailyDelevery from "./DailyDelevery";
const OnlineOrder = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="flex gap-2 w-[300px]">
        <TabsTrigger value="account">
          <button className="ml-2">Daily Delevery</button>
        </TabsTrigger>
        <TabsTrigger value="password">
          <button className="ml-2">Monthly Delevery</button>
        </TabsTrigger>
      </TabsList>
      {/* Daily Deliverty */}
      <TabsContent value="account">
        <DailyDelevery />
      </TabsContent>
      {/* Monthly Delivary */}
      <TabsContent value="password">
        <MonthlyPage />
      </TabsContent>
    </Tabs>
  );
};
export default OnlineOrder;
