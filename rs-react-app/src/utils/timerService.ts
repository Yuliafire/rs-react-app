class TimerService {
  private timers: number[] = [];

  setTimeout(callback: () => void, delay: number): number {
    const timerId = window.setTimeout(callback, delay);
    this.timers.push(timerId);
    return timerId;
  }

  clearAll(): void {
    this.timers.forEach((timerId) => clearTimeout(timerId));
    this.timers = [];
  }
}

export default new TimerService();
