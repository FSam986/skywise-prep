import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Features } from "@/components/Features";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Categories />
      <Features />
    </main>
  );
};

export default Index;