# Current

A server-side BitTorrent web app for Safari and other browsers. Add a magnet link, upload a .torrent file, or search Internet Archive movie items. Completed files can be saved via the browser.

## Run
Requires Node.js 20 or later. Run `npm install`, then `npm start`. Open port 3000.

## Important limitations
- This is a prototype, not a production service. There is no authentication, HTTPS configuration, quota, malware scanning, multi-user isolation, or abuse protection. Do not expose it publicly or use for private material without adding these safeguards.
- Anyone with access can add torrents, see transfer information, download files, and remove entries. Magnet links can contain tracker URLs, and BitTorrent peers can see the server's IP address. Downloads may upload data to peers.
- Searches only query Internet Archive. Not every search result has an available torrent, and some torrents may have no active peers. Check content rights before downloading.
- Torrent state is held in memory and does not resume automatically after a server restart. Removing a torrent from the UI leaves files on disk. Downloaded content uses server storage. Sandbox previews are temporary and not a permanent hosting service.
- This is an independent implementation, not TorrDroid or its source code.

## Install on a phone
Open the server-hosted site over HTTPS in Safari on iPhone, tap Share, then **Add to Home Screen**. On Android, use the browser's **Install app** or **Add to Home screen** option. The app can be installed, but torrent operations need a running server and internet connection.

GitHub Pages serves only static files; it cannot run `server.js` or the torrent engine. The Pages deployment is a non-functional interface preview, not a working downloader. Host the complete app on a Node.js server and use that HTTPS URL for the functional install.
