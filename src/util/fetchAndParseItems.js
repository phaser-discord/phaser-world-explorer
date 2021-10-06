import jsyaml from 'js-yaml';

export async function fetchAndParseItems(src) {
  const res = await (await fetch(src)).text();

  const items = jsyaml.load(res).map(issue => {
    const [month, year] = issue.Date.split('/');
    issue.Date = new Date(year, month - 1);
    return issue;
  });
  return items;
}
