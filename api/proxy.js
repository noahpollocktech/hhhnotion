export default async function handler(request) {
  const notionUrl =
    'https://beaded-sale-839.notion.site/212c68cebfd080289c95d8b6822a59c8?v=212c68cebfd080489871000c9f02802d';

  const response = await fetch(notionUrl);
  const html = await response.text();

  return new Response(html, {
    headers: {
      'content-type': 'text/html',
    },
  });
}
