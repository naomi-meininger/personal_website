import { useId, useRef, useState } from "react";
import { showsSeen } from "../data/theater.js";
import { publicFile } from "../data/links.js";

const MAX_GUESSES = 5;

// Higher/lower hint for a wrong guess; "so close" when within 2.
function hintFor(guess, answer) {
  const direction = guess < answer ? "Higher" : "Lower";
  return Math.abs(guess - answer) <= 2 ? `So close. ${direction}.` : `${direction}.`;
}

// The latest show: your own photo if you've added one, otherwise a stub with the title.
function LastShow({ show }) {
  if (!show) return null;
  return (
    <div className="last-show">
      {show.image ? (
        <img className="last-show-art" src={publicFile(show.image)} alt={show.imageAlt} loading="lazy" />
      ) : (
        <div className="last-show-art last-show-stub" aria-hidden="true">
          <span className="stub-admit">Admit one</span>
          <span className="stub-title">{show.title}</span>
        </div>
      )}
      <div>
        <p className="last-show-label">Last show I saw</p>
        <p className="last-show-title"><i>{show.title}</i></p>
        <p className="last-show-meta">{show.where}, {show.when}</p>
        {show.url && (
          <a className="text-link" href={show.url} target="_blank" rel="noopener">About the show on Broadway.com</a>
        )}
      </div>
    </div>
  );
}

// A theater ticket: guess on the left, and each guess punches a hole in the stub on the right.
export default function ShowGuess() {
  const { year, count, asOf } = showsSeen;
  const [guesses, setGuesses] = useState([]);
  const [value, setValue] = useState("");
  const [message, setMessage] = useState(`You get ${MAX_GUESSES} guesses. I'll tell you higher or lower.`);
  const inputRef = useRef(null);
  const inputId = useId();

  const won = guesses.includes(count);
  const over = won || guesses.length >= MAX_GUESSES;

  const submit = (event) => {
    event.preventDefault();
    const guess = Number(value);
    if (value.trim() === "" || !Number.isInteger(guess) || guess < 0) {
      setMessage("Enter a whole number, like 20.");
      return;
    }
    if (guesses.includes(guess)) {
      setMessage(`You already guessed ${guess}. Try a different number.`);
      return;
    }

    const next = [...guesses, guess];
    setGuesses(next);
    setValue("");

    if (guess === count) {
      setMessage(`${count}! You got it in ${next.length} ${next.length === 1 ? "guess" : "guesses"}.`);
    } else if (next.length >= MAX_GUESSES) {
      setMessage(`Out of guesses. It's ${count}.`);
    } else {
      const left = MAX_GUESSES - next.length;
      setMessage(`${hintFor(guess, count)} ${left} ${left === 1 ? "guess" : "guesses"} left.`);
      inputRef.current?.focus();
    }
  };

  const reset = () => {
    setGuesses([]);
    setValue("");
    setMessage(`You get ${MAX_GUESSES} guesses. I'll tell you higher or lower.`);
    requestAnimationFrame(() => inputRef.current?.focus());
  };

  return (
    <>
    <div className={`ticket${over ? " is-over" : ""}${won ? " is-won" : ""}`}>
      <div className="ticket-main">
        <h3>How many shows have I seen in {year}?</h3>

        {over ? (
          <p className="ticket-count" aria-hidden="true">{count}</p>
        ) : (
          <form className="ticket-form" onSubmit={submit} noValidate>
            <label htmlFor={inputId} className="visually-hidden">Your guess</label>
            <input
              id={inputId}
              ref={inputRef}
              type="number"
              inputMode="numeric"
              min="0"
              step="1"
              placeholder="Your guess"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="button">Guess</button>
          </form>
        )}

        <p className="ticket-message" role="status">{message}</p>

        {over && (
          <div className="ticket-after">
            <p className="ticket-note">
              Counted in my{" "}
              <a className="text-link" href="https://www.theaterdiary.com/" target="_blank" rel="noopener">Mezzanine</a>{" "}
              log as of {asOf}.
            </p>
            <button type="button" className="button" onClick={reset}>Play again</button>
          </div>
        )}
      </div>

      <div className="ticket-stub" aria-label={`Guesses used: ${guesses.length} of ${MAX_GUESSES}`}>
        <ol className="punches">
          {Array.from({ length: MAX_GUESSES }, (_, i) => {
            const guess = guesses[i];
            const used = guess !== undefined;
            return (
              <li key={i} className={used ? (guess === count ? "punched hit" : "punched") : ""}>
                <span className="hole" aria-hidden="true"></span>
                <span className="punch-label">{used ? guess : ""}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
    <LastShow show={showsSeen.latest} />
    </>
  );
}
