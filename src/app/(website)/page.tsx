import { HeaderComponent } from "@/components/HeaderComponent/HeaderComponent";
import '@/app/utils/styles/global.css'
import { NotFoundComponent } from "@/components/NotFoundComponent/NotFoundComponent";
import { PaidMediaComponent } from "@/components/PaidMediaComponent/PaidMediaComponent";
import { HerramientasComponent } from "@/components/HerramientasComponent/HerramientasComponent";
import { QueHacemosComponent } from "@/components/QueHacemosComponent/QueHacemosComponent";
import { PublicidadComponent } from "@/components/PublicidadComponent/PublicidadComponent";
import { ComoLoHacemosComponent } from "@/components/ComoLoHacemos/ComoLoHacemos";
import { EquipoComponent } from "@/components/EquipoComponent/EquipoComponent";
import { ClientesComponent } from "@/components/ClientesComponent/ClientesComponent";
import { PartnersComponent } from "@/components/PartnersComponent/PartnersComponent";
import { ContactComponent } from "@/components/ContactComponent/ContactComponent";

export default function AppContainer() {
  return (
    <div>
      {/* <NotFoundComponent/> */}
      <HeaderComponent/>
      <ClientesComponent/>
      <PaidMediaComponent/>
      <QueHacemosComponent/>
      <ComoLoHacemosComponent/>
      <HerramientasComponent/>
      <PublicidadComponent/>
      <EquipoComponent/>
      <ContactComponent/>
      <PartnersComponent/>
    </div>
  );
}
