import { Provider } from 'react-redux';
import './App.css';
import store from './utils/store';
import Child from './components/Child'

function App() {

  return (
    <>
      <Provider store={store}>
        <div className="font-mono">
         <Child/>
          <span className="flex justify-center text-lg font-semibold">
            Created by Lokesh Pawar
          </span>
          <div className="flex justify-center items-center mx-auto text-lg font-semibold border-2 border-solid w-36 h-9 mt-3 hover:bg-gray-200 rounded-sm">
            <a href="https://lokeshpawar.me/" target="blank">
              For More 🚀
            </a>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
