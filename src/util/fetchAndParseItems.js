import jsyaml from 'js-yaml';

export async function fetchAndParseItems(src) {
  const res = await (await fetch(src)).text();

  const issues = jsyaml
    .load(res)
    .map(({ Issue, Date: IssueDate, Link, Tutorials, Updates, Releases }) => {
      const [month, year] = IssueDate.split('/');
      return {
        issueNumber: Issue,
        date: new Date(year, month - 1),
        directLink: Link,
        downloadLink: `https://phaser.io/images/newsletter/pdf/issue${Issue}.pdf`,
        tutorials: Tutorials ?? [],
        updates: Updates ?? [],
        releases: Releases ?? []
      };
    });
  console.log(issues);
  return issues;
}
