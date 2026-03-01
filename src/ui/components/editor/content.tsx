import ActivityBar from "./activitybar";
import EditorContainer from "./editor-container";
import EditorSidebar from "./sidebar";


export default function Content() {
    return (
        <div className="flex w-full h-full">
            <ActivityBar/>
            <EditorSidebar/>
            <EditorContainer/>
        </div>
    )
}