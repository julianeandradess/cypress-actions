const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6Ijc2NWFlMGE5LTk5OGMtNDg0Yi1iYTE3LWE0MzU2NzIyMGM2Ny0xNzI1MTI3Mzg3ODA5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzY3NThkZTctN2EzZi00YmI0LTg0MmMtMGI1ZTBmYzlkNDIxIiwidHlwZSI6InQifQ.4vckGfkftk6HMKyLm8NaCtVyaq2drTYH8k3FL4OR-tI'

cypress.run({

})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
