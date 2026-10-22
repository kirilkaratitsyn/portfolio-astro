import type { IconKey } from './ui-icons';

/** Topic of an article (frontmatter `topic`) and the flat icon shown next to its label. Labels: i18n blog.topics. */
export const BLOG_TOPICS = ['build', 'migration', 'speed', 'redesign', 'support'] as const;
export type BlogTopic = (typeof BLOG_TOPICS)[number];

export const TOPIC_ICONS: Record<BlogTopic, IconKey> = {
  build: 'shop',
  migration: 'migrate',
  speed: 'chart',
  redesign: 'puzzle',
  support: 'lifebuoy',
};
