import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, it } from 'vitest';
import Docs from './Docs.astro';

it('shows the four skill areas without starter installation instructions', async () => {
  const container = await AstroContainer.create();
  const html = await container.renderToString(Docs, { request: new Request('https://example.com/docs') });

  expect(html).toContain('Analisis Data &amp; Statistika');
  expect(html).toContain('Microsoft Excel');
  expect(html).toContain('bahasa R dan Python');
  expect(html).toContain('Analisis Keuangan Dasar');
  expect(html).not.toContain('npm install');
  expect(html).not.toContain('Getting started');
  expect(html).not.toContain('fictional demo');
});
