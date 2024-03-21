import Header from "@/components/Header";
import FabricPerformance from "@/components/FabricPerformance";
import WhatWeDo from "@/components/WhatWeDo";
import OurProducts from "@/components/OurProducts";
import FaqSection from "@/components/FaqSection";

export default function Home() {
  return (
    <div>
      <Header />
      <FabricPerformance />
      <WhatWeDo />
      <OurProducts />
      <FaqSection />
    </div>
  );
}