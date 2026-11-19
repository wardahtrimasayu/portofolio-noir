import { describe, expect, it } from 'vitest';
import { cssVariables, VARIANTS } from './palette';

describe('cssVariables', () => {
  it('maps every palette role to a --tn-* custom property', () => {
    const vars = cssVariables('dark');

    expect(vars['--tn-surface-base']).toBe('#0B0B0C');
    expect(vars['--tn-accent-on-primary']).toBe('#0B0B0C');
    expect(vars['--tn-ansi-bright-cyan']).toBe('#56D4DD');
  });

  it('defines the same properties for both variants', () => {
    const [dark, light] = VARIANTS.map(v => Object.keys(cssVariables(v)).sort());

    expect(light).toEqual(dark);
  });
});
