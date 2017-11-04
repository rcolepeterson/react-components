import pubsub from "../client/lib/pubsub.js";
import test from "tape";
test("should exist", t => {
  t.equals("object", typeof pubsub());
  t.end();
});

test("should return an object with a subscibe method", t => {
  t.equals("function", typeof pubsub().subscribe);
  t.end();
});
