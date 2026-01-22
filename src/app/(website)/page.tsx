import '@/app/utils/styles/global.css'
import { BannerComponent } from "@/components/BannerComponent/BannerComponent";
import { IncludesComponent } from "@/components/IncludesComponent/IncludesComponent";
import { OurClientsComponent } from "@/components/OurClientsComponent/OurClientsComponent";
import { WeMakeDifferentComponent } from "@/components/WeMakeDifferentComponent/WeMakeDifferentComponent";
import { OurApproachComponent } from "@/components/OurApproachComponent/OurApproachComponent";
import { WhatWeDoComponent } from "@/components/WhatWeDoComponent/WhatWeDoComponent";
import { ContactContainer } from "@/containers/ContactContainer/ContactContainer";

export default function AppContainer() {
  return (
    <div>
      {/* <NotFoundComponent/> */}
      <BannerComponent/>
      <WhatWeDoComponent />
      <IncludesComponent />
      <WeMakeDifferentComponent/>
      <OurApproachComponent/>
      <OurClientsComponent />
      <ContactContainer/>
    </div>
  );
}
