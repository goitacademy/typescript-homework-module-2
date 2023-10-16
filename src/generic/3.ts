/*
  У вас є функція merge, яка поєднує два об'єкти. 
  Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.
*/

function merge<T extends object, K extends object> (objA:T, objB:K) {
  return Object.assign(objA, objB);
}

export {}
