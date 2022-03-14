import { useState } from "react";
import AddEvent from "./AddEvent";
import { Transition } from "@headlessui/react";
import CalPage from "./CalPage";
import LandingPage from "./LandingPage";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtJkZDywQW4xMM58IkSsC3gs8YKPXly64",
  authDomain: "calendar-ui-3fbb3.firebaseapp.com",
  projectId: "calendar-ui-3fbb3",
  storageBucket: "calendar-ui-3fbb3.appspot.com",
  messagingSenderId: "957505818237",
  appId: "1:957505818237:web:6ac272e19231bf94b42b14",
  measurementId: "G-2EJ1THT14R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


function App() {
  const LP = <LandingPage onClick={()=>{setCount(1)}}/>
  const CP = <CalPage onClick={()=>{setCount(2)}}/>
  const [count,setCount] = useState(0);
  return (
    <div class="h-screen w-screen dark bg-primary flex justify-center">
      <div>
      <Transition as="div"
          show={(count === 0)}
          appear={true}
          enter="transition-all duration-1000"
          enterFrom="transform translate-x-full"
          enterTo="transform translate-x-0"
      >
        {LP}
      </Transition>
      <Transition as="div"
        show={(count === 1)}
        appear={true}
        enter="transition-all duration-1000"
        enterFrom="transform translate-x-full"
        enterTo="transform translate-x-0"
                    >
                      {CP}
        </Transition>
        </div>
    </div>
  );
}

export default App;
