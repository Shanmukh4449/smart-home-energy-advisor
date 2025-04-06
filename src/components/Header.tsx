
import { Lightbulb } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Lightbulb className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h1 className="text-2xl font-bold gradient-heading">Smart Home Energy Advisor</h1>
            <p className="text-muted-foreground text-sm">Optimize your appliance usage with fuzzy logic</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
