import nats, { Stan } from "node-nats-streaming";

class NatsWrapper {
  private _client?: Stan;

  connect(cluster_id: string, client_id: string, url: string) {
    this._client = nats.connect(cluster_id, cluster_id, { url });
    return;
    this._client.on("connect", () => {
      console.log("CONNECTED TO NATS");
    });
  }
}

export const natsWrapper = new NatsWrapper();
