import getAllClassMethods from 'user-defined-methods';

// get all methods to execute inside browser
// import Driver from '@automatio/driver-methods';
import Driver from '@automatio/driver-methods';

const driver = new Driver();

if(typeof window !== 'undefined'){
  // expose driver itself so we can access it later
  window.driver = driver;
  
  // expose all methods from a driver instance
  // any method will reference the instance for "this"
  for (const method of getAllClassMethods(driver)) {
    window[method] = driver[method];
  }
}

export default driver;