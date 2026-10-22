import { localizePath, type Locale, type UI } from '../i18n';
import { getServices, type ServicePage, type WorkKind, type WorkProject } from './content';
import type { IconName } from './icons';

/** One 3D icon and one kind of project per service, in the order of services.items. */
export const SERVICE_ICONS: IconName[] = ['shop', 'migrate', 'puzzle', 'chart', 'funnel', 'lifebuoy'];
export const SERVICE_KINDS: WorkKind[] = ['build', 'migration', 'features', 'speed', 'redesign', 'support'];

export interface ServiceRow {
  id: string;
  title: string;
  description: string;
  tags: string[];
  kind: WorkKind;
  icon: IconName;
  /** Projects of this kind (all, including archived ones: the number the /projects filter shows). */
  count: number;
  /** Up to three live projects of the kind for the screens, ones not shown in an earlier row first. */
  shots: WorkProject[];
  /** /projects filtered to the kind. */
  href: string;
  /** The service's own page, when it has one. */
  page: ServicePage | undefined;
}

/** The rows of the home Services section and of the /services page. */
export async function getServiceRows(locale: Locale, t: UI, works: WorkProject[]): Promise<ServiceRow[]> {
  const pages = await getServices(locale);
  const shown = new Set<string>();
  return t.services.items.map((item, index) => {
    const kind = SERVICE_KINDS[index] ?? 'build';
    const related = works.filter((w) => w.work.includes(kind));
    const live = related.filter((w) => !w.archived);
    const shots = [...live.filter((w) => !shown.has(w.id)), ...live.filter((w) => shown.has(w.id))].slice(0, 3);
    for (const w of shots) shown.add(w.id);
    return {
      ...item,
      kind,
      icon: SERVICE_ICONS[index] ?? 'shop',
      count: related.length,
      shots,
      href: `${localizePath(locale, '/projects')}?work=${kind}`,
      page: pages.find((page) => page.kind === kind),
    };
  });
}
