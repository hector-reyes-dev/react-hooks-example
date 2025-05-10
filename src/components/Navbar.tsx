import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/usestate">useState</Link>
        </li>
        <li>
          <Link to="/useeffect">useEffect</Link>
        </li>
        <li>
          <Link to="/usecontext">useContext</Link>
        </li>
        <li>
          <Link to="/useref">useRef</Link>
        </li>
        <li>
          <Link to="/usereducer">useReducer</Link>
        </li>
        <li>
          <Link to="/usememo">useMemo</Link>
        </li>
        <li>
          <Link to="/usecallback">useCallback</Link>
        </li>
        <li>
          <Link to="/customhooks">Custom Hooks</Link>
        </li>
      </ul>
    </nav>
  );
};
