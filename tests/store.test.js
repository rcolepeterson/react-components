import test from 'tape';
import {store, reducer} from '../client/lib/store';

test('should add one item to an array on the state', (t) => {
  const myStore = store(reducer);
  myStore.subscribe(() => {
    t.equals(myStore.getState().length, 1);
    t.end();
  });
  myStore.dispatch({type:'add', item:'cole'});
});