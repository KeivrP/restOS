'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SettingsGeneral } from '@/components/settings/settings-general';
import { SettingsPrinter } from '@/components/settings/settings-printer';
import { SettingsBackup } from '@/components/settings/settings-backup';

export default function SettingsPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold">Settings</h1>
      
      <div className="grid gap-8">
        <SettingsGeneral />
        <SettingsPrinter />
        <SettingsBackup />
      </div>
    </motion.div>
  );
}