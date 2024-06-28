import './styles.css';
import './App.css';

// import "./1_test-nonRepeating.ts";
// import Timer from './2_test-timer-component';
import './3_test-getUrls.ts';
import './4_test_nodesCleaner.ts';

import { testRunWithLimit, runTestsNodeCleaner } from './tests';

/**      Others      */
// import "./tree";
// import './fizzBuzz';

export default function App() {
  return (
    <div className="App">
      <h1>Signal interview tasks</h1>
      {/* <Timer /> */}
      {/* <Container /> */}
      {/* <LifeCycle /> */}
      <button onClick={() => testRunWithLimit()}>Run task_3 tests</button>
      <button onClick={() => runTestsNodeCleaner()}>Run task_4 tests</button>
    </div>
  );
}
