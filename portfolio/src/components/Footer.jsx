import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {new Date().getFullYear()} {personal.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
