declare function require(path: string): any;

interface ClockProps {
  hour: number;
  minute: number;
  month: number;
  date: number;
  weekday: string;
}