import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  get client() {
    if (!this._client)
      throw new Error("Cannot access NATS CLIENT before connecting");
    return this._client;
  }

  connect(cluster_id: string, client_id: string, url: string) {
    this._client = nats.connect(cluster_id, client_id, { url });
    return new Promise<void>((resolve, reject) => {
      this.client.on("error", (err) => {
        console.log("FAILED TO CONNECT TO NATS", err);
        reject(err);
      });
      this.client.on("connect", () => {
        console.log("CONNECTED TO NATS");
        resolve();
      });
    });
  }
}

export const natsWrapper = new NatsWrapper();
