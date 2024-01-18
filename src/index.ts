interface ObjectType {
  [key: number]: boolean | number;
}

const filterClassname = (obj: ObjectType) => {
  let cls = [];

  const filteredBoolean = Object.entries(obj).filter(
    ([_, val]) => val === true || val == 1
  );

  const filteredArr = Object.fromEntries(filteredBoolean);

  for (let key in filteredArr) {
    cls.push(key);
  }

  return cls.join(" ");
};

const clnames = (...classes: any) => {
  let cls = [];

  for (let i = 0; i < classes.length; i++) {
    const newClass = classes[i];

    if (typeof newClass === "string") {
      cls.push(newClass);
    }

    if (typeof newClass === "object") {
      cls.push(filterClassname(newClass));
    }
  }

  return cls.join(" ");
};

export default clnames;
