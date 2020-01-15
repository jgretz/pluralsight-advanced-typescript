export const sealed = (name: string): Function => {
  return (target: Function): void => {
    console.log(`Sealing the constructor: ${name}`);

    Object.seal(target);
    Object.seal(target.prototype);
  };
};

export function logger<TFunction extends Function>(
  target: TFunction
): TFunction {
  let newConstructor: Function = function(): void {
    console.log(`Creating new instance ${target}`);
  };

  newConstructor.prototype = Object.create(target.prototype);
  newConstructor.prototype.constructor = target;

  return <TFunction>newConstructor;
}
