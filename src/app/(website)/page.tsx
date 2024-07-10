import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import '@/app/utils/styles/global.css'
import { NotFoundComponent } from "@/components/NotFoundComponent/NotFoundComponent";
import { PaidMediaComponent } from "@/components/PaidMediaComponent/PaidMediaComponent";
import { HerramientasComponent } from "@/components/HerramientasComponent/HerramientasComponent";

export default function AppContainer() {
  return (
    <div>
      <HeaderComponent/>
      <PaidMediaComponent/>
      <HerramientasComponent/>
    </div>
  );
}
