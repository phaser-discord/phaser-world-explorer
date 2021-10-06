import jsyaml from 'js-yaml';

export async function fetchAndParseItems(src) {
  const res = await (await fetch(src)).text();

  return jsyaml.load(res);
}
