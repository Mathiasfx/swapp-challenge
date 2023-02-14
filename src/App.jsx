import "./App.css";
import SearchPeople from "./components/people/Search/SearchPeople";
import PeopleList from "./components/people/PeopleList/PeopleList";
import PeopleForm from "./components/people/Form/PeopleForm";

function App() {
  return (
    <div className="main-container">
      <div className="d-flex justify-content-center align-items-center mt-3">
        <SearchPeople />
        <PeopleForm />
      </div>

      <PeopleList />
    </div>
  );
}

export default App;
