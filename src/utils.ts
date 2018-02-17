export const centerGameObjects = (objects: Array<object>) => {
  objects.forEach((object) => {
    object.anchor.setTo(0.5);
  });
};

export const anotherUtil = () => false;
