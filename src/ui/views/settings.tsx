import { Button } from "@/components/ui/button";

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Settings</h1>
      <div className="space-y-4">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">Theme Preferences</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Configure how your theme editor behaves.
          </p>
          <Button variant="outline">Change Theme Mode</Button>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">Export Options</h2>
          <p className="text-sm text-muted-foreground mb-3">
            Configure default export settings.
          </p>
          <Button variant="outline">Configure Export</Button>
        </div>
      </div>
    </div>
  );
}