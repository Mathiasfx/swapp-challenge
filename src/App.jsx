import "./App.css";
import SearchPeople from "./components/people/Search/SearchPeople";
import PeopleList from "./components/people/PeopleList/PeopleList";

function App() {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column w-100">
      <SearchPeople />
      <PeopleList />
    </div>
  );
}

export default App;
