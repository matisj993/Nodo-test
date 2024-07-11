import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import '@/app/utils/styles/global.css'
import { NotFoundComponent } from "@/components/NotFoundComponent/NotFoundComponent";
import { PaidMediaComponent } from "@/components/PaidMediaComponent/PaidMediaComponent";
import { HerramientasComponent } from "@/components/HerramientasComponent/HerramientasComponent";
import { QueHacemosComponent } from "@/components/QueHacemosComponent/QueHacemosComponent";

export default function AppContainer() {
  return (
    <div>
      {/* <NotFoundComponent/> */}
      <HeaderComponent/>
      <PaidMediaComponent/>
      <HerramientasComponent/>
      <QueHacemosComponent/>
    </div>
  );
}
