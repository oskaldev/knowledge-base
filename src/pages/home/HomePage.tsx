import { AppLayout } from "@app/layouts/AppLayouts";
import { SideBar } from "@components/home/SideBar";

export const HomePage = () => {
  return (
    <div>
      <AppLayout>
        <SideBar />
      </AppLayout>
    </div>
  );
};
