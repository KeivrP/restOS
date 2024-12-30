'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Upload, History } from 'lucide-react';
import { toast } from 'sonner';

export function SettingsBackup() {
  const handleBackup = () => {
    toast.success('Backup created successfully');
  };

  const handleRestore = () => {
    toast.success('System restored successfully');
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Backup & Restore</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Manual Backup</h3>
          <p className="text-sm text-muted-foreground">
            Create a backup of your entire system including all settings and data
          </p>
          <div className="flex gap-4">
            <Button onClick={handleBackup}>
              <Download className="mr-2 h-4 w-4" />
              Create Backup
            </Button>
            <Button variant="outline">
              <History className="mr-2 h-4 w-4" />
              View History
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Restore System</h3>
          <p className="text-sm text-muted-foreground">
            Restore your system from a previous backup
          </p>
          <Button variant="outline" onClick={handleRestore}>
            <Upload className="mr-2 h-4 w-4" />
            Restore from Backup
          </Button>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-medium">Auto Backup</h3>
          <div className="flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              System is automatically backed up every day at midnight
            </p>
            <Button variant="link" className="text-sm">Configure</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}