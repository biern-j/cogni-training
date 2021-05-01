export const targetGenerator = (
  targetDificulty: number,
  trainingRepetition: number
): string[] => {
  const targetSub = () => Array.from(Array(targetDificulty)).map((item) =>
    Math.floor(Math.random() * 9)
  );
  const target = () => targetSub().reduce((acc, curr) => acc + curr.toString(), "");

  const trainingTargets = Array.from(Array(trainingRepetition)).map(item => target() );

  return trainingTargets;
};
