import './App.css'
import { ReviewDirectories } from './Components/ReviewDirectories';
import { signal } from '@preact/signals-react';


const directories = {
  directories1: [
    { name: "google" },
    { name: "yelp" }
  ],
  directories2: [
    { name: "google2" },
    { name: "yelp2" }
  ]

};

const shortcodes = {
  first_name: "Steven",
  last_name: "Haye"
}


const greeting = "Hello, this is a test, my first name is %first_name% and my last name is %last_name%, my full name is %first_name% %last_name%";
const greetingSignal = signal(greeting);
const directorySignal = signal(directories.directories1);


// search and replace shortcode

const updateShortcode = (code) => {
  if (greetingSignal.value.search(`%${code}%`)) {
    greetingSignal.value = greetingSignal.value.replaceAll(`%${code}%`, shortcodes[code]);
  }
};

function App() {

  return (
    <>
      <select onChange={(e) => {
        directorySignal.value = directories[e.target.value];
      }}>
        <option value="directories1" >Location 1</option>
        <option value="directories2" >Location 2</option>
      </select>
      <ul>
        <ReviewDirectories directories={directorySignal} />
      </ul>
      <button onClick={() => updateShortcode('first_name')}>First Name</button>
      <button onClick={() => updateShortcode('last_name')}>Last Name</button>
      <br />
      <textarea
        onChange={(e) => {
          greetingSignal.value = e.target.value;
        }}
        value={greetingSignal} />
      <br />

    </>
  )
}

export default App
