import courses from "./index.json";

// By returning courseMap from this function we can get any course by using courseMap["id"]
export const getAllCourses = () => {
  return {
    data: courses,
    courseMap: courses.reduce((a, c, i) => {
      a[c.id] = c;
      a[c.id].index = i;
      return a;
    }, {}),
  };
};
