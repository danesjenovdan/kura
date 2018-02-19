export const centerGameObjects = (objects: Array<Phaser.Sprite>) => {
  objects.forEach((object) => {
    object.anchor.setTo(0.5);
  });
};

export const anotherUtil = () => false;
