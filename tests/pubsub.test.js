import pubsub from "../client/lib/pubsub.js";
import test from "tape";
const ps = pubsub();

test("should fire a call back when a topic is published", t => {
  let str = "you am";
  ps.subscribe("coolEvent", value => {
    t.equals(value, str);
    t.end();
  });
  ps.publish("coolEvent", str);
});
