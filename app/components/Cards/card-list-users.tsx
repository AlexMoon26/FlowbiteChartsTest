import { CardUser } from "@/app/components/CardUser";
import { LoaderListUser } from "../Loaders";
import dynamic from "next/dynamic";

const DynamicChartComponent = dynamic(
  () => import("@/app/components/CardUserItem"),
  {
    ssr: false,
    loading: () => <LoaderListUser />,
  }
);

const CardListUsers = ({ topUsers }) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between flex-wrap">
        <div className="w-full md:w-auto md:flex-shrink-0 md:mr-4">
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            Топ пользователей
          </h5>
        </div>
      </div>
      <DynamicChartComponent topUsers={topUsers} />
    </div>
  );
};

export default CardListUsers;
