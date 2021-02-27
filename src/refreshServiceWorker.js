import { Workbox } from "workbox-window";

export default function workboxRefresh() {
  if ("serviceWorker" in navigator) {
    const wb = new Workbox("/sw.js");

    wb.addEventListener("waiting", async () => {
      await caches.delete("js-cache");
      await caches.delete("css-cache");
      window.location.reload();
      wb.addEventListener("controlling", () => {
        window.location.reload();
      });
      wb.messageSW({ type: "SKIP_WAITING" });
    });

    wb.register();
  }
}
