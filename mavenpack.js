const mvn = require('maven').create();
mvn.execute(['clean', 'package'], { 'skipTests': true });
//.then(() => {
  // As mvn.execute(..) returns a promise, you can use this block to continue
  // your stuff, once the execution of the command has been finished successfully.
//});
