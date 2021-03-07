export default class CountdownTimer {
  constructor({ selector, targetDate }) {
    this._refs = this._getRefs(selector);
    this._targetDate = targetDate;
    this._startCountdown();
  }

  _getRefs(root) {
    const refs = {};
    refs.days = document.querySelector(`${root} [data-value="days"]`);
    refs.hours = document.querySelector(`${root} [data-value="hours"]`);
    refs.mins = document.querySelector(`${root} [data-value="mins"]`);
    refs.secs = document.querySelector(`${root} [data-value="secs"]`);
    return refs;
  }

  _updateTimer() {
    const time = Date.parse(this._targetDate) - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this._refs.days.textContent = days;
    this._refs.hours.textContent = hours.toString().padStart(2, '0');
    this._refs.mins.textContent = mins.toString().padStart(2, '0');
    this._refs.secs.textContent = secs.toString().padStart(2, '0');
  }

  _startCountdown() {
    setInterval(this._updateTimer.bind(this), 1000);
  }
}
