import { useThemeModal } from "@/core";

export default function Editor() {
  const theme = useThemeModal((s) => s.theme);

  const categories = [
    { id: "surfaces", label: "Surfaces", colors: ["editorBg", "sidebarBg", "activityBarBg", "panelBg"] },
    { id: "text", label: "Text", colors: ["foreground", "subtleForeground"] },
    { id: "structure", label: "Structure", colors: ["border", "focusBorder"] },
    { id: "interaction", label: "Interaction", colors: ["selection", "hover", "lineHighlight"] },
    { id: "accent", label: "Accent", colors: ["accent"] },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold mb-2">Theme Editor</h1>
        <p className="text-sm text-muted-foreground">Edit your VS Code theme colors by category.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="rounded-lg border p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-lg font-semibold mb-4">{category.label}</h2>
            <div className="space-y-4">
              {category.colors.map((colorKey) => (
                <div key={colorKey} className="space-y-2">
                  <label className="text-sm font-medium capitalize block">
                    {colorKey}
                  </label>
                  <div className="flex gap-2 items-center">
                    <input
                      type="color"
                      defaultValue={theme.colors[colorKey as keyof typeof theme.colors]}
                      className="h-10 w-12 rounded border cursor-pointer"
                    />
                    <code className="text-xs bg-muted p-2 rounded flex-1 font-mono">
                      {theme.colors[colorKey as keyof typeof theme.colors]}
                    </code>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}