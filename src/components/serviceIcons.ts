import type { LucideIconName } from './LucideIcon.astro';

const SERVICE_ICON_BY_ID: Record<string, LucideIconName> = {
  'store-setup': 'store',
  'platform-migration': 'arrow-right-left',
  'app-integration': 'puzzle',
  'performance-seo': 'gauge',
  'cro-audit': 'clipboard-check',
  support: 'life-buoy',
};

export function getServiceIcon(id: string): LucideIconName {
  return SERVICE_ICON_BY_ID[id] ?? 'puzzle';
}
