import { useState } from "react";

const studentName = "Ivan";
const courseName = "Frontend Development";
const year = 2026;

// ── Styles ──────────────────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@400;700;800&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0d0d0d;
    --surface: #161616;
    --surface2: #1f1f1f;
    --border: #2a2a2a;
    --accent: #c8f135;
    --accent2: #f1b035;
    --text: #f0f0f0;
    --muted: #666;
    --danger: #ff4d4d;
    --radius: 12px;
    --mono: 'Space Mono', monospace;
    --sans: 'Syne', sans-serif;
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    min-height: 100vh;
  }

  .app {
    max-width: 820px;
    margin: 0 auto;
    padding: 48px 24px 80px;
  }

  /* Header */
  .header {
    margin-bottom: 56px;
    border-left: 3px solid var(--accent);
    padding-left: 20px;
  }
  .header .badge {
    font-family: var(--mono);
    font-size: 11px;
    color: var(--accent);
    letter-spacing: 0.15em;
    text-transform: uppercase;
    margin-bottom: 8px;
  }
  .header h1 {
    font-size: clamp(28px, 5vw, 42px);
    font-weight: 800;
    line-height: 1.1;
    color: var(--text);
  }
  .header h1 span { color: var(--accent); }
  .header .sub {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--muted);
    margin-top: 10px;
  }

  /* Section cards */
  .card {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: var(--radius);
    padding: 28px;
    margin-bottom: 24px;
    transition: border-color 0.2s;
  }
  .card:hover { border-color: #3a3a3a; }
  .card-title {
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--accent2);
    margin-bottom: 20px;
  }

  /* Section 1 – Text Control */
  .heading-display {
    font-size: 22px;
    font-weight: 700;
    padding: 16px 20px;
    background: var(--surface2);
    border-radius: 8px;
    margin-bottom: 16px;
    border: 1px solid var(--border);
    min-height: 58px;
    transition: all 0.3s ease;
  }
  .heading-display.changed {
    color: var(--accent);
    border-color: var(--accent);
  }

  .message-display {
    font-family: var(--mono);
    font-size: 13px;
    padding: 12px 16px;
    background: var(--surface2);
    border-radius: 8px;
    color: var(--muted);
    margin-bottom: 16px;
    min-height: 44px;
    transition: color 0.3s;
  }
  .message-display.active { color: var(--accent2); }

  .btn-row { display: flex; gap: 12px; flex-wrap: wrap; }

  /* Buttons */
  .btn {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.05em;
    padding: 10px 20px;
    border-radius: 6px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.18s ease;
  }
  .btn-accent {
    background: var(--accent);
    color: #0d0d0d;
  }
  .btn-accent:hover { background: #b5dc1e; transform: translateY(-1px); }
  .btn-outline {
    background: transparent;
    color: var(--accent2);
    border-color: var(--accent2);
  }
  .btn-outline:hover { background: var(--accent2); color: #0d0d0d; transform: translateY(-1px); }
  .btn-danger {
    background: transparent;
    color: var(--danger);
    border-color: var(--danger);
    font-size: 11px;
    padding: 4px 10px;
  }
  .btn-danger:hover { background: var(--danger); color: #fff; }

  /* Section 2 – Calculator */
  .calc-inputs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-bottom: 16px;
  }
  .input-wrap label {
    display: block;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    margin-bottom: 6px;
  }
  .input-wrap input {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text);
    font-family: var(--mono);
    font-size: 20px;
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .input-wrap input:focus { border-color: var(--accent); }

  .calc-results {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 16px;
  }
  .result-box {
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 12px 16px;
  }
  .result-box .op {
    font-family: var(--mono);
    font-size: 10px;
    color: var(--muted);
    letter-spacing: 0.1em;
    margin-bottom: 4px;
  }
  .result-box .val {
    font-family: var(--mono);
    font-size: 22px;
    font-weight: 700;
    color: var(--accent);
  }

  /* Section 3 – Task Manager */
  .task-input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  .task-input-row input {
    flex: 1;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 6px;
    color: var(--text);
    font-family: var(--sans);
    font-size: 15px;
    padding: 10px 14px;
    outline: none;
    transition: border-color 0.2s;
  }
  .task-input-row input:focus { border-color: var(--accent); }

  .task-list { list-style: none; display: flex; flex-direction: column; gap: 8px; }
  .task-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: var(--surface2);
    border: 1px solid var(--border);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 15px;
  }
  .task-item:hover { border-color: #3a3a3a; }
  .task-item.completed {
    text-decoration: line-through;
    color: var(--muted);
    border-color: transparent;
    opacity: 0.6;
  }
  .task-empty {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--muted);
    text-align: center;
    padding: 24px;
  }
`;

// ── Component ────────────────────────────────────────────────────────────────
export default function App() {
  // Section 1 state
  const [heading, setHeading] = useState("Welcome to JavaScript & React!");
  const [headingChanged, setHeadingChanged] = useState(false);
  const [message, setMessage] = useState("Click the button below to see a message.");
  const [messageActive, setMessageActive] = useState(false);

  // Section 2 state
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [results, setResults] = useState(null);

  // Section 3 state
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handlers
  const handleChangeText = () => {
    setHeading("JavaScript is controlling this page!");
    setHeadingChanged(true);
  };

  const handleClick = () => {
    setMessage("You clicked the button!");
    setMessageActive(true);
  };

  const calculate = () => {
    const n1 = Number(num1);
    const n2 = Number(num2);
    setResults({
      add: n1 + n2,
      sub: n1 - n2,
      mul: n1 * n2,
      div: n2 !== 0 ? (n1 / n2).toFixed(4) : "∞",
    });
  };

  const addTask = () => {
    if (!taskInput.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: taskInput.trim(), done: false }]);
    setTaskInput("");
  };

  const toggleTask = (id) =>
    setTasks(tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));

  const removeTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        {/* Header */}
        <header className="header">
          <div className="badge">
            {courseName} · {year}
          </div>
          <h1>
            Hello, <span>{studentName}</span>
          </h1>
          <p className="sub">
            console.log(`Welcome ${studentName} to the ${courseName} course.`)
          </p>
        </header>

        {/* ── Section 1: Text Control ── */}
        <div className="card">
          <div className="card-title">01 / Text Control</div>
          <div className={`heading-display ${headingChanged ? "changed" : ""}`}>
            {heading}
          </div>
          <div className={`message-display ${messageActive ? "active" : ""}`}>
            {message}
          </div>
          <div className="btn-row">
            <button className="btn btn-accent" onClick={handleChangeText}>
              Change Heading
            </button>
            <button className="btn btn-outline" onClick={handleClick}>
              Click Me
            </button>
          </div>
        </div>

        {/* ── Section 2: Calculator ── */}
        <div className="card">
          <div className="card-title">02 / Calculator</div>
          <div className="calc-inputs">
            <div className="input-wrap">
              <label>NUMBER A</label>
              <input
                type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
                placeholder="0"
              />
            </div>
            <div className="input-wrap">
              <label>NUMBER B</label>
              <input
                type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
                placeholder="0"
              />
            </div>
          </div>
          <button className="btn btn-accent" onClick={calculate}>
            Calculate
          </button>
          {results && (
            <div className="calc-results">
              {[
                { op: "ADDITION", val: results.add },
                { op: "SUBTRACTION", val: results.sub },
                { op: "MULTIPLICATION", val: results.mul },
                { op: "DIVISION", val: results.div },
              ].map(({ op, val }) => (
                <div className="result-box" key={op}>
                  <div className="op">{op}</div>
                  <div className="val">{val}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── Section 3: Task Manager ── */}
        <div className="card">
          <div className="card-title">03 / Task Manager</div>
          <div className="task-input-row">
            <input
              type="text"
              placeholder="Add a new task..."
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
            />
            <button className="btn btn-accent" onClick={addTask}>
              Add
            </button>
          </div>
          {tasks.length === 0 ? (
            <div className="task-empty">No tasks yet. Add one above ↑</div>
          ) : (
            <ul className="task-list">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className={`task-item ${task.done ? "completed" : ""}`}
                  onClick={() => toggleTask(task.id)}
                >
                  <span>{task.text}</span>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeTask(task.id);
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
}
