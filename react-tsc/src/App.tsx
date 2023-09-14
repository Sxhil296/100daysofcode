import "./App.css";
import { Status } from "./Status";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Greet } from "./components/Greet";
// import { Person } from "./components/Person";
// import { PersonList } from "./components/PersonList";

function App() {

  // const personName = {
  //   first: 'Bruce',
  //   last: 'Wayne'
  // }

  // const nameList = [
  //   {
  //     first: 'Bruce',
  //     last: 'Wayne'
  //   },
  //   {
  //     first: 'Patrick',
  //     last: 'Bateman'
  //   },
  //   {
  //     first: 'Clark',
  //     last: 'Kent'
  //   },
  // ]

  return <div className="App">
    {/* <Greet name='Patrick' tapeCount={12} isLoggedIn={false}/>
   
    <Person name={personName}/>
    <PersonList names={nameList}/> */}
    <Status status="error" />
    <Heading>Placeholder text</Heading>
    <Oscar>
      <Heading>Oscar goes to Leonardo!</Heading>
    </Oscar>
    <Greet name='Patrick'  isLoggedIn={false}/>
  </div>;
}

export default App;
