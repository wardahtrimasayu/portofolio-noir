import palette from '../data/palette.json';

export const VARIANTS = ['dark', 'light'] as const;
export type Variant = (typeof VARIANTS)[number];

type Colors = (typeof palette.variants)['dark'];

function colors(variant: Variant): Colors {
  return palette.variants[variant];
}

const kebab = (s: string) => s.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`);

export function cssVariables(variant: Variant): Record<string, string> {
  const out: Record<string, string> = {};
  const walk = (node: Record<string, unknown>, path: string[]) => {
    for (const [key, value] of Object.entries(node)) {
      if (typeof value === 'string') out[`--tn-${[...path, key].map(kebab).join('-')}`] = value;
      else walk(value as Record<string, unknown>, [...path, key]);
    }
  };
  walk(colors(variant), []);
  return out;
}
