export function getDewPoint(tempCelsius: number, humidity: number): number {
    const dewPoint = tempCelsius - ((100 - humidity) / 5);
    return dewPoint;
  }