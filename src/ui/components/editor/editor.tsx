import Content from "./content";
import StatusBar from "./statusbar";

export default function Editor() {
  return (
    <div className="flex flex-col bg-accent w-225 h-154.25 rounded-xl overflow-hidden">
      <Content/>
      <StatusBar/>
    </div>
  );
}
