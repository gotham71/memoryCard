export interface LevelTimeAndPointsPreset {
  id: string;
  name: string;
  points: number;
  time: number;
}

export const LEVEL_TIME_AND_POINTS_PRESETS: LevelTimeAndPointsPreset[] = [
  {
    id: '1',
    name: 'Bajo',
    points: 10,
    time: 10,
  },
  {
    id: '2',
    name: 'Medio',
    points: 20,
    time: 5,
  },
  {
    id: '3',
    name: 'Alto',
    points: 30,
    time: 2,
  },
];
