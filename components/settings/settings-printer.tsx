'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { toast } from 'sonner';

export function SettingsPrinter() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Printer settings updated successfully');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Printer Settings</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-print receipts</Label>
              <p className="text-sm text-muted-foreground">
                Automatically print receipts when orders are completed
              </p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label htmlFor="printerName">Default Printer</Label>
            <Input id="printerName" placeholder="Select printer" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="paperSize">Paper Size</Label>
            <select
              id="paperSize"
              className="w-full px-3 py-2 rounded-md border bg-background"
            >
              <option value="80mm">80mm (Standard Receipt)</option>
              <option value="58mm">58mm (Compact Receipt)</option>
              <option value="a4">A4 (Full Page)</option>
            </select>
          </div>

          <Button type="submit">Save Changes</Button>
        </form>
      </CardContent>
    </Card>
  );
}