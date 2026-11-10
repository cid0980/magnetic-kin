# Current

A browser-only WebTorrent experiment installable on iPhone or Android. GitHub Pages hosts the static files; torrent data is transferred directly in the browser, with no torrent backend.

## Usage
Open the site in Safari, add a magnet link or `.torrent` file, and keep it open. Once a file completes, tap Save. iPhone: Share → Add to Home Screen. Android: browser menu → Install app / Add to Home screen. Internet Archive search links to its own item pages; search results aren't automatically added as torrents.

## Limitations and privacy
- Browser clients can only connect to WebRTC-compatible peers via WebSocket trackers, not conventional TCP/uTP BitTorrent peers or DHT. Many torrents, especially movie torrents, will not work. Tracker availability is not guaranteed.
- The browser needs internet access, WebRTC, working external trackers, available peers, and enough local storage. Peers and trackers can see your IP address; uploading/seeding may occur.
- iOS may suspend the browser in the background. Keep it open and save files before closing. Downloads don't resume after refresh. Large files may exceed Safari's storage or memory limits, especially during saving. If browser file storage isn't supported, chunks are stored in memory.
- Only download material you have the right to access. No malware scanner is provided.
- Installable web app support does not turn it into a native torrent client. Internet Archive results may have different access rights or be restricted.
