const profile = {
  name: "joe",
  age: 28,

  coords: {
    lat: 0,
    lng: 15
  },
  
  setAge(age: number): void {
    this.age = age;
  }
};

// ES2015 destruct syntax
const { name, age  }: { name: string; age: number } = profile;
const { 
  coords: { lat, lng } 
}: { coords: {lat: number; lng: number } } = profile;